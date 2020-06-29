<template>
  <div>
    <h1 class="title">Nuevo Informe</h1>
    <h2 class="subtitle">Creación de Informe</h2>

    <Loader v-if="isLoading" />
    <form v-else @submit.prevent="save">

      <div class="field">
        <input
          :class="{error: validation.hasError('model.tutoriaId')}"
          v-model.number="model.tutoriaId"
          class="input"
          type="text"
          placeholder="Ingrese el tutoriaId"
        />
        <p class="help is-danger">{{validation.firstError('model.tutoriaId')}}</p>
      </div>
      <div class="field">
        <input
          :class="{error: validation.hasError('model.descripcion')}"
          v-model="model.descripcion"
          class="input"
          type="text"
          placeholder="Ingrese el descripcion"
        />
        <p class="help is-danger">{{validation.firstError('model.descripcion')}}</p>
      </div>
      <div class="field">
        <input
          :class="{error: validation.hasError('model.fecha')}"
          v-model="model.fecha"
          class="input"
          type="date"
          placeholder="Ingrese la fecha"
        />
        <p class="help is-danger">{{validation.firstError('model.fecha')}}</p>
      </div>

      
      <div class="field">
        <button type="submit" class="button is-info">Guardar</button>
      </div>
    </form>
    <td class="has-text-centered">
      <button  type="submit" styles="margin-top:20px;background-color:green"><router-link to="/informes">Cancelar</router-link></button>
      </td>
  </div>
</template>

<script src="./InformeCreate.js"></script>
