import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '../components/Default.vue';
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
import InformeDetail from '../components/informes/InformeDetail.vue';
import InformeCreate from '../components/informes/InformeCreate.vue';
import MembresiaIndex from '../components/membresias/MembresiaIndex.vue';
import MembresiaDetail from '../components/membresias/MembresiaDetail.vue';
import MembresiaCreate from '../components/membresias/MembresiaCreate.vue';
import PadreIndex from '../components/padres/PadreIndex.vue';
import PadreDetail from '../components/padres/PadreDetail.vue';
import PadreCreate from '../components/padres/PadreCreate.vue';
import PagoIndex from '../components/pagos/PagoIndex.vue';
import PagoDetail from '../components/pagos/PagoDetail.vue';
import PagoCreate from '../components/pagos/PagoCreate.vue';
import TarjetaIndex from '../components/tarjetas/TarjetaIndex.vue';
import TarjetaDetail from '../components/tarjetas/TarjetaDetail.vue';
import TarjetaCreate from '../components/tarjetas/TarjetaCreate.vue';
import TutoriaIndex from '../components/tutorias/TutoriaIndex.vue';
import TutoriaDetail from '../components/tutorias/TutoriaDetail.vue';
import TutoriaCreate from '../components/tutorias/TutoriaCreate.vue';
import PerfilIndex from '../components/perfiles/Perfil.vue';


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
    path: '/perfiles',
    name: 'perfiles',
    component: PerfilIndex
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
    path: '/informes/:id/detail',
    name: 'informesdetail',
    component: InformeDetail
  },  
  {
    path: '/informes/create',
    name: 'informescreate',
    component: InformeCreate
  },
  {
    path: '/membresias',
    name: 'membresias',
    component: MembresiaIndex
  },  
  {
    path: '/membresias/:id/detail',
    name: 'membresiasdetail',
    component: MembresiaDetail
  },  
  {
    path: '/membresias/create',
    name: 'membresiascreate',
    component: MembresiaCreate
  },  
  {
    path: '/padres',
    name: 'padres',
    component: PadreIndex
  },  
  {
    path: '/padres/:id/detail',
    name: 'padresdetail',
    component: PadreDetail
  },  
  {
    path: '/padres/create',
    name: 'padrescreate',
    component: PadreCreate
  }, 
  {
    path: '/pagos',
    name: 'pagos',
    component: PagoIndex
  },  
  {
    path: '/pagos/:id/detail',
    name: 'pagosdetail',
    component: PagoDetail
  },  
  {
    path: '/pagos/create',
    name: 'pagoscreate',
    component: PagoCreate
  },  
  {
    path: '/tarjetas',
    name: 'tarjetas',
    component: TarjetaIndex
  },  
  {
    path: '/tarjetas/:id/detail',
    name: 'tarjetasdetail',
    component: TarjetaDetail
  },  
  {
    path: '/tarjetas/create',
    name: 'tarjetascreate',
    component: TarjetaCreate
  },  
  {
    path: '/tutorias',
    name: 'tutorias',
    component: TutoriaIndex
  },  
  {
    path: '/tutorias/:id/detail',
    name: 'tutoriasdetail',
    component: TutoriaDetail
  },  
  {
    path: '/tutorias/create',
    name: 'tutoriascreate',
    component: TutoriaCreate
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
