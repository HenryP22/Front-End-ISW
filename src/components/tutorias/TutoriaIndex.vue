<template>
  <div>
    <h1 class="title">Módulo de tutorías</h1>
    <h2 class="subtitle">Desde aquí puede gestionar sus tutorías.</h2>

    <Loader v-if="isLoading" />
    <template v-else>
      <div class="field has-text-right">
        <router-link to="/tutorias/create">Agregar nueva tutoría</router-link>
      </div>
      <table class="table is-striped is-fullwidth">
        <thead>
          <th>Tutoría</th>
          <th style="width:200px;" class="has-text-right">Descripción</th>
          <th style="width:200px;" class="has-text-right">Duración</th>
          
          <th style="width:150px;"></th>  
        </thead>
        <tbody>
          <tr v-for="item in collection.items" :key="item.id">
            <td class="has-text-left"> {{item.tutoriaId}}</td>
            <td class="has-text-right"> {{item.descripcion}}</td>
            <td class="has-text-right"> {{item.cantidad_minutos}}</td>
            
            <td class="has-text-centered">
              <router-link :to="`/tutorias/${item.tutoriaId}/detail`">Ver detalle</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pager :paging="p => getAll(p)" :page="collection.page" :pages="collection.pages" />
    </template>
  </div>
</template>

<script src="./TutoriaIndex.js"></script>