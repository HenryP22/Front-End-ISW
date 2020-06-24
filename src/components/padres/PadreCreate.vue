<template>
  <div>
    <h1 class="title">Creacion de Padre</h1>
    

    <Loader v-if="isLoading" />
    <form v-else @submit.prevent="save">

      <div class="field">
        <input
          :class="{error: validation.hasError('model.nombres')}"
          v-model="model.nombres"
          class="input"
          type="text"
          placeholder="Ingrese el nombres"
        />
        <p class="help is-danger">{{validation.firstError('model.nombres')}}</p>
      </div>



      <div class="field">
        <input
          :class="{error: validation.hasError('model.apellidos')}"
          v-model="model.apellidos"
          class="input"
          type="text"
          placeholder="Ingrese el apellidos"
        />
        <p class="help is-danger">{{validation.firstError('model.apellidos')}}</p>
      </div>



      <div class="field">
        <input
          :class="{error: validation.hasError('model.dni')}"
          v-model="model.dni"
          class="input"
          type="text"
          placeholder="Ingrese la DNI"
        />
        <p class="help is-danger">{{validation.firstError('model.dni')}}</p>
      </div>


      <div class="field">
        <input
          :class="{error: validation.hasError('model.correo')}"
          v-model="model.correo"
          class="input"
          type="text"
          placeholder="Ingrese la correo"
        />
        <p class="help is-danger">{{validation.firstError('model.correo')}}</p>
      </div>

      
      <div class="field">
        <button type="submit" class="button is-info">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script src="./PadreCreate.js"></script>
