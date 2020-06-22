<template>
  <div>
    <h1 class="title">Módulo de Pagos</h1>
    <h2 class="subtitle">Desde aquí puede gestionar sus pagos.</h2>

    <Loader v-if="isLoading" />
    <template v-else>
      <div class="field has-text-right">
        <router-link to="/pagos/create">Agregar nuevo Pago</router-link>
      </div>
      <table class="table is-striped is-fullwidth">
        <thead>
          <th>Pago</th>
          <th style="width:200px;" class="has-text-right">Descripción</th>
          <th style="width:200px;" class="has-text-right">Cvc</th>
        </thead>
        <tbody>
          <tr v-for="item in collection.items" :key="item.id">
            <td class="has-text-left"> {{item.pagoId}}</td>
            <td class="has-text-right"> {{item.descripcion}}</td>
            <td class="has-text-right"> {{item.cvctarjeta}}</td>
            
            <td class="has-text-right">
              <router-link :to="`/docentes/${item.pagoId}/detail`">Ver detalle</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pager :paging="p => getAll(p)" :page="collection.page" :pages="collection.pages" />
    </template>
  </div>
</template>

<script src="./PagoIndex.js"></script>