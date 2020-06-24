<template>
  <div>
    <h1 class="title">Módulo de favoritos</h1>
    <h2 class="subtitle">Desde aquí puede gestionar sus tutorias favoritas.</h2>

    <Loader v-if="isLoading" />
    <template v-else>
      <div class="field has-text-right">
        <router-link to="/informes/create">Agregar nuevo favorito</router-link>
      </div>
      <table class="table is-striped is-fullwidth">
        <thead>
          <th>Favorito</th>
          <th style="width:200px;" class="has-text-right">Docente</th>
          
          <th style="width:150px;"></th>  
        </thead>
        <tbody>
          <tr v-for="item in collection.items" :key="item.id">
            <td class="has-text-left"> {{item.favoritoId}}</td>
            <td class="has-text-right"> {{item.docente}}</td>
            
            <td class="has-text-centered">
              <router-link :to="`/padres/${item.favoritoId}/favoritos`">Ver favoritos</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pager :paging="p => getAll(p)" :page="collection.page" :pages="collection.pages" />
    </template>
  </div>
</template>

<script src="./FavoritoIndex.js"></script>