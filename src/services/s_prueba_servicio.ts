// Son funciones que centralizan la lógica de comunicación con tu backend o API.
// on el puente entre la lógica de tu aplicación y las peticiones al servidor, 
// ayudándote a mantener el código más ordenado y fácil de escalar.

import { ApiService, HttpMethod } from "../utilities/ts/site"

export class pruebaService {
    public static async fn_nombre_de_servicio_get(
        value: string
    ): Promise<any> {
        return ApiService.apiRequest(`/holamundo/get/${value}`, HttpMethod.GET);
    }

    // export const fn_nombre_de_servicio_post = async (data: Record<string, any>): Promise<any> => {
    //     return ApiService.apiRequest('/hola-mundo/post', HttpMethod.POST, data);
    // }

    // export const fn_nombre_de_servicio_put = async (data: Record<string, any>): Promise<any> => {
    //     return ApiService.apiRequest('/hola-mundo/put', HttpMethod.PUT, data);
    // }

    // export const fn_nombre_de_servicio_delete = async (value: string): Promise<any> => {
    //     return ApiService.apiRequest(`/hola-mundo/delete/${value}`, HttpMethod.DELETE);
    // }
}