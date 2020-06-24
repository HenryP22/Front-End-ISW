<template>
  <div>
    <h1 class="title">Informe</h1>

    <Loader v-if="isLoading" />
    <template v-else>
      <table class="table is-fullwidth is-striped">
      
        <tfoot class="has-text-weight-bold">
          <tr>
            <td colspan="3" class="has-text-left">TutoriaId</td>
            <td class="has-text-left">{{model.tutoriaId}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Descripcion</td>
            <td class="has-text-left">{{model.descripcion}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">fecha</td>
            <td class="has-text-left">{{model.fecha}}</td>
          </tr>
        </tfoot>
      </table>
    </template>
  </div>
</template>

<script src="./InformeDetail.js"></script>