<template>
  <div>
    <h1 class="title">{{model.nombres}}</h1>
    <h2 class="subtitle">Alumno</h2>

    <Loader v-if="isLoading" />
    <template v-else>
      <table class="table is-fullwidth is-striped">
        <tbody>
          <tr v-for="item in model.items" :key="item.alumnoDetailId">
            <td class="has-text-right"> {{item.nombres}} </td>
            <td class="has-text-right"> {{item.apellidos}} </td>
            <td class="has-text-right"> {{item.dni}} </td>
            <td class="has-text-right"> {{item.correo}} </td>
            <td class="has-text-right"> {{item.grado_academico}} </td>
          </tr>
        </tbody>
        <tfoot class="has-text-weight-bold">
          <tr>
            <td colspan="5" class="has-text-left">Nombres</td>
            <td class="has-text-left"> {{model.nombres}}</td>
          </tr>
          <tr>
            <td colspan="5" class="has-text-left">Apellidos</td>
            <td class="has-text-left"> {{model.apellidos}}</td>
          </tr>
          <tr>
            <td colspan="5" class="has-text-left">DNI</td>
            <td class="has-text-left"> {{model.dni}}</td>
          </tr>
          <tr>
            <td colspan="5" class="has-text-left">Correo</td>
            <td class="has-text-left"> {{model.correo}}</td>
          </tr>
          <tr>
            <td colspan="5" class="has-text-left">Grado Academico</td>
            <td class="has-text-left"> {{model.grado_academico}}</td>
          </tr>
        </tfoot>
      </table>
    </template>
  </div>
</template>

<script src="./AlumnoDetail.js"></script>