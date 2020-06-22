<template>
  <div>
    <h1 class="title">Módulo de Padres</h1>
    <h2 class="subtitle">Desde aquí puede gestionar sus Padres.</h2>

    <Loader v-if="isLoading" />
    <template v-else>
      <div class="field has-text-right">
        <router-link to="/padres/create">Agregar nuevo padre</router-link>
      </div>
      <table class="table is-striped is-fullwidth">
        <thead>
          <th>Padre</th>
          <th style="width:200px;" class="has-text-right">Nombre</th>
          <th style="width:200px;" class="has-text-right">Apellido</th>
          <th style="width:200px;" class="has-text-right">Dni</th>
          <th style="width:200px;" class="has-text-right">Correo</th>
          
          <th style="width:150px;"></th>  
        </thead>
        <tbody>
          <tr v-for="item in collection.items" :key="item.id">
            <td class="has-text-left"> {{item.padreId}}</td>
            <td class="has-text-right"> {{item.nombres}}</td>
            <td class="has-text-right"> {{item.apellidos}}</td>
            <td class="has-text-right"> {{item.dni}}</td>
            <td class="has-text-right"> {{item.correo}}</td>
            
            <td class="has-text-centered">
              <router-link :to="`/padres/${item.padreId}/detail`">Ver detalle</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pager :paging="p => getAll(p)" :page="collection.page" :pages="collection.pages" />
    </template>
  </div>
</template>

<script src="./PadreIndex.js"></script>