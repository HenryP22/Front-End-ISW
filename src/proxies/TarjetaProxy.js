export default class TarjetaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }

    get(id) {
        return this.axios.get(this.url + `tarjetas/${id}`);
    }

    getAll(page, take) {
        return this.axios.get(this.url + `tarjetas?page=${page}&take=${take}`);
    }

    create(params) {
        return this.axios.post(this.url + `tarjetas`, params);
    }
}