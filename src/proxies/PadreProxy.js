export default class PadreProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }

    get(id) {
        return this.axios.get(this.url + `padres/${id}`);
    }

    getAll(page, take) {
        return this.axios.get(this.url + `padres?page=${page}&take=${take}`);
    }

    create(params) {
        return this.axios.post(this.url + `padres`, params);
    }
}