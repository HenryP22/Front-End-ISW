<template>
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          
             <div id="logo"></div>
          
          <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
             <router-link :class="{'is-active': $route.name === 'default'}" class="navbar-item" to="/">Inicio</router-link>
            <router-link :class="{'is-active': $route.path.startsWith('/alumnos')}" class="navbar-item" to="/alumnos">Alumnos</router-link>
            <router-link :class="{'is-active': $route.path.startsWith('/docentes')}" class="navbar-item" to="/docentes">Docentes</router-link>
            <router-link :class="{'is-active': $route.path.startsWith('/cursos')}" class="navbar-item" to="/cursos">Cursos</router-link>
            <router-link :class="{'is-active': $route.path.startsWith('/informes')}" class="navbar-item" to="/informes">Informes</router-link>
            <router-link :class="{'is-active': $route.path.startsWith('/membresias')}" class="navbar-item" to="/membresias">Membresías</router-link>
            <router-link :class="{'is-active': $route.path.startsWith('/favoritos')}" class="navbar-item" to="/favoritos">Favoritos del Padre</router-link>
            
            <router-link :class="{'is-active': $route.path.startsWith('/padres')}" class="navbar-item" to="/padres">Padres</router-link>
            <router-link :class="{'is-active': $route.path.startsWith('/pagos')}" class="navbar-item" to="/pagos">Pagos</router-link>
            <router-link :class="{'is-active': $route.path.startsWith('/tarjetas')}" class="navbar-item" to="/tarjetas">Tarjetas</router-link>
            <router-link :class="{'is-active': $route.path.startsWith('/tutorias')}" class="navbar-item" to="/tutorias">Tutorías</router-link>

            <router-link :class="{'is-active': $route.path.startsWith('/perfiles')}" class="navbar-item" to="/perfiles">Perfil</router-link>
            

            <router-link :class="{'is-active': $route.path.startsWith('/users')}" v-if="user.roles.includes('ADMIN')" class="navbar-item" to="/users">Usuarios</router-link>
          
            <span class="navbar-item">
              <a  @click="logout"  class="button is-danger is-inverted">
                <span class="icon">
                  <i class="fas fa-sign-out-alt"></i>
                </span>
                <span>Desconectarse</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<style>

</style>
<script>
export default {
  name: "Header",
  data() {
    return {
      user: this.$store.state.user
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      this.$parent.isLoggedIn = false;
    }
  }
  
};
</script>