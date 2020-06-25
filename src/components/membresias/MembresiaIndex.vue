<template>
  <div>
    <h1 class="title">Módulo de membresías</h1>
    <h2 class="subtitle">Desde aquí puede añadir una membresía</h2>

    <Loader v-if="isLoading" />
    <template v-else>
      <div class="field has-text-right">
        <router-link to="/membresias/create">Agregar nueva membresía</router-link>
      </div>
      <table class="table is-striped is-fullwidth">
        <thead>
          <th style="width:50px;" class="has-text-centered">Membresía</th>
          <th style="width:200px;" class="has-text-left">Portador</th>
          <th style="width:200px;" class="has-text-left">Estado</th>
          <th style="width:200px;" class="has-text-left">Fecha de Expiración</th>
          
          <th style="width:150px;"></th>  
        </thead>
        <tbody>
          <tr v-for="item in collection.items" :key="item.id">
            <td class="has-text-centered"> {{item.membresiaId}}</td>
            <td class="has-text-left"> {{item.docente.nombres}}</td>
            <td class="has-text-left"> {{item.docente.membresia}}</td>
            <td class="has-text-left"> {{item.fecha_expiracion}}</td>
            
            <td class="has-text-centered">
              <router-link :to="`/membresias/${item.membresiaId}/detail`">Ver detalle</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pager :paging="p => getAll(p)" :page="collection.page" :pages="collection.pages" />
    </template>
  </div>
</template>

<script src="./MembresiaIndex.js"></script>