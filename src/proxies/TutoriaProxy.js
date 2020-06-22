export default class TutoriaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }

    get(id) {
        return this.axios.get(this.url + `tutorias/${id}`);
    }

    getAll(page, take) {
        return this.axios.get(this.url + `tutorias?page=${page}&take=${take}`);
    }

    create(params) {
        return this.axios.post(this.url + `tutorias`, params);
    }
}