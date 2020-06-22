<template>
  <div>
    <h1 class="title">Módulo de docentes</h1>
    <h2 class="subtitle">Desde aquí puede gestionar sus docentes.</h2>

    <Loader v-if="isLoading" />
    <template v-else>
      <div class="field has-text-right">
        <router-link to="/docentes/create">Agregar nuevo docente</router-link>
      </div>
      <table class="table is-striped is-fullwidth">
        <thead>
          <th>Docente</th>
          <th style="width:200px;" class="has-text-right">Nombre</th>
          <th style="width:200px;" class="has-text-right">Apellido</th>
          <th style="width:200px;" class="has-text-right">Dni</th>
          <th style="width:200px;" class="has-text-right">Domicilio</th>
          <th style="width:200px;" class="has-text-right">Correo</th>
          <th style="width:200px;" class="has-text-right">Costo</th>
          <th style="width:200px;" class="has-text-right">Disponibilidad</th>
          <th style="width:200px;" class="has-text-right">Número de cuenta</th>
          <th style="width:200px;" class="has-text-right">Estado de la membresía</th>
          <th style="width:150px;"></th>  
        </thead>
        <tbody>
          <tr v-for="item in collection.items" :key="item.id">
            <td class="has-text-right"> {{item.docenteId}}</td>
            <td class="has-text-right"> {{item.nombres}}</td>
            <td class="has-text-right"> {{item.apellidos}}</td>
            <td class="has-text-right"> {{item.dni}}</td>
            <td class="has-text-right"> {{item.domicilio}}</td>
            <td class="has-text-right"> {{item.correo}}</td>
            <td class="has-text-right"> {{item.costo}}</td>
            <td class="has-text-right"> {{item.disponibilidad}}</td>
            <td class="has-text-right"> {{item.numero_cuenta}}</td>
            <td class="has-text-right"> {{item.membresia}}</td>
            <td class="has-text-centered">
              <router-link :to="`/docentes/${item.docenteId}/detail`">Ver detalle</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pager :paging="p => getAll(p)" :page="collection.page" :pages="collection.pages" />
    </template>
  </div>
</template>

<script src="./DocenteIndex.js"></script>