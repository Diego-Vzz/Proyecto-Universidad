import { ref } from "vue";
import { dgav, site } from "../../utilities/ts/site";

interface FromRegister {
  nombre: {
    value: string;
    focused: boolean;
  };
  apellido_paterno: {
    value: string;
    focused: boolean;
  };
  apellido_materno: {
    value: string;
    focused: boolean;
  };
  usuario: {
    value: string;
    focused: boolean;
  };
  fecha_nacimiento: {
    value: string;
    focused: boolean;
  };
  email: {
    value: string;
    focused: boolean;
  };
  password: {
    value: string;
    focused: boolean;
  };
}

interface FromErrorsRegister {
  errorNombre: string;
  errorApellidoPaterno: string;
  errorApellidoMaterno: string;
  errorUsuario: string;
  errorFechaNacimiento: string;
  errorEmail: string;
  errorPassword: string;
}

export const FromErrosRegister = ref<FromErrorsRegister>({
  errorNombre: "",
  errorApellidoPaterno: "",
  errorApellidoMaterno: "",
  errorUsuario: "",
  errorFechaNacimiento: "",
  errorEmail: "",
  errorPassword: "",
});

export const FromRegister = ref<FromRegister>({
  nombre: {
    value: "",
    focused: false,
  },
  apellido_paterno: {
    value: "",
    focused: false,
  },
  apellido_materno: {
    value: "",
    focused: false,
  },
  usuario: {
    value: "",
    focused: false,
  },
  fecha_nacimiento: {
    value: "",
    focused: false,
  },
  email: {
    value: "",
    focused: false,
  },
  password: {
    value: "",
    focused: false,
  },
});

export class registerModulo {
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
    const forms: FromRegister = FromRegister.value;

    this.NombreValidate();
    this.ApellidoPaternoValidate();
    this.ApellidoMaternoValidate();
    this.UsuarioValidate();
    this.FechaNacimientoValidate();
    this.EmailValidate();
    this.PasswordValidate();

    if (
      !site.isNullOrEmpty(FromErrosRegister.value.errorNombre) ||
      !site.isNullOrEmpty(FromErrosRegister.value.errorApellidoPaterno) ||
      !site.isNullOrEmpty(FromErrosRegister.value.errorApellidoMaterno) ||
      !site.isNullOrEmpty(FromErrosRegister.value.errorUsuario) ||
      !site.isNullOrEmpty(FromErrosRegister.value.errorFechaNacimiento) ||
      !site.isNullOrEmpty(FromErrosRegister.value.errorEmail) ||
      !site.isNullOrEmpty(FromErrosRegister.value.errorPassword)
    ) {
      return;
    }

    const data = {
      nombre: forms.nombre.value.trim(),
      apellido_paterno: forms.apellido_paterno.value.trim(),
      apellido_materno: forms.apellido_materno.value.trim(),
      usuario: forms.usuario.value.trim(),
      fecha_nacimiento: forms.fecha_nacimiento.value,
      email: forms.email.value.trim(),
      password: forms.password.value.trim(),
    };

    const response: any = await dgav.apiRequest(
      "/auth/register",
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
      site.Alert({
        type: "success",
        message: "Inicio de sesión exitoso",
      });
      site.RedirectPage("home");
    }
  }

  public static NombreValidate() {
    const forms: FromRegister = FromRegister.value;
    const regex = /^[A-Za-z\s]+$/;

    if (forms.nombre.value.length > 255) {
      FromErrosRegister.value.errorNombre = `El nombre es demasiado largo, solo se permiten 255 caracteres`;
    } else if (site.isNullOrEmpty(forms.nombre.value)) {
      FromErrosRegister.value.errorNombre = `El nombre es requerido`;
    } else if (!regex.test(forms.nombre.value)) {
      FromErrosRegister.value.errorNombre = `El nombre no es válido, contiene caracteres no permitidos`;
    } else {
      FromErrosRegister.value.errorNombre = "";
    }
  }

  public static ApellidoPaternoValidate() {
    const forms: FromRegister = FromRegister.value;
    const regex = /^[A-Za-z\s]+$/;

    if (forms.apellido_paterno.value.length > 255) {
      FromErrosRegister.value.errorApellidoPaterno = `El apellido paterno es demasiado largo, solo se permiten 255 caracteres`;
    } else if (site.isNullOrEmpty(forms.apellido_paterno.value)) {
      FromErrosRegister.value.errorApellidoPaterno = `El apellido paterno es requerido`;
    } else if (!regex.test(forms.apellido_paterno.value)) {
      FromErrosRegister.value.errorApellidoPaterno = `El apellido paterno no es válido, contiene caracteres no permitidos`;
    } else {
      FromErrosRegister.value.errorApellidoPaterno = "";
    }
  }

  public static ApellidoMaternoValidate() {
    const forms: FromRegister = FromRegister.value;
    const regex = /^[A-Za-z\s]+$/;

    if (forms.apellido_materno.value.length > 255) {
      FromErrosRegister.value.errorApellidoMaterno = `El apellido materno es demasiado largo, solo se permiten 255 caracteres`;
    } else if (site.isNullOrEmpty(forms.apellido_materno.value)) {
      FromErrosRegister.value.errorApellidoMaterno = `El apellido materno es requerido`;
    } else if (!regex.test(forms.apellido_materno.value)) {
      FromErrosRegister.value.errorApellidoMaterno = `El apellido materno no es válido, contiene caracteres no permitidos`;
    } else {
      FromErrosRegister.value.errorApellidoMaterno = "";
    }
  }

  public static UsuarioValidate() {
    const forms: FromRegister = FromRegister.value;
    const regex = /^[a-zA-Z0-9_]*$/;
    if (forms.usuario.value.length > 20) {
      FromErrosRegister.value.errorUsuario =
        "El usuario es demasiado largo, solo se permiten 20 caracteres";
    } else if (site.isNullOrEmpty(forms.usuario.value)) {
      FromErrosRegister.value.errorUsuario = "El usuario es requerido";
    } else if (!regex.test(forms.usuario.value)) {
      FromErrosRegister.value.errorUsuario =
        "El usuario no es válido, contiene caracteres no permitidos";
    } else {
      FromErrosRegister.value.errorUsuario = "";
    }
  }

  public static EmailValidate() {
    const forms: FromRegister = FromRegister.value;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (forms.email.value.length > 255) {
      FromErrosRegister.value.errorEmail =
        "El correo es demasiado largo, solo se permiten 255 caracteres";
    } else if (site.isNullOrEmpty(forms.email.value)) {
      FromErrosRegister.value.errorEmail = "El correo es requerido";
    } else if (!regex.test(forms.email.value)) {
      FromErrosRegister.value.errorEmail = "El correo no es válido";
    } else {
      FromErrosRegister.value.errorEmail = "";
    }
  }

  public static PasswordValidate() {
    const forms: FromRegister = FromRegister.value;

    if (forms.password.value.length > 20) {
      FromErrosRegister.value.errorPassword =
        "La contraseña es demasiado largo, solo se permiten 20 caracteres";
    } else if (site.isNullOrEmpty(forms.password.value)) {
      FromErrosRegister.value.errorPassword = "La contraseña es requerida";
    } else if (forms.password.value.length < 8) {
      FromErrosRegister.value.errorPassword =
        "La contraseña debe tener al menos 8 caracteres";
    } else {
      FromErrosRegister.value.errorPassword = "";
    }
  }

  public static FechaNacimientoValidate() {
    const forms: FromRegister = FromRegister.value;

    if (forms.fecha_nacimiento.value > new Date().toISOString().split("T")[0]) {
      FromErrosRegister.value.errorFechaNacimiento =
        "La fecha de nacimiento no puede ser futura";
    } else if (site.isNullOrEmpty(forms.fecha_nacimiento.value)) {
      FromErrosRegister.value.errorFechaNacimiento =
        "La fecha de nacimiento es requerida";
    } else {
      FromErrosRegister.value.errorFechaNacimiento = "";
    }
  }
}
