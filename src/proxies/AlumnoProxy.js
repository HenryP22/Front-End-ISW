export default class AlumnoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }

    get(id) {
        return this.axios.get(this.url + `alumnos/${id}`);
    }

    getAll(page, take) {
        return this.axios.get(this.url + `alumnos?page=${page}&take=${take}`);
    }

    create(params) {
        return this.axios.post(this.url + `alumnos`, params);
    }
}