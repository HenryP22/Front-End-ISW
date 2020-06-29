<template>
  <div>
    <h1 class="title">Módulo de favoritos</h1>
    <h2 class="subtitle">Desde aquí puede  añadir sus docentes a favoritos.</h2>

    <Loader v-if="isLoading" />
    <template v-else>
      
      <table class="table is-striped is-fullwidth">
        <thead>
          <th style="width:50px;" class="has-text-centered">Docente</th>
          <th style="width:200px;" class="has-text-left">Nombres</th>
          <th style="width:200px;" class="has-text-left">Apellidos</th>
          
          <th style="width:150px;"></th>  
        </thead>
        <tbody>
          <tr v-for="item in collection.items" :key="item.id">
            <td class="has-text-centered"> {{item.docenteId}}</td>
            <td class="has-text-left"> {{item.nombres}}</td>
            <td class="has-text-left"> {{item.apellidos}}</td>
            
            <div class="field">
      <button variant="success"> ♥</button>
      </div>

      
          </tr>
          
        </tbody>
      </table>
      <Pager :paging="p => getAll(p)" :page="collection.page" :pages="collection.pages" />
    </template>
  </div>
</template>

<script src="./FavoritoIndex.js"></script>