<template>
  <div>
    <h1 class="title">Nuevo Curso</h1>
    <h2 class="subtitle">Creación de Curso</h2>

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



        <select v-model="model.grado_academico" >
                <option>Primaria</option>
                <option>Secundaria</option>
                </select>
          <span>Selected: {{ model.grado_academico }}</span>

      
      <div class="field">
        <button type="submit" class="button is-info">Guardar</button>
      </div>
    </form>
    <td class="has-text-centered">
      <button  type="submit" styles="margin-top:20px;background-color:green"><router-link to="/cursos">Cancelar</router-link></button>
      </td>
  </div>
</template>

<script src="./CursoCreate.js"></script>
