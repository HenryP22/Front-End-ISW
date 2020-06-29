<template>
  <div>
    <h1 class="title">Padre</h1>

    <Loader v-if="isLoading" />
    <template v-else>
      <table class="table is-fullwidth is-striped">
      
        <tfoot class="has-text-weight-bold">
          <tr>
            <td colspan="3" class="has-text-left">Nombres</td>
            <td class="has-text-left">{{model.nombres}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Apellidos</td>
            <td class="has-text-left">{{model.apellidos}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Grado academico</td>
            <td class="has-text-left">{{model.dni}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Correo</td>
            <td class="has-text-left">{{model.correo}}</td>
          </tr>
          
      <td class="has-text-centered">
      <router-link to="/padres">Atrás</router-link>
      </td>
        </tfoot>
      </table>
    </template>
  </div>
</template>

<script src="./PadreDetail.js"></script>