<script setup lang="ts">
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
    <div class="flex flex-col fixed w-full h-full max-w-[264px] left-0 z-[9999] top-0">
        <div class="flex flex-col w-full min-h-screen relative bg-[#2c2c2c] border-e-[#444444] border-e">
            <div class="flex flex-row justify-between items-center w-full px-4 py-3">
                <button type="button" @click="showMenu = !showMenu"
                    class="flex transition-all w-full duration-500 justify-between max-w-36 rounded hover:bg-[#444444a4] py-1 pe-1 flex-row items-center gap-1">
                    <div class="flex flex-row items-center gap-1">
                        <p v-if="userDataHome" class="text-[#B8B8FF] text-[1rem]">
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
                <div v-if="showMenu"
                    class="flex flex-col w-full h-[300px] px-1 absolute top-0 left-0 translate-y-[60px]">
                    <menu class="flex flex-col relative w-full h-full rounded bg-[#39393A]">
                        <button type="button"
                            class="flex flex-row items-center gap-1 px-3 py-2 transtion-all duration-500 hover:bg-[rgba(0,0,0,0.38)] absolute bottom-0 left-0 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-logout">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                <path d="M9 12h12l-3 -3" />
                                <path d="M18 15l3 -3" />
                            </svg>
                            <p class="text-[1rem]">
                                Cerrar sesion
                            </p>
                        </button>
                    </menu>
                </div>
                <!-- <button type="button">
                    <svg xmlns=" http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="currentColor"
                        class="icon icon-tabler icons-tabler-filled icon-tabler-layout-sidebar-right-expand">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm-3 2h-9a1 1 0 0 0 -.993 .883l-.007 .117v12a1 1 0 0 0 .883 .993l.117 .007h9v-14zm-3.293 4.293a1 1 0 0 1 .083 1.32l-.083 .094l-1.292 1.293l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 -.083 -1.32l.083 -.094l2 -2a1 1 0 0 1 1.414 0z" />
                    </svg>
                </button> -->
            </div>

            <button type="button" class="px-4 py-3 absolute bottom-0 start-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-bell">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
            </button>
        </div>
    </div>
</template>

<style scoped></style>