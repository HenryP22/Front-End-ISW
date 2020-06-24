<template>
  <div>
    <h1 class="title">Nuevo Docente</h1>
    <h2 class="subtitle">Creación de Docente</h2>

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
        <input
          :class="{error: validation.hasError('model.dni')}"
          v-model="model.dni"
          class="input"
          type="text"
          placeholder="Ingrese la dni"
        />
        <p class="help is-danger">{{validation.firstError('model.dni')}}</p>
      </div>



      <div class="field">
        <input
          :class="{error: validation.hasError('model.domicilio')}"
          v-model="model.domicilio"
         class="input"
          type="text"
          placeholder="Ingrese el Domicilio"
        />
        <p class="help is-danger">{{validation.firstError('model.domicilio')}}</p>
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
          :class="{error: validation.hasError('model.costo')}"
          v-model="model.costo"
         class="input"
          type="number"
          placeholder="Ingrese el Costo"
        />
        <p class="help is-danger">{{validation.firstError('model.costo')}}</p>
      </div>
      
      <div class="field">
        <input
          :class="{error: validation.hasError('model.disponibilidad')}"
          v-model="model.disponibilidad"
         class="input"
          type="text"
          placeholder="Ingrese el disponibilidad"
        />
        <p class="help is-danger">{{validation.firstError('model.disponibilidad')}}</p>
      </div>


      <div class="field">
        <input
          :class="{error: validation.hasError('model.numerocuenta')}"
          v-model="model.numerocuenta"
         class="input"
          type="text"
          placeholder="Ingrese el numero cuenta"
        />
        <p class="help is-danger">{{validation.firstError('model.numerocuenta')}}</p>
      </div>



      <div class="field">
        <input
          :class="{error: validation.hasError('model.membresia')}"
          v-model="model.membresia"
         class="input"
          type="text"
          placeholder="Ingrese el membresia"
        />
        <p class="help is-danger">{{validation.firstError('model.membresia')}}</p>
      </div>



      <div class="field">
        <button type="submit" class="button is-info">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script src="./DocenteCreate.js"></script>
