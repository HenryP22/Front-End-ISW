<template>
  <div>
    <h1 class="title">Módulo de tarjetas</h1>
    <h2 class="subtitle">Desde aquí puede gestionar sus tarjetas.</h2>

    <Loader v-if="isLoading" />
    <template v-else>
      <div class="field has-text-right">
        <router-link to="/tarjetas/create">Agregar nueva tarjeta</router-link>
      </div>
      <table class="table is-striped is-fullwidth">
        <thead>
          <th style="width:50px;" class="has-text-centered">Tarjeta</th>
          <th style="width:200px;" class="has-text-left">Fecha de expiración</th>
          <th style="width:200px;" class="has-text-left">Propietario</th>
          <th style="width:200px;" class="has-text-left">Número de tarjeta</th>
          
          <th style="width:150px;"></th>  
        </thead>
        <tbody>
          <tr v-for="item in collection.items" :key="item.id">
            <td class="has-text-centered"> {{item.tarjetaId}}</td>
            <td class="has-text-left"> {{item.fecha_expiracion}}</td>
            <td class="has-text-left"> {{item.nombre_poseedor}}</td>
            <td class="has-text-left"> {{item.numero_tarjeta}}</td>
            
            <td class="has-text-centered">
              <router-link :to="`/tarjetas/${item.tarjetaId}/detail`">Ver detalle</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pager :paging="p => getAll(p)" :page="collection.page" :pages="collection.pages" />
    </template>
  </div>
</template>

<script src="./TarjetaIndex.js"></script>