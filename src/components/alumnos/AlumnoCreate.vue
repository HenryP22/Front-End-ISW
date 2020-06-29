<template>
  <div>
    <h1 class="title">Nuevo Alumno</h1>
    <h2 class="subtitle">Creación de Alumno</h2>

    <Loader v-if="isLoading" />
    <form v-else @submit.prevent="save">
      

       <div class="field">
        <input
          :class="{error: validation.hasError('model.padreId')}"
          v-model.number="model.padreId"
         class="input"
          type="text"
          placeholder="Ingrese el Id Padre"
        />
        <p class="help is-danger">{{validation.firstError('model.padreId')}}</p>
      </div>


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
          type="number"
          placeholder="Ingrese la dni"
        />
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
        
          <select v-model="model.grado_academico" >
                <option>Primaria</option>
                <option>Secundaria</option>
                </select>
          <span>Selected: {{ model.grado_academico }}</span>


      
      
      <div class="field" style="margin-top:20px">
        <button type="submit" class="button is-info" >Guardar</button>
      </div>
     
    </form>
    <td class="has-text-centered">
      <button  type="submit" styles="margin-top:20px;background-color:green"><router-link to="/alumnos">Cancelar</router-link></button>
      </td>
    
  </div>
</template>

<script src="./AlumnoCreate.js"></script>
