export default class PagoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }

    get(id) {
        return this.axios.get(this.url + `pagos/${id}`);
    }

    getAll(page, take) {
        return this.axios.get(this.url + `pagos?page=${page}&take=${take}`);
    }

    create(params) {
        return this.axios.post(this.url + `pagos`, params);
    }
}