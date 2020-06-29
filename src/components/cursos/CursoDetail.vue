<template>
  <div>
    <h1 class="title">Curso</h1>

    <Loader v-if="isLoading" />
    <template v-else>
      <table class="table is-fullwidth is-striped">
      
        <tfoot class="has-text-weight-bold">
          <tr>
            <td colspan="3" class="has-text-left">Nombres</td>
            <td class="has-text-left">{{model.nombre}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Descripcion</td>
            <td class="has-text-left">{{model.descripcion}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Grado academico</td>
            <td class="has-text-left">{{model.grado_academico}}</td>
          </tr>
          <td class="has-text-centered">
      <router-link to="/cursos">Atrás</router-link>
      </td>
        </tfoot>
      </table>
    </template>
  </div>
</template>

<script src="./CursoDetail.js"></script>