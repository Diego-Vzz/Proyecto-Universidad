import { onMounted, ref } from "vue";
import { dgav, site } from "../../utilities/ts/site";

interface FromLogin {
  email: {
    value: string;
    focused: boolean;
  };
  password: {
    value: string;
    focused: boolean;
  };
}

interface FromErrorsLogin {
  errorEmail: string;
  errorPassword: string;
}

export const FromErrosLogin = ref<FromErrorsLogin>({
  errorEmail: "",
  errorPassword: "",
});

export const FromLogin = ref<FromLogin>({
  email: {
    value: "",
    focused: false,
  },
  password: {
    value: "",
    focused: false,
  },
});

export class loginModulo {
  public static handleFocus(input: { focused: boolean }) {
    input.focused = true;
  }

  public static handleBlur(input: { focused: boolean }) {
    input.focused = false;
  }

  public static getInputStyle(input: { value: string; focused: boolean }) {
    return {
      border: input.value || input.focused ? "2px solid #B8B8FF" : "none",
      padding: "1.5rem 1.28rem 1rem",
      backgroundColor: "#393A41",
    };
  }

  public static getLabelStyle(input: { value: string; focused: boolean }) {
    return {
      color: input.value || input.focused ? "#B8B8FF" : "#F8F9FA",
      position: "absolute" as "absolute",
      top: "4px",
      left: "22px",
      transition: "color 0.2s ease",
    };
  }

  public static async login() {
    const formsError: FromErrorsLogin = FromErrosLogin.value;

    this.EmailValidate();
    this.PasswordValidate();

    if (
      !site.isNullOrEmpty(formsError.errorEmail) ||
      !site.isNullOrEmpty(formsError.errorPassword)
    ) {
      return;
    }

    const forms: FromLogin = FromLogin.value;

    const data = {
      email: forms.email.value,
      password: forms.password.value,
    };

    const response: any = await dgav.apiRequest(
      "/auth/login",
      dgav.httpMethod.POST,
      data
    );

    if (!site.isNullOrEmpty(dgav.dataBase.message)) {
      site.Alert({
        type: "error",
        message: dgav.dataBase.message,
      });
      return;
    }

    if (response) {
      site.setCookies({
        usuario: JSON.stringify(response.usuario),
        token: response.token,
      });
      site.RedirectPage("home");
    }
  }

  public static EmailValidate() {
    const forms: FromLogin = FromLogin.value;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (site.isNullOrEmpty(forms.email.value)) {
      FromErrosLogin.value.errorEmail = "El correo es requerido";
    } else if (!regex.test(forms.email.value)) {
      FromErrosLogin.value.errorEmail = "El correo no es válido";
    } else {
      FromErrosLogin.value.errorEmail = "";
    }
  }

  public static PasswordValidate() {
    const forms: FromLogin = FromLogin.value;

    if (site.isNullOrEmpty(forms.password.value)) {
      FromErrosLogin.value.errorPassword = "La contraseña es requerida";
    } else if (forms.password.value.length < 8) {
      FromErrosLogin.value.errorPassword =
        "La contraseña debe tener al menos 8 caracteres";
    } else {
      FromErrosLogin.value.errorPassword = "";
    }
  }
}
