<script setup lang="ts">
import login_register_trabajando from '../../assets/img/dribbble-gente-trabajando02-unscreen.gif';
import Logo from '../../components/Logo.vue';
import { site } from '../../utilities/ts/site';
import { loginModulo, FromLogin, FromErrosLogin } from './login';



</script>

<template>
    <div class="flex items-center justify-center p-5 min-h-screen">
        <div
            class="flex flex-row w-full max-w-screen-lg shadow-inner bg-[#26262C] h-[557px] min-h-[557px] rounded-[5px] opacity-95">
            <div class="flex flex-col items-center text-center relative justify-center w-full gap-5 py-2 px-5">
                <div class="flex py-4 px-5 absolute left-0 top-0">
                    <button type="button" @click="site.RedirectPage('home')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-home">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-col justify-center">
                    <Logo />
                    <p class="text-[#DEE2E6] text-[clamp(14px,2vw,24px)] max-[680px]:text-[16px]">
                        Inicia sesión con tu cuenta
                    </p>
                    <p class="text-[#ADB5BD] text-[clamp(14px,2vw,24px)] -translate-y-1.5 max-[680px]:text-[16px]">
                        para poder continuar
                    </p>
                </div>

                <div class="flex flex-col w-full max-w-sm gap-1">

                    <div class="flex flex-col w-full relative">
                        <input class="rounded-[0.375rem]" type="email" @input="loginModulo.EmailValidate()"
                            :style="loginModulo.getInputStyle(FromLogin.email)" v-model="FromLogin.email.value"
                            @focus="loginModulo.handleFocus(FromLogin.email)"
                            @blur="loginModulo.handleBlur(FromLogin.email)" autocomplete="email">
                        <span :style="loginModulo.getLabelStyle(FromLogin.email)">email</span>
                        <span v-if="FromErrosLogin.errorEmail"
                            class="text-red-500 font-semibold text-left text-[14px] text-pretty">
                            {{ FromErrosLogin.errorEmail }}
                        </span>
                    </div>


                    <div class="flex justify-center items-center w-full py-1">
                        <p class="text-[#B8B8FF]">y</p>
                    </div>

                    <div class="flex flex-col w-full relative">
                        <input class="rounded-[0.375rem]" type="password" @input="loginModulo.PasswordValidate()"
                            :style="loginModulo.getInputStyle(FromLogin.password)" v-model="FromLogin.password.value"
                            @focus="loginModulo.handleFocus(FromLogin.password)"
                            @blur="loginModulo.handleBlur(FromLogin.password)" autocomplete="current-password">
                        <span :style="loginModulo.getLabelStyle(FromLogin.password)">contraseña</span>
                        <span v-if="FromErrosLogin.errorPassword"
                            class="text-red-500 font-semibold text-left text-[14px] text-pretty">
                            {{ FromErrosLogin.errorPassword }}
                        </span>
                    </div>
                </div>

                <div class="flex flex-col w-full max-w-sm gap-1">
                    <button @click="loginModulo.login()"
                        class="px-6 text-[14px] bg-[#9381FF] text-[#F8F9FA] rounded-md py-4 font-bold hover:bg-[#8371EF] transition-colors">
                        Iniciar sesión
                    </button>
                    <p class="text-[#B8B8FF] py-1">o</p>
                    <button @click="site.RedirectPage('register')"
                        class="px-6 text-[14px] bg-[#B8B8FF] text-[#26262C] rounded-md py-4 font-bold hover:bg-[#A8A8EF] transition-colors">
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
</style>