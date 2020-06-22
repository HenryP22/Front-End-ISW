export default class DocenteProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }

    get(id) {
        return this.axios.get(this.url + `docentes/${id}`);
    }

    getAll(page, take) {
        return this.axios.get(this.url + `docentes?page=${page}&take=${take}`);
    }

    create(params) {
        return this.axios.post(this.url + `docentes`, params);
    }
}