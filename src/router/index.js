import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '../components/Default.vue';
import OrderIndex from '../components/orders/OrderIndex.vue';
import OrderCreate from '../components/orders/OrderCreate.vue';
import OrderDetail from '../components/orders/OrderDetail.vue';
import ClientIndex from '../components/clients/ClientIndex.vue';
import ProductIndex from '../components/products/ProductIndex.vue';
import ProductCreateOrUpdate from '../components/products/ProductCreateOrUpdate.vue';
import AlumnoDetail from '../components/alumnos/AlumnoDetail.vue';
import AlumnoCreate from '../components/alumnos/AlumnoCreate.vue';
import AlumnoIndex from '../components/alumnos/AlumnoIndex.vue';
import DocenteIndex from '../components/docentes/DocenteIndex.vue';
import DocenteDetail from '../components/docentes/DocenteDetail.vue';
import DocenteCreate from '../components/docentes/DocenteCreate.vue';
import CursoIndex from '../components/cursos/CursoIndex.vue';
import CursoDetail from '../components/cursos/CursoDetail.vue';
import CursoCreate from '../components/cursos/CursoCreate.vue';
import FavoritoIndex from '../components/favoritos/FavoritoIndex.vue';
import InformeIndex from '../components/informes/InformeIndex.vue';
import MembresiaIndex from '../components/membresias/MembresiaIndex.vue';
import PadreIndex from '../components/padres/PadreIndex.vue';
import PagoIndex from '../components/pagos/PagoIndex.vue';
import TarjetaIndex from '../components/tarjetas/TarjetaIndex.vue';
import TutoriaIndex from '../components/tutorias/TutoriaIndex.vue';


import UserIndex from '../components/users/UserIndex.vue';
import store from '../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    component: Default
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrderIndex
  },  
  {
    path: '/alumnos',
    name: 'alumnos',
    component: AlumnoIndex
  },  
  {
    path: '/alumnos/:id/detail',
    name: 'alumnosdetail',
    component: AlumnoDetail
  },  
  {
    path: '/alumnos/create',
    name: 'alumnoscreate',
    component: AlumnoCreate
  },  
  {
    path: '/cursos',
    name: 'cursos',
    component: CursoIndex
  },  
  {
    path: '/cursos/:id/detail',
    name: 'cursosdetail',
    component: CursoDetail
  },  
  {
    path: '/cursos/create',
    name: 'cursoscreate',
    component: CursoCreate
  },  
  {
    path: '/informes',
    name: 'informes',
    component: InformeIndex
  },  
  {
    path: '/membresias',
    name: 'membresias',
    component: MembresiaIndex
  },  
  {
    path: '/membresias/:id/detail',
    name: 'membresiasdetail',
    component: AlumnoDetail
  },  
  {
    path: '/membresias/create',
    name: 'membresiascreate',
    component: AlumnoCreate
  },  
  {
    path: '/padres',
    name: 'padres',
    component: PadreIndex
  },  
  {
    path: '/pagos',
    name: 'pagos',
    component: PagoIndex
  },  
  {
    path: '/tarjetas',
    name: 'tarjetas',
    component: TarjetaIndex
  },  
  {
    path: '/tutorias',
    name: 'tutorias',
    component: TutoriaIndex
  },  
  {
    path: '/favoritos',
    name: 'favoritos',
    component: FavoritoIndex
  },  
  {
    path: '/docentes',
    name: 'docentes',
    component: DocenteIndex
  }, 
  {
    path: '/docentes/:id/detail',
    name: 'docentesdetail',
    component: DocenteDetail
  },  
  {
    path: '/docentes/create',
    name: 'docentescreate',
    component: DocenteCreate
  },  
  {
    path: '/orders/:id/detail',
    name: 'ordersdetail',
    component: OrderDetail
  },
  {
    path: '/orders/create',
    name: 'orderscreate',
    component: OrderCreate
  },
  {
    path: '/clients',
    name: 'clients',
    component: ClientIndex
  },
  {
    path: '/products',
    name: 'products',
    component: ProductIndex
  },
  {
    path: '/products/create',
    name: 'productscreate',
    component: ProductCreateOrUpdate
  },
  {
    path: '/products/:id/edit',
    name: 'productsedit',
    component: ProductCreateOrUpdate
  },
  {
    path: '/users',
    name: 'users',
    component: UserIndex,
    beforeEnter: authorization
  }
]

//to:a donde va, from: de donde viene: next: si procede a que ruta lo enviamos
function authorization(to, from, next) {
  let user = store.state.user;

  if (user) {
    //Si nombre de la ruta es users && el usuario no incluye al admin 
    if (to.name === 'users' && !user.roles.includes('ADMIN')) {
      return next('/');//ir a la pagina principal
    }
  }

  return next();
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
