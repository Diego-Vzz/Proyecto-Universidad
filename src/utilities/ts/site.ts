import router from "../../router";
import api from "../../services/s_api";
import Cookies from "js-cookie";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

interface NotyfOptions {
  type: "success" | "error" | "warning" | "info";
  message: string;
}

interface DatabaseState {
  status: number;
  message: string;
  data: Record<string, any>;
  isLoading: boolean;
  reset(): void;
}

const httpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
} as const;

type httpMethod = (typeof httpMethods)[keyof typeof httpMethods];

const REQUEST_TIMEOUT = 30000;

// Clase principal
export class dgav {
  static httpMethod = httpMethods;
  static dataBase: DatabaseState = {
    status: 200,
    message: "",
    data: {},
    isLoading: false,
    reset() {
      this.status = 200;
      this.message = "";
      this.data = {};
      this.isLoading = false;
    },
  };

  public static async apiRequest(
    endPoint: string,
    method: httpMethod,
    body?: Record<string, any>
  ): Promise<any> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    try {
      this.dataBase.isLoading = true;

      const response = await this.handleRequest(
        method,
        endPoint,
        body,
        controller.signal
      );

      if (!response) {
        throw new Error("Invalid server response");
      }

      const { variables, status } = response;
      this.dataBase.status = status;

      if (response.message) {
        this.handleError(response.message);
        return;
      }

      return variables;
    } catch (error: any) {
      if (error.name === "AbortError") {
        this.handleError("Request timeout - please try again");
      } else if (error.response) {
        const message = error.response.data?.message || "Server error occurred";
        this.handleError(message, error.response.status);
      } else if (error.request) {
        this.handleError("No response from server - check your connection");
      } else {
        this.handleError(error.message || "An unexpected error occurred");
      }
    } finally {
      clearTimeout(timeoutId);
      this.dataBase.isLoading = false;
    }
  }

  private static async handleRequest(
    method: httpMethod,
    endPoint: string,
    body?: Record<string, any>,
    signal?: AbortSignal
  ): Promise<any> {
    const config = { signal };

    switch (method) {
      case this.httpMethod.GET:
        return (await api.get(endPoint, config)).data;
      case this.httpMethod.POST:
        if (!body) {
          throw new Error("Body is required for POST requests");
        }
        return (await api.post(endPoint, body, config)).data;
      case this.httpMethod.PUT:
        if (!body) {
          throw new Error("Body is required for PUT requests");
        }
        return (await api.put(endPoint, body, config)).data;
      case this.httpMethod.DELETE:
        return (await api.delete(endPoint, config)).data;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  }

  private static handleError(message: string, status: number = 500): void {
    this.dataBase.reset();
    this.dataBase.status = status;
    this.dataBase.message = message;
  }
}

export class site {
  public static isNullOrEmpty(value: unknown): boolean {
    if (value === null || value === undefined) return true;
    if (typeof value === "string") return value.trim() === "";
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === "object") return Object.keys(value).length === 0;
    return false;
  }

  public static RedirectPage(
    url: string,
    parametros: Record<string, any> = {},
    functionOn?: () => void
  ): void {
    const settingsRouter: Record<string, any> = {
      name: url,
    };

    if (
      parametros &&
      (Array.isArray(parametros)
        ? parametros.length > 0
        : Object.keys(parametros).length > 0)
    ) {
      settingsRouter["params"] = parametros;
    }
    router.push(settingsRouter);

    if (functionOn) {
      functionOn();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  public static setCookies(cookies: Record<string, string>): void {
    Object.entries(cookies).forEach(([key, value]) => {
      Cookies.set(key, value, {
        path: "/",
        sameSite: "Strict",
        expires: 7,
      });
    });
  }

  public static getCookies(key: string) {
    return Cookies.get(key);
  }

  public static Alert(opciones: NotyfOptions) {
    const notyf = new Notyf({
      duration: 5000,
      position: {
        x: "right",
        y: "top",
      },
    });

    switch (opciones.type) {
      case "success":
        notyf.success(opciones.message);
        break;
      case "error":
        notyf.error(opciones.message);
        break;
    }
  }
}
