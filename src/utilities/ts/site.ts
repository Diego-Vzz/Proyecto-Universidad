import api from "../../services/s_api";

// Definición de tipos
export const HttpMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
} as const;

export type HttpMethod = typeof HttpMethod[keyof typeof HttpMethod];

interface ApiResponse<T = any> {
    status: number;
    message: string;
    data: T;
}

interface DatabaseState {
    status: number;
    message: string;
    data: Record<string, any>;
    reset(): void;
}

// Clase principal
export class ApiService {
    private static database: DatabaseState = {
        status: 200,
        message: "",
        data: {},
        reset() {
            this.status = 200;
            this.message = "";
            this.data = {};
        },
    };

    /**
     * Realiza una petición a la API
     * @param endpoint - Ruta del endpoint
     * @param method - Método HTTP
     * @param body - Cuerpo de la petición (opcional)
     * @returns Promise con la respuesta de la API
     */
    public static async apiRequest<T = any>(
        endpoint: string,
        method: HttpMethod,
        body?: Record<string, any>
    ): Promise<T | void> {
        try {
            const response = await this.handleRequest(method, endpoint, body);

            if (!response?.data) {
                throw new Error("La respuesta del servidor no contiene datos válidos.");
            }

            const { data } = response;

            if (data.message && data.status !== 200) {
                throw new Error(data.message);
            }

            return data as T;
        } catch (error) {
            this.handleError(error);
            throw error; // Re-lanzamos el error para manejo externo
        }
    }

    /**
     * Maneja la petición HTTP según el método
     */
    private static async handleRequest(
        method: HttpMethod,
        endpoint: string,
        body?: Record<string, any>
    ): Promise<ApiResponse | undefined> {
        try {
            switch (method) {
                case HttpMethod.GET:
                    return await api.get(endpoint);
                case HttpMethod.POST:
                    if (!body) {
                        throw new Error('El "body" es obligatorio para POST.');
                    }
                    return await api.post(endpoint, body);
                case HttpMethod.PUT:
                    if (!body) {
                        throw new Error('El "body" es obligatorio para PUT.');
                    }
                    return await api.put(endpoint, body);
                case HttpMethod.DELETE:
                    return await api.delete(endpoint);
                default:
                    throw new Error(`Método HTTP no soportado: ${method}`);
            }
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    /**
     * Maneja los errores de la API
     */
    private static handleError(error: unknown): void {
        this.database.reset();
        this.database.status = 599;

        if (error instanceof Error) {
            this.database.message = error.message;
        } else {
            this.database.message = "Ha ocurrido un error inesperado.";
        }
    }

    /**
     * Obtiene el estado actual de la base de datos
     */
    public static getDatabaseState(): Readonly<DatabaseState> {
        return { ...this.database };
    }
}

/**
 * Verifica si un valor es nulo, indefinido o vacío
 */
export const isNullOrEmpty = (value: unknown): boolean => {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string') return value.trim() === '';
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
};