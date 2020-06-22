import Axios from 'axios';
import IdentityProxy from './IdentityProxy';
import UserProxy from './UserProxy';
import ProductProxy from './ProductProxy';
import OrderProxy from './OrderProxy';
import ClientProxy from './ClientProxy';
import AlumnoProxy from './AlumnoProxy';
import DocenteProxy from './DocenteProxy';
import FavoritoProxy from './FavoritoProxy';
import InformeProxy from './InformeProxy';
import MembresiaProxy from './MembresiaProxy';
import PadreProxy from './PadreProxy';
import PagoProxy from './PagoProxy';
import TarjetaProxy from './TarjetaProxy';
import TutoriaProxy from './TutoriaProxy';
import CursoProxy from './CursoProxy';


// Axios default behavior
Axios.defaults.headers.common.Accept = 'application/json';

// Token
Axios.interceptors.request.use(
    config => {
        let token = localStorage.getItem('access_token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => Promise.reject(error)
);

//TODO: Test
Axios.interceptors.response.use(
    response => response,
    error => {
        const { status } = error.response;

        if (status === 401) {
            localStorage.removeItem('access_token');
            window.location.reload(true);
        }

        return Promise.reject(error);
    }
);

let url = 'http://localhost:55939/';

export default {
    identityProxy: new IdentityProxy(Axios,url),
    userProxy: new UserProxy(Axios, url),
    productProxy: new ProductProxy(Axios, url),
    orderProxy: new OrderProxy(Axios, url),
    clientProxy: new ClientProxy(Axios, url),
    alumnoProxy:new AlumnoProxy(Axios,url),
    docenteProxy:new DocenteProxy(Axios,url),
    cursoProxy:new CursoProxy(Axios,url),
    favoritoProxy:new FavoritoProxy(Axios,url),
    informeProxy:new InformeProxy(Axios,url),
    membresiaProxy:new MembresiaProxy(Axios,url),
    padreProxy:new PadreProxy(Axios,url),
    pagoProxy:new PagoProxy(Axios,url),
    tarjetaProxy:new TarjetaProxy(Axios,url),
    tutoriaProxy:new TutoriaProxy(Axios,url),
    
}