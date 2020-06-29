<template>
  <div>
    <h1 class="title">Docente</h1>
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
            <td colspan="3" class="has-text-left">DNI</td>
            <td class="has-text-left">{{model.dni}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Domicilio</td>
            <td class="has-text-left">{{model.domicilio}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Correo</td>
            <td class="has-text-left">{{model.correo}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Disponibilidad</td>
            <td class="has-text-left">{{model.disponibilidad}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Número de cuenta</td>
            <td class="has-text-left">{{model.numero_cuenta}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Membresía</td>
            <td class="has-text-left">{{model.membresia}}</td>
          </tr>
          <div class="field has-text-right">
        <router-link to="/favoritos">Añadir un docente a favoritos</router-link>
      </div>
      <td class="has-text-centered">
      <router-link to="/docentes">Atrás</router-link>
      </td>
        </tfoot>
      </table>
    </template>
  </div>
</template>

<script src="./DocenteDetail.js"></script>