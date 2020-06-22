export default class CursoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }

    get(id) {
        return this.axios.get(this.url + `cursos/${id}`);
    }

    getAll(page, take) {
        return this.axios.get(this.url + `cursos?page=${page}&take=${take}`);
    }

    create(params) {
        return this.axios.post(this.url + `cursos`, params);
    }
}