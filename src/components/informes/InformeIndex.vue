<template>
  <div>
    <h1 class="title">Módulo de informes</h1>
    <h2 class="subtitle">Desde aquí puede gestionar sus informes.</h2>

    <Loader v-if="isLoading" />
    <template v-else>
      <div class="field has-text-right">
        <router-link to="/informes/create">Agregar nuevo informe</router-link>
      </div>
      <table class="table is-striped is-fullwidth">
        <thead>
          <th>Informe</th>
          <th style="width:200px;" class="has-text-right">Descripcion</th>
          <th style="width:200px;" class="has-text-right">Fecha</th>
          
          <th style="width:150px;"></th>  
        </thead>
        <tbody>
          <tr v-for="item in collection.items" :key="item.id">
            <td class="has-text-left"> {{item.informeId}}</td>
            <td class="has-text-right"> {{item.descripcion}}</td>
            <td class="has-text-right"> {{item.fecha}}</td>
            
            <td class="has-text-centered">
              <router-link :to="`/docentes/${item.informeId}/detail`">Ver detalle</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pager :paging="p => getAll(p)" :page="collection.page" :pages="collection.pages" />
    </template>
  </div>
</template>

<script src="./InformeIndex.js"></script>