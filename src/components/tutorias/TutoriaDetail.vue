<template>
  <div>
    <h1 class="title">Tutoria</h1>

    <Loader v-if="isLoading" />
    <template v-else>
      <table class="table is-fullwidth is-striped">
      
        <tfoot class="has-text-weight-bold">
          <tr>
            <td colspan="3" class="has-text-left">Id Tutoria</td>
            <td class="has-text-left">{{model.tutoriaId}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Nombre Alumno</td>
            <td class="has-text-left">{{model.alumno.nombres}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Nombre Curso</td>
            <td class="has-text-left">{{model.curso.nombre}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Nombre Docente</td>
            <td class="has-text-left"> {{model.docente.nombres}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Tiempo</td>
            <td class="has-text-left">{{model.cantidad_minutos}} </td>
          </tr>
        </tfoot>
      </table>
    </template>
  </div>
</template>

<script src="./TutoriaDetail.js"></script>