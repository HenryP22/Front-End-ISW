<template>
  <div>
    <h1 class="title">Alumno</h1>

    <Loader v-if="isLoading" />
    <template v-else>
      <table class="table is-fullwidth is-striped">
      
        <tfoot class="has-text-weight-bold">
          <tr>
            <td colspan="3" class="has-text-left">Id Padre</td>
            <td class="has-text-left">{{model.padreId}}</td>
          </tr>
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
            <td colspan="3" class="has-text-left">Correo</td>
            <td class="has-text-left">{{model.correo}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Grado Academico</td>
            <td class="has-text-left">{{model.grado_academico}}</td>
          </tr>
        </tfoot>
      </table>
    </template>
  </div>
</template>

<script src="./AlumnoDetail.js"></script>