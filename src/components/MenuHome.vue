<script setup lang="ts">
import Prog from '../assets/svg/Prog.svg';
import Comunidad from '../assets/svg/Comunidad.svg';
import IA from '../assets/svg/IA.svg';
import Plus from '../assets/svg/Plus.svg';
import { onMounted, ref } from 'vue';
import { site } from '../utilities/ts/site';

const userDataHome = ref<any>(null);
const showMenu = ref<boolean>(false);
onMounted(() => {
    const data: any = site.getCookies("usuario") || null;
    if (!data) {
        return;
    }
    userDataHome.value = JSON.parse(data);
})

</script>

<template>
    <div class="flex flex-col fixed w-full h-full max-w-[264px] left-0 z-[9999] top-0 text-[.85rem]">
        <div class="flex flex-col w-full min-h-screen relative bg-[#2c2c2c] border-e-[#444444] border-e">
            <div class="flex flex-row justify-between items-center w-full px-4 py-3 border-b border-b-[#444444]">
                <button type="button" @click="showMenu = !showMenu"
                    class="flex transition-all w-full duration-500 justify-between rounded hover:bg-[#444444a4] py-1 pe-1 flex-row items-center gap-1">
                    <div class="flex flex-row items-center gap-1">
                        <p v-if="userDataHome" class="text-efect-color font-bold">
                            @{{ userDataHome.usuario }}
                        </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="#B8B8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-selector">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 9l4 -4l4 4" />
                        <path d="M16 15l-4 4l-4 -4" />
                    </svg>
                </button>
            </div>
            <div class="flex flex-col w-full items-start gap-5 px-4 py-4 border-b border-b-[#444444]">
                <button type="button"
                    class="flex flex-row items-center transition-all duration-200 gap-1 rounded hover:py-1 hover:px-2 hover:bg-[#788bff]">
                    <span class="translate-y-[0px]">
                        <img :src="Prog" loading="lazy" class="w-[24px] select-none pointer-events-none h-[2624pxpx]"
                            alt="">
                    </span>
                    <p>
                        Todos los proyectos
                    </p>
                </button>
                <button type="button"
                    class="flex flex-row items-center transition-all duration-200 gap-1 rounded hover:py-1 hover:px-2 hover:bg-[#788bff]">
                    <span>
                        <img :src="Comunidad" loading="lazy"
                            class="w-[24px] select-none pointer-events-none h-[2624pxpx]" alt="">
                    </span>
                    <p>
                        Comunidad
                    </p>
                </button>
                <button type="button"
                    class="flex flex-row items-center transition-all duration-200 gap-1 rounded hover:py-1 hover:px-2 hover:bg-[#788bff]">
                    <span>
                        <img :src="IA" loading="lazy" class="w-[24px] select-none pointer-events-none h-[2624pxpx]"
                            alt="">
                    </span>
                    <p>
                        Chat Kademy
                    </p>
                </button>
            </div>
            <div class="flex flex-col w-full items-start gap-5 px-4 py-4">
                <button type="button" class="flex flex-row items-center gap-1">
                    <img :src="Plus" loading="lazy" class="w-[24px] select-none pointer-events-none h-[2624pxpx]"
                        alt="">
                    <p>
                        Crear nuevo proyecto
                    </p>
                </button>
            </div>
            <div class="flex flex-col w-full gap-5 px-4 py-3 absolute bottom-0 start-0">
                <button type="button" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-bell">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-efect-color {
    background: repeating-linear-gradient(-45deg,
            #baebff 0%,
            #bbdbfe 7.14%,
            #bccbfd 14.28%,
            #bebcfc 21.42%,
            #bfacfb 28.56%,
            #bebcfc 35.7%,
            #bbdbfe 42.84%,
            #baebff 50%);
    background-size: 600vw 600vw;
    -webkit-animation: slide 5s infinite linear forwards;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.section1 {
    background: repeating-linear-gradient(-45deg,
            #baebff 0%,
            #bbdbfe 7.14%,
            #bccbfd 14.28%,
            #bebcfc 21.42%,
            #bfacfb 28.56%,
            #bebcfc 35.7%,
            #bbdbfe 42.84%,
            #baebff 50%);
    background-size: 600vw 600vw;
    -webkit-animation: 'slide' 5s infinite linear forwards;
}


@keyframes slide {
    0% {
        background-position-x: 0%;
    }

    100% {
        background-position-x: 600vw;
    }
}
</style>