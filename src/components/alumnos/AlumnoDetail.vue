<template>
  <div>
    <h1 class="title">{{}}</h1>
    <h2 class="subtitle">Alumnito</h2>

    <Loader v-if="isLoading" />
    <template v-else>
      <table class="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Alumno</th>
            <th class="has-text-right" style="width:100px;">Nombres</th>
            <th class="has-text-right" style="width:150px;">Apellidos</th>
            <th class="has-text-right" style="width:150px;">Dni</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in model.items" :key="item.alumnoId">
            <td class="has-text-right">US$ {{alumno.nombres}}</td>
            <td class="has-text-right">US$ {{alumno.apellidos}}</td>
            <td class="has-text-right">US$ {{alumno.dni}}</td>
            
          </tr>
        </tbody>
        
      </table>
    </template>
  </div>
</template>

<script src="./AlumnoDetail.js"></script>