<template>
  <div>
    <h1 class="title">Membresia</h1>

    <Loader v-if="isLoading" />
    <template v-else>
      <table class="table is-fullwidth is-striped">
      
        <tfoot class="has-text-weight-bold">
          <tr>
            <td colspan="3" class="has-text-left">Id Membresia</td>
            <td class="has-text-left">{{model.membresiaId}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Id Tarjeta</td>
            <td class="has-text-left">{{model.tarjetaId}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Id Docente</td>
            <td class="has-text-left">{{model.docenteId}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">CVC Tarjeta</td>
            <td class="has-text-left">{{model.cvc_tarjeta}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Fecha Expiración</td>
            <td class="has-text-left">{{model.fecha_expiracion}}</td>
          </tr>
        </tfoot>
      </table>
    </template>
  </div>
</template>

<script src="./MembresiaDetail.js"></script>