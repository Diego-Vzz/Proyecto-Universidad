<!-- Los Views suelen ser los componentes que se utilizan como “páginas” o “pantallas” 
    completas dentro de la aplicación. Técnicamente hablando:

    Están asociados a rutas (paths) en la configuración de tu router. Por ejemplo, "/about" podría mostrar un AboutView.vue.
    Contienen la lógica y estructura de una página en particular, generalmente ocupan el nivel más alto de un layout. 

    Un View es como el contenedor principal de una pantalla o sección completa de la aplicación, 
    mientras que los componentes son piezas reutilizables que se insertan dentro de ese contenedor para conformar la interfaz de usuario.-->

<script setup lang="ts">
import PruebaComponente from '../components/PruebaComponent.vue';
import { fn_nombre_de_servicio_delete, fn_nombre_de_servicio_get, fn_nombre_de_servicio_post, fn_nombre_de_servicio_put } from '../services/s_prueba_servicio';
import { dgav } from '../utilities/ts/site';

const pruebaGET = async () => {
    const response: any = await fn_nombre_de_servicio_get('hola mundo obtener');

    if (response) {
        if (dgav.dataBase.status != 200) {
            console.log("Mensaje recibido:", dgav.dataBase.message);
            return;
        }
        console.log("Datos recibidos:", dgav.dataBase.data);
    } else {
        console.error("Error:", dgav.dataBase.message);
    }
}

const pruebaPOST = async () => {
    let data = {
        id: 1,
        descripcion: "Hola Mundo Insertar"
    }

    const response: any = await fn_nombre_de_servicio_post(data);

    if (response) {
        if (dgav.dataBase.status != 200) {
            console.log("Mensaje recibido:", dgav.dataBase.message);
            return;
        }
        console.log("Datos recibidos:", dgav.dataBase.data);
    } else {
        console.error("Error:", dgav.dataBase.message);
    }
}

const pruebaPUT = async () => {
    let data = {
        id: 1,
        descripcion: "Hola Mundo Actualizar"
    }

    const response: any = await fn_nombre_de_servicio_put(data);

    if (response) {
        if (dgav.dataBase.status != 200) {
            console.log("Mensaje recibido:", dgav.dataBase.message);
            return;
        }
        console.log("Datos recibidos:", dgav.dataBase.data);
    } else {
        console.error("Error:", dgav.dataBase.message);
    }
}

const pruebaDELETE = async () => {
    const response: any = await fn_nombre_de_servicio_delete('hola mundo eliminar');

    if (response) {
        if (dgav.dataBase.status != 200) {
            console.log("Mensaje recibido:", dgav.dataBase.message);
            return;
        }
        console.log("Datos recibidos:", dgav.dataBase.data);
    } else {
        console.error("Error:", dgav.dataBase.message);
    }
}
</script>

<template>
    <div class="flex flex-col w-full gap-2 justify-center">
        <section class="max-w-3xl mx-auto mt-8 p-4 bg-white shadow rounded">
            <h1 class="text-2xl font-bold mb-4 text-gray-800">Hola mundo</h1>
            <p class="text-gray-600 mb-6">
                Este es un ejemplo de cómo usar Tailwind CSS para crear una interfaz sencilla.
                Puedes aplicar clases utilitarias a cada elemento para personalizarlo a tu gusto.

                Como por ejemplo: max-w-screen-lg o max-w-[120px].
            </p>
            <button @click="pruebaGET()"
                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Probar GET.
            </button>
            <button @click="pruebaPOST()"
                class="px-4 py-2 mx-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Probar POST.
            </button>
            <button @click="pruebaPUT()"
                class="px-4 py-2 mx-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Probar PUT.
            </button>
            <button @click="pruebaDELETE()"
                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Probar DELETE.
            </button>

            <div class="flex flex-col gap-3">
                <p class="text-gray-600 mb-6">
                    Componente
                </p>
                <PruebaComponente></PruebaComponente>
            </div>
        </section>
    </div>
</template>

<style scoped></style>
