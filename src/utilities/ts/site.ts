import api from "../../services/s_api";

const httpMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
} as const;

type httpMethod = typeof httpMethods[keyof typeof httpMethods];

export class dgav {
    static httpMethod = httpMethods;
    static dataBase = {
        status: 200,
        message: "",
        data: {} as Record<string, any>,
        reset() {
            this.status = 200;
            this.message = "";
            this.data = {};
        },
    };
    static async apiRequest(
        endPoint: string,
        method: httpMethod,
        body?: Record<string, any>
    ): Promise<void> {
        try {
            const response = await this.handleRequest(method, endPoint, body);

            if (!response || !response.data) {
                throw new Error("La respuesta del servidor no contiene datos válidos.");
            }

            const { data } = response;

            if (data.message) {
                throw new Error(data.message);
            }

            return data;
        } catch (error: any) {
            this.handleError(error);
        }
    };
    private static async handleRequest(
        method: httpMethod,
        endPoint: string,
        body?: Record<string, any>
    ) {
        switch (method) {
            case this.httpMethod.GET:
                return await api.get(endPoint);
            case this.httpMethod.POST:
                if (!body) throw new Error('El "body" es obligatorio para POST.');
                return await api.post(endPoint, body);
            case this.httpMethod.PUT:
                if (!body) throw new Error('El "body" es obligatorio para PUT.');
                return await api.put(endPoint, body);
            case this.httpMethod.DELETE:
                return await api.delete(endPoint);
        }
    };
    private static handleError(error: any): void {
        this.dataBase.reset();
        this.dataBase.status = 599;

        this.dataBase.message =
            error?.message || "Ha ocurrido un error inesperado.";
    };
}

export const IsNullOrEmpty = (value: any): boolean => {
    return value == null || value == undefined || value == '';
};