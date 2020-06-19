<template>
  <div>
    <h1 class="title">Módulo de alumnos</h1>
    <h2 class="subtitle">Desde aquí puede gestionar sus alumnos.</h2>

    <Loader v-if="isLoading" />
    <template v-else>
      <div class="field has-text-right">
        <router-link to="/alumnos/create">Agregar nuevo alumno</router-link>
      </div>
      <table class="table is-striped is-fullwidth">
        <thead>
          <th>Cliente</th>
          <th style="width:200px;" class="has-text-right">Nombre</th>
          <th style="width:200px;" class="has-text-right">Apellido</th>
          <th style="width:200px;" class="has-text-right">Total</th>
          <th style="width:150px;"></th>
        </thead>
        <tbody>
          <tr v-for="item in collection.items" :key="item.id">
            <td>{{alumno.alumnoId}}</td>
            <td class="has-text-right">US$ {{alumno.nombres}}</td>
            <td class="has-text-right">US$ {{alumno.apellidos}}</td>
            <td class="has-text-centered">
              <router-link :to="`/alumnos/${alumno.alumnoId}/detail`">Ver detalle</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pager :paging="p => getAll(p)" :page="collection.page" :pages="collection.pages" />
    </template>
  </div>
</template>

<script src="./AlumnoIndex.js"></script>