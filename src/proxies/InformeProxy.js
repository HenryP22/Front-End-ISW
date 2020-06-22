export default class InformeProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }

    get(id) {
        return this.axios.get(this.url + `informes/${id}`);
    }

    getAll(page, take) {
        return this.axios.get(this.url + `informes?page=${page}&take=${take}`);
    }

    create(params) {
        return this.axios.post(this.url + `informes`, params);
    }
}