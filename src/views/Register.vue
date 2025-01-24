<script setup lang="ts">
import { ref } from 'vue';
import login_register_trabajando from '../assets/img/dribbble-gente-trabajando02-unscreen.gif';

interface InputState {
    value: string;
    focused: boolean;
}

const email = ref<InputState>({ value: '', focused: false });
const password = ref<InputState>({ value: '', focused: false });

const handleInput = (input: InputState, value: string) => {
    input.value = value;
};

const handleFocus = (input: InputState) => {
    input.focused = true;
};

const handleBlur = (input: InputState) => {
    input.focused = false;
};

const getInputStyle = (input: InputState) => {
    return {
        border: input.value || input.focused ? '2px solid #B8B8FF' : 'none',
        padding: '1.5rem 1.5rem 1rem',
        backgroundColor: '#393A41',
        borderRadius: '0.375rem'
    };
};

const getLabelStyle = (input: InputState) => {
    return {
        color: input.value || input.focused ? '#B8B8FF' : '#F8F9FA',
        position: 'absolute' as 'absolute',
        top: '4px',
        left: '22px',
        transition: 'color 0.2s ease'
    };
};

</script>

<template>
    <div class="flex items-center justify-center p-5 min-h-screen">
        <div
            class="flex flex-row w-full max-w-screen-lg shadow-inner bg-[#26262C] h-[557px] min-h-[557px] rounded-[5px]">
            <div class="flex flex-col items-center text-center justify-center w-full gap-5 py-2 px-5">
                <!-- Header -->
                <div class="flex flex-col justify-center">
                    <div class="flex flex-row justify-center items-center gap-1">
                        <p class="text-[clamp(14px,2vw,24px)] max-[680px]:text-[16px] text-[#B8B8FF] font-black">
                            PROYECTO
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="#9381FF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-file-analytics">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M9 17l0 -5" />
                            <path d="M12 17l0 -1" />
                            <path d="M15 17l0 -3" />
                        </svg>
                    </div>
                    <p class="text-[#DEE2E6] text-[clamp(14px,2vw,24px)] max-[680px]:text-[16px]">
                        Por favor inicia sesión con tu cuenta
                    </p>
                    <p class="text-[#ADB5BD] text-[clamp(14px,2vw,24px)] -translate-y-1.5 max-[680px]:text-[16px]">
                        para poder continuar
                    </p>
                </div>

                <!-- Form -->
                <div class="flex flex-col w-full max-w-sm gap-1">
                    <div class="flex flex-col w-full relative">
                        <input type="email" :style="getInputStyle(email)" v-model="email.value"
                            @focus="handleFocus(email)" @blur="handleBlur(email)" autocomplete="email">
                        <span :style="getLabelStyle(email)">email</span>
                    </div>

                    <div class="flex justify-center items-center w-full py-1">
                        <p class="text-[#B8B8FF]">y</p>
                    </div>

                    <div class="flex flex-col w-full relative">
                        <input type="password" :style="getInputStyle(password)" v-model="password.value"
                            @focus="handleFocus(password)" @blur="handleBlur(password)" autocomplete="current-password">
                        <span :style="getLabelStyle(password)">contraseña</span>
                    </div>
                </div>

                <!-- Buttons -->
                <div class="flex flex-col w-full max-w-sm gap-1">
                    <button
                        class="px-6 text-[14px] bg-[#9381FF] text-[#F8F9FA] rounded-md py-4 font-bold hover:bg-[#8371EF] transition-colors">
                        Iniciar sesión
                    </button>
                    <p class="text-[#B8B8FF] py-1">o</p>
                    <button
                        class="px-6 text-[14px] bg-[#B8B8FF] text-[#26262C] rounded-md py-4 font-bold hover:bg-[#A8A8EF] transition-colors">
                        Registrarse
                    </button>
                </div>
            </div>

            <!-- Image -->
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