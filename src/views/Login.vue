<script setup lang="ts">
import login_register_trabajando from '../assets/img/dribbble-gente-trabajando02-unscreen.gif'
const InputEffectFocus = (span: string) => {
    const spanElement: any = document.getElementById(span) as HTMLElement;
    spanElement.style.color = '#B8B8FF';
}
const InputEffectBlur = (input: any, span: string) => {
    InputEffectInput(input, span);
}

const InputEffectInput = (input: any, span: string) => {
    const spanElement: any = document.getElementById(span) as HTMLElement;
    if (input.value != '') {
        input.style.border = "2px solid #B8B8FF";
        spanElement.style.color = '#B8B8FF';
    } else {
        input.style.border = "none";
        spanElement.style.color = '#F8F9FA';
    }
}
</script>

<template>
    <div class="flex items-center justify-center p-5 min-h-screen">
        <div
            class="flex flex-row w-full max-w-screen-lg shadow-inner bg-[#26262C] h-[557px] min-h-[557px] rounded-[5px]">
            <div class="flex flex-col items-center text-center justify-center w-full gap-5 py-2 px-5">
                <div class="flex flex-col justify-center">
                    <div class="flex flex-row justify-center">
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
                    <p class="text-[#ADB5BD] text-[clamp(14px,2vw,24px)] translate-y-[-6px] max-[680px]:text-[16px]">
                        para poder continuar
                    </p>
                </div>
                <div class="flex flex-col w-full max-w-sm">
                    <div class="flex flex-col w-full relative">
                        <input type="text" class="px-6 bg-[#393A41] rounded-md pt-6 pb-4"
                            v-on:input="InputEffectInput($event.target, 'span_input_email')"
                            v-on:focus="InputEffectFocus('span_input_email')"
                            v-on:blur="InputEffectBlur($event.target, 'span_input_email')">
                        <span class="absolute top-[4px] text-[#F8F9FA] left-[22px]" id="span_input_email">
                            email
                        </span>
                    </div>
                    <div class="flex justify-center items-center w-full py-1">
                        <p class="text-[#B8B8FF]">
                            y
                        </p>
                    </div>
                    <div class="flex flex-col w-full relative">
                        <input type="password" class="px-6 bg-[#393A41] rounded-md pt-6 pb-4"
                            v-on:input="InputEffectInput($event.target, 'span_input_contraseña')"
                            v-on:focus="InputEffectFocus('span_input_contraseña')"
                            v-on:blur="InputEffectBlur($event.target, 'span_input_contraseña')">
                        <span class="absolute top-[4px] text-[#F8F9FA] left-[22px]" id="span_input_contraseña">
                            contraseña
                        </span>
                    </div>
                </div>
                <div class="flex flex-col w-full max-w-sm">
                    <button class="px-6 text-[14px] bg-[#9381FF] text-[#F8F9FA] rounded-md py-4 font-bold">
                        Iniciar sesión
                    </button>
                    <p class="text-[#B8B8FF] py-1">
                        o
                    </p>
                    <button class="px-6 text-[14px] bg-[#B8B8FF] text-[#26262C] rounded-md py-4 font-bold">
                        Registrarse
                    </button>
                </div>
            </div>
            <div class="flex justify-center items-center w-full max-[680px]:hidden">
                <img :src="login_register_trabajando" loading="lazy" class="w-full h-full max-w-[253px] max-h-[184px]"
                    alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<style scoped></style>