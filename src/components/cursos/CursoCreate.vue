<template>
  <div>
    <h1 class="title">Creacion de Curso</h1>
    

    <Loader v-if="isLoading" />
    <form v-else @submit.prevent="save">

      <div class="field">
        <input
          :class="{error: validation.hasError('model.nombre')}"
          v-model="model.nombre"
          class="input"
          type="text"
          placeholder="Ingrese el nombre"
        />
        <p class="help is-danger">{{validation.firstError('model.nombre')}}</p>
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
          :class="{error: validation.hasError('model.grado_academico')}"
          v-model="model.grado_academico"
          class="input"
          type="text"
          placeholder="Ingrese la grado academico"
        />
        <p class="help is-danger">{{validation.firstError('model.grado_academico')}}</p>
      </div>

      
      <div class="field">
        <button type="submit" class="button is-info">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script src="./CursoCreate.js"></script>
