<template>
  <div>
    <h1 class="title">Nueva Tutoría</h1>
    <h2 class="subtitle">Creación de Tutoría</h2>
    

    <Loader v-if="isLoading" />
    <form v-else @submit.prevent="save">


      <div class="field">
        <input
          :class="{error: validation.hasError('model.alumnoId')}"
          v-model.number="model.alumnoId"
          class="input"
          type="text"
          placeholder="Ingrese el Id Tutoria"
        />
        <p class="help is-danger">{{validation.firstError('model.alumnoId')}}</p>
      </div>


      <div class="field">
        <input
          :class="{error: validation.hasError('model.cursoId')}"
          v-model.number="model.cursoId"
          class="input"
          type="text"
          placeholder="Ingrese el Id Curso"
        />
        <p class="help is-danger">{{validation.firstError('model.cursoId')}}</p>
      </div>
      
      <div class="field">
        <input
          :class="{error: validation.hasError('model.docenteId')}"
          v-model.number="model.docenteId"
          class="input"
          type="text"
          placeholder="Ingrese el Id Docente"
        />
        <p class="help is-danger">{{validation.firstError('model.docenteId')}}</p>
      </div>


      <div class="field">
        <input
          :class="{error: validation.hasError('model.costo')}"
          v-model.number="model.costo"
          class="input"
          type="text"
          placeholder="Ingrese la costo"
        />
        <p class="help is-danger">{{validation.firstError('model.costo')}}</p>
      </div>

      <div class="field">
        <input
          :class="{error: validation.hasError('model.descripcion')}"
          v-model="model.descripcion"
          class="input"
          type="text"
          placeholder="Ingrese la descripcion"
        />
        <p class="help is-danger">{{validation.firstError('model.descripcion')}}</p>
      </div>

      <div class="field">
        <input
          :class="{error: validation.hasError('model.cantidad_minutos')}"
          v-model.number="model.cantidad_minutos"
          class="input"
          type="text"
          placeholder="Ingrese la cantidad minutos"
        />
        <p class="help is-danger">{{validation.firstError('model.cantidad_minutos')}}</p>
      </div>

      
      <div class="field">
        <button type="submit" class="button is-info">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script src="./TutoriaCreate.js"></script>