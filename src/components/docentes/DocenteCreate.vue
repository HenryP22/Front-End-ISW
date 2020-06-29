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
        

      
      <select v-model="model.disponibilidad" >
                <option>Disponible</option>
                <option>No disponible</option>
                </select>
          <span>Selected: {{ model.disponibilidad }}</span>


      <div class="field">
        <input
          :class="{error: validation.hasError('model.numero_cuenta')}"
          v-model="model.numero_cuenta"
         class="input"
          type="text"
          placeholder="Ingrese el numero cuenta"
        />
        <p class="help is-danger">{{validation.firstError('model.numero_cuenta')}}</p>
      </div>



      <select v-model="model.membresia" >
                <option>Activa</option>
                <option>No activa</option>
                </select>
          <span>Selected: {{ model.membresia }}</span>



      <div class="field">
        <button type="submit" class="button is-info">Guardar</button>
      </div>
    </form>
    <td class="has-text-centered">
      <button  type="submit" styles="margin-top:20px;background-color:green"><router-link to="/docentes">Cancelar</router-link></button>
      </td>
  </div>
</template>

<script src="./DocenteCreate.js"></script>
