<template>
  <div>
    <h1 class="title">{{model.alumnoId ? model.nombres : 'Nuevo Alumno'}}</h1>
    <h2 class="subtitle">{{model.alumnoId ? model.apellidos : 'Creación de Alumno.'}}</h2>

    <Loader v-if="isLoading" />
    <form v-else @submit.prevent="save">

      <div class="field">
        <input
          :class="{error: validation.hasError('model.nombres')}"
          v-model="model.nombres"
          class="input"
          type="text"
          placeholder="Ingrese el nombre"
        />
        <p class="help is-danger">{{validation.firstError('model.nombres')}}</p>
      </div>



      <div class="field">
        <input
          :class="{error: validation.hasError('model.apellidos')}"
          v-model="model.apellidos"
          class="input"
          type="text"
          placeholder="Ingrese el apellido"
        />
        <p class="help is-danger">{{validation.firstError('model.apellidos')}}</p>
      </div>



      <div class="field">
        <textarea
          :class="{error: validation.hasError('model.dni')}"
          v-model="model.dni"
          class="input"
          type="number"
          placeholder="Ingrese la dni"
        ></textarea>
        <p class="help is-danger">{{validation.firstError('model.dni')}}</p>
      </div>

      
      <div class="field">
        <input
          :class="{error: validation.hasError('model.correo')}"
          v-model="model.correo"
          class="input"
          type="text"
          placeholder="Ingrese el correo"
       />
        <p class="help is-danger">{{validation.firstError('model.correo')}}</p>
        </div>
        



        <div class="field">
        <input
          :class="{error: validation.hasError('model.grado_academico')}"
          v-model="model.grado_academico"
         class="input"
          type="text"
          placeholder="Ingrese el Grado Académico"
        />
        <p class="help is-danger">{{validation.firstError('model.grado_academico')}}</p>
      </div>
      
      
      <div class="field">
        <button type="submit" class="button is-info">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script src="./AlumnoCreate.js"></script>
