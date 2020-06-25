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
          <th style="width:50px;" class="has-text-centered">Pago</th>
          <th style="width:200px;" class="has-text-left">Nombre Tarjeta</th>
          <th style="width:200px;" class="has-text-left">Número Tarjeta</th>
          <th style="width:200px;" class="has-text-left">Descripción</th>
          <th style="width:150px;" ></th>  
        </thead>
        <tbody>
          <tr v-for="item in collection.items" :key="item.id">
            <td class="has-text-centered"> {{item.pagoId}}</td>
            <td class="has-text-left"> {{item.tarjeta.nombre_poseedor}}</td>
            <td class="has-text-left"> {{item.tarjeta.numero_tarjeta}}</td>
            <td class="has-text-left"> {{item.descripcion}}</td>
            
            <td class="has-text-centered">
              <router-link :to="`/pagos/${item.pagoId}/detail`">Ver detalle</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pager :paging="p => getAll(p)" :page="collection.page" :pages="collection.pages" />
    </template>
  </div>
</template>

<script src="./PagoIndex.js"></script>