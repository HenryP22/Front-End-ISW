<template>
  <div>
    <h1 class="title">Módulo de cursos</h1>
    <h2 class="subtitle">Desde aquí puede gestionar sus cursos.</h2>

    <Loader v-if="isLoading" />
    <template v-else>
      <div class="field has-text-right">
        <router-link to="/cursos/create">Agregar nuevo curso</router-link>
      </div>
      <table class="table is-striped is-fullwidth">
        <thead>
          <th style="width:50px;" class="has-text-centered">Curso</th>
          <th style="width:200px;" class="has-text-left">Nombre</th>
          <th style="width:200px;" class="has-text-left">Grado Académico</th>
         
          <th style="width:150px;"></th>  
        </thead>
        <tbody>
          <tr v-for="item in collection.items" :key="item.id">
            <td class="has-text-centered"> {{item.cursoId}}</td>
            <td class="has-text-left"> {{item.nombre}}</td>
            <td class="has-text-left"> {{item.grado_academico}}</td>
            
            <td class="has-text-centered">
              <router-link :to="`/cursos/${item.cursoId}/detail`">Ver detalle</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pager :paging="p => getAll(p)" :page="collection.page" :pages="collection.pages" />
    </template>
  </div>
</template>

<script src="./CursoIndex.js"></script>