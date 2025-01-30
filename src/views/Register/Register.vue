<script setup lang="ts">
import login_register_trabajando from '../../assets/img/dribbble-gente-trabajando02-unscreen.gif';
import Logo from '../../components/Logo.vue';
import { site } from '../../utilities/ts/site';
import { registerModulo, FromRegister, FromErrosRegister } from './register';



</script>

<template>
    <div class="flex items-center justify-center p-5 min-h-screen">
        <div
            class="flex flex-row w-full max-w-screen-xl shadow-inner min-h-[557px] relative py-16 rounded-[5px] opacity-95">
            <div class="flex py-4 px-5 absolute left-0 top-0">
                <button type="button" @click="site.RedirectPage('login')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l6 6" />
                        <path d="M5 12l6 -6" />
                    </svg>
                </button>
            </div>
            <div class="flex flex-col items-center text-center justify-center w-full gap-5 py-2 px-5">
                <div class="flex flex-col justify-center">
                    <Logo />
                    <p class="text-[#DEE2E6] text-[clamp(14px,2vw,24px)] max-[680px]:text-[16px]">
                        Crea una cuenta
                    </p>
                    <p class="text-[#ADB5BD] text-[clamp(14px,2vw,24px)] -translate-y-1.5 max-[680px]:text-[16px]">
                        para poder continuar
                    </p>
                </div>

                <div class="flex flex-col w-full max-w-sm gap-1">
                    <div class="flex flex-col w-full relative">
                        <input class="rounded-[0.375rem]" type="text" @input="registerModulo.NombreValidate()"
                            :style="registerModulo.getInputStyle(FromRegister.nombre)"
                            v-model="FromRegister.nombre.value" @focus="registerModulo.handleFocus(FromRegister.nombre)"
                            @blur="registerModulo.handleBlur(FromRegister.nombre)" autocomplete="nombre">
                        <span :style="registerModulo.getLabelStyle(FromRegister.nombre)">nombre</span>
                        <span v-if="FromErrosRegister.errorNombre"
                            class="text-red-500 font-semibold text-left text-[14px] text-pretty">
                            {{ FromErrosRegister.errorNombre }}
                        </span>
                    </div>
                    <div class="flex flex-col relative">
                        <input class="rounded-[0.375rem] w-full" type="text"
                            @input="registerModulo.ApellidoPaternoValidate()"
                            :style="registerModulo.getInputStyle(FromRegister.apellido_paterno)"
                            v-model="FromRegister.apellido_paterno.value"
                            @focus="registerModulo.handleFocus(FromRegister.apellido_paterno)"
                            @blur="registerModulo.handleBlur(FromRegister.apellido_paterno)"
                            autocomplete="apellido_paterno">
                        <span :style="registerModulo.getLabelStyle(FromRegister.apellido_paterno)">apellido
                            paterno</span>
                        <span v-if="FromErrosRegister.errorApellidoPaterno"
                            class="text-red-500 font-semibold text-left text-[14px] text-pretty">
                            {{ FromErrosRegister.errorApellidoPaterno }}
                        </span>
                    </div>

                    <div class="flex flex-col relative">
                        <input class="rounded-[0.375rem] w-full" type="text"
                            @input="registerModulo.ApellidoMaternoValidate()"
                            :style="registerModulo.getInputStyle(FromRegister.apellido_materno)"
                            v-model="FromRegister.apellido_materno.value"
                            @focus="registerModulo.handleFocus(FromRegister.apellido_materno)"
                            @blur="registerModulo.handleBlur(FromRegister.apellido_materno)"
                            autocomplete="apellido_materno">
                        <span :style="registerModulo.getLabelStyle(FromRegister.apellido_materno)">apellido
                            materno</span>
                        <span v-if="FromErrosRegister.errorApellidoMaterno"
                            class="text-red-500 font-semibold text-left text-[14px] text-pretty">
                            {{ FromErrosRegister.errorApellidoMaterno }}
                        </span>
                    </div>
                    <div class="flex flex-col w-full relative">
                        <input class="rounded-[0.375rem]" type="text" @input="registerModulo.UsuarioValidate()"
                            :style="registerModulo.getInputStyle(FromRegister.usuario)"
                            v-model="FromRegister.usuario.value"
                            @focus="registerModulo.handleFocus(FromRegister.usuario)"
                            @blur="registerModulo.handleBlur(FromRegister.usuario)" autocomplete="usuario">
                        <span :style="registerModulo.getLabelStyle(FromRegister.usuario)">usuario</span>
                        <span v-if="FromErrosRegister.errorUsuario"
                            class="text-red-500 font-semibold text-left text-[14px] text-pretty">
                            {{ FromErrosRegister.errorUsuario }}
                        </span>
                    </div>
                    <div class="flex flex-col w-full relative">
                        <input class="rounded-[0.375rem]" type="email" @input="registerModulo.EmailValidate()"
                            :style="registerModulo.getInputStyle(FromRegister.email)" v-model="FromRegister.email.value"
                            @focus="registerModulo.handleFocus(FromRegister.email)"
                            @blur="registerModulo.handleBlur(FromRegister.email)" autocomplete="email">
                        <span :style="registerModulo.getLabelStyle(FromRegister.email)">email</span>
                        <span v-if="FromErrosRegister.errorEmail"
                            class="text-red-500 font-semibold text-left text-[14px] text-pretty">
                            {{ FromErrosRegister.errorEmail }}
                        </span>
                    </div>
                    <div class="flex flex-col w-full relative">
                        <input class="rounded-[0.375rem]" type="password" @input="registerModulo.PasswordValidate()"
                            :style="registerModulo.getInputStyle(FromRegister.password)"
                            v-model="FromRegister.password.value"
                            @focus="registerModulo.handleFocus(FromRegister.password)"
                            @blur="registerModulo.handleBlur(FromRegister.password)" autocomplete="current-password">
                        <span :style="registerModulo.getLabelStyle(FromRegister.password)">contraseña</span>
                        <span v-if="FromErrosRegister.errorPassword"
                            class="text-red-500 font-semibold text-left text-[14px] text-pretty">
                            {{ FromErrosRegister.errorPassword }}
                        </span>
                    </div>
                    <div class="flex flex-col w-full relative">
                        <input class="rounded-[0.375rem]" type="date" @input="registerModulo.FechaNacimientoValidate()"
                            :style="registerModulo.getInputStyle(FromRegister.fecha_nacimiento)"
                            v-model="FromRegister.fecha_nacimiento.value"
                            @focus="registerModulo.handleFocus(FromRegister.fecha_nacimiento)"
                            @blur="registerModulo.handleBlur(FromRegister.fecha_nacimiento)"
                            autocomplete="fecha_nacimiento">
                        <span :style="registerModulo.getLabelStyle(FromRegister.fecha_nacimiento)">fecha de
                            nacimiento</span>
                        <span v-if="FromErrosRegister.errorFechaNacimiento"
                            class="text-red-500 font-semibold text-left text-[14px] text-pretty">
                            {{ FromErrosRegister.errorFechaNacimiento }}
                        </span>
                    </div>
                </div>

                <div class="flex flex-col w-full max-w-sm gap-1">
                    <button @click="registerModulo.login()"
                        class="px-6 text-[14px] bg-[#9381FF] text-[#F8F9FA] rounded-md py-4 font-bold hover:bg-[#8371EF] transition-colors">
                        Registrarse
                    </button>
                </div>
            </div>

            <div class="flex justify-center items-center w-full max-[680px]:hidden">
                <img :src="login_register_trabajando" loading="lazy"
                    class="img-trabajando w-full h-full max-w-[253px] max-h-[184px]" alt="Personas trabajando">
            </div>
        </div>
    </div>
</template>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
    color: #ffffff;
    /* Cambia este color */
    filter: invert(100%);
    /* Cambia el color del ícono */
}

input:focus {
    outline: none;
}

button {
    transition: all 0.2s ease;
}

button:active {
    transform: scale(0.98);
}

.img-trabajando {
    mask-image: linear-gradient(black 50%, transparent);
    -webkit-mask-image: linear-gradient(black 50%, transparent);
}

.check {
    cursor: pointer;
    position: relative;
    margin: auto;
    width: 18px;
    height: 18px;
    -webkit-tap-highlight-color: transparent;
    transform: translate3d(0, 0, 0);
}

.check:before {
    content: "";
    position: absolute;
    top: -15px;
    left: -15px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(34, 50, 84, 0.03);
    opacity: 0;
    transition: opacity 0.2s ease;
}

.check svg {
    position: relative;
    z-index: 1;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #c8ccd4;
    stroke-width: 1.5;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease;
}

.check svg path {
    stroke-dasharray: 60;
    stroke-dashoffset: 0;
}

.check svg polyline {
    stroke-dasharray: 22;
    stroke-dashoffset: 66;
}

.check:hover:before {
    opacity: 1;
}

.check:hover svg {
    stroke: #4285f4;
}

#cbx:checked+.check svg {
    stroke: #4285f4;
}

#cbx:checked+.check svg path {
    stroke-dashoffset: 60;
    transition: all 0.3s linear;
}

#cbx:checked+.check svg polyline {
    stroke-dashoffset: 42;
    transition: all 0.2s linear;
    transition-delay: 0.15s;
}
</style>