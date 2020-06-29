<template>
  <div>
    <h1 class="title">MI PERFIL</h1>

    <Loader v-if="isLoading" />
    <template v-else>
      <table class="table is-fullwidth is-striped">
      
        <tfoot class="has-text-weight-bold">
          <tr>
            <td colspan="3" class="has-text-left">Nombre</td>
            <td class="has-text-left">{{user.name}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Apellidos</td>
            <td class="has-text-left">{{user.lastName}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Correo</td>
            <td class="has-text-left">{{user.email}}</td>
          </tr>   
        </tfoot>
      </table>
       <router-link :to="`/Perfil/UpdatePassword`">Cambia tu contraseña</router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "Default",
  data() {
    return {
      user: this.$store.state.user
    }
  }
};
</script>