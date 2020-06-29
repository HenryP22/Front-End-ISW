<template>
  <div>
    <h1 class="title">Nueva Membresia</h1>
    <h2 class="subtitle">Creación de Membresia</h2>

    <Loader v-if="isLoading" />
    <form v-else @submit.prevent="save">

      <div class="field">
        <input
          :class="{error: validation.hasError('model.tarjetaId')}"
          v-model.number="model.tarjetaId"
          class="input"
          type="int"
          placeholder="Ingrese el tarjetaId"
        />
        <p class="help is-danger">{{validation.firstError('model.tarjetaId')}}</p>
      </div>



      <div class="field">
        <input
          :class="{error: validation.hasError('model.docenteId')}"
          v-model.number="model.docenteId"
          class="input"
          type="int"
          placeholder="Ingrese el docenteId"
        />
        <p class="help is-danger">{{validation.firstError('model.docenteId')}}</p>
      </div>



      <div class="field">
         <input
          :class="{error: validation.hasError('model.cvc_tarjeta')}"
          v-model="model.cvc_tarjeta"
          class="input"
          type="text"
          placeholder="Ingrese la cvc_tarjeta"
        />
        <p class="help is-danger">{{validation.firstError('model.cvc_tarjeta')}}</p>
      </div>

      
      <div class="field">
        <input
          :class="{error: validation.hasError('model.fecha_expiracion')}"
          v-model="model.fecha_expiracion"
          class="input"
          type="date"
          placeholder="Ingrese el fecha_expiracion"
       />
        <p class="help is-danger">{{validation.firstError('model.fecha_expiracion')}}</p>
        </div>
        


      <div class="field">
        <button type="submit" class="button is-info">Guardar</button>
      </div>
    </form>
    <td class="has-text-centered">
      <button  type="submit" styles="margin-top:20px;background-color:green"><router-link to="/membresias">Cancelar</router-link></button>
      </td>
  </div>
</template>

<script src="./MembresiaCreate.js"></script>
