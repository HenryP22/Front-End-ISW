<template>
  <div>
    <h1 class="title">Pago</h1>

    <Loader v-if="isLoading" />
    <template v-else>
      <table class="table is-fullwidth is-striped">
      
        <tfoot class="has-text-weight-bold">
          <tr>
            <td colspan="3" class="has-text-left">Id Pago</td>
            <td class="has-text-left">{{model.pagoId}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Id Tarjeta</td>
            <td class="has-text-left">{{model.tarjetaId}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Descripcion</td>
            <td class="has-text-left">{{model.descripcion}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">CVC</td>
            <td class="has-text-left">{{model.cvcTarjeta}}</td>
          </tr>
          <td class="has-text-centered">
      <router-link to="/pagos">Atrás</router-link>
      </td>
        </tfoot>
      </table>
    </template>
  </div>
</template>

<script src="./PagoDetail.js"></script>