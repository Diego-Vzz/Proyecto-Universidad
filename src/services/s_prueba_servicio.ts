// Son funciones que centralizan la lógica de comunicación con tu backend o API.
// on el puente entre la lógica de tu aplicación y las peticiones al servidor, 
// ayudándote a mantener el código más ordenado y fácil de escalar.

import { dgav } from "../utilities/ts/site"

export const fn_nombre_de_servicio_get = async (value: string): Promise<any> => {
    return dgav.apiRequest(`/hola-mundo/get/${value}`, dgav.httpMethod.GET);
}

export const fn_nombre_de_servicio_post = async (data: Record<string, any>): Promise<any> => {
    return dgav.apiRequest('/hola-mundo/post', dgav.httpMethod.POST, data);
}

export const fn_nombre_de_servicio_put = async (data: Record<string, any>): Promise<any> => {
    return dgav.apiRequest('/hola-mundo/put', dgav.httpMethod.PUT, data);
}

export const fn_nombre_de_servicio_delete = async (value: string): Promise<any> => {
    return dgav.apiRequest(`/hola-mundo/delete/${value}`, dgav.httpMethod.DELETE);
}