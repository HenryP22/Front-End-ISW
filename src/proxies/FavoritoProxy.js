export default class FavoritoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }


    getAll(id,page, take) {
        return this.axios.get(this.url + `padres/lista-favoritos/${id}?page=${page}&take=${take}`);
    }

    create(params) {
        return this.axios.post(this.url + `padres/añadir-favoritos`, params);
    }
}