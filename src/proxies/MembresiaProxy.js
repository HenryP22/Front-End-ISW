export default class MembresiaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }

    get(id) {
        return this.axios.get(this.url + `membresias/${id}`);
    }

    getAll(page, take) {
        return this.axios.get(this.url + `membresias?page=${page}&take=${take}`);
    }

    create(params) {
        return this.axios.post(this.url + `membresias`, params);
    }
}