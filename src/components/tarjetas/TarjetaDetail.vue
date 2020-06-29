<template>
  <div>
    <h1 class="title">Tarjeta</h1>

    <Loader v-if="isLoading" />
    <template v-else>
      <table class="table is-fullwidth is-striped">
      
        <tfoot class="has-text-weight-bold">
          <tr>
            <td colspan="3" class="has-text-left">TarjetaId</td>
            <td class="has-text-left">{{model.tarjetaId}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Fecha de expiración</td>
            <td class="has-text-left">{{model.fecha_expiracion}}</td>
          </tr>
          <tr>
            <td colspan="3" class="has-text-left">Nombre poseedor</td>
            <td class="has-text-left">{{model.nombre_poseedor}}</td>
          </tr>
           <tr>
            <td colspan="3" class="has-text-left">Número tarjeta</td>
            <td class="has-text-left">{{model.numero_tarjeta}}</td>
          </tr>
          <td class="has-text-centered">
      <router-link to="/tarjetas">Atrás</router-link>
      </td>
        </tfoot>
      </table>
    </template>
  </div>
</template>

<script src="./TarjetaDetail.js"></script>