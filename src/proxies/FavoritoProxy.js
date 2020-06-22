export default class FavoritoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }

    get(id) {
        return this.axios.get(this.url + `favoritos/${id}`);
    }

    getAll(page, take) {
        return this.axios.get(this.url + `favoritos?page=${page}&take=${take}`);
    }

    create(params) {
        return this.axios.post(this.url + `favoritos`, params);
    }
}