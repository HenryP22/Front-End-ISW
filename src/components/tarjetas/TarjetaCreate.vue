<template>
  <div>
    <h1 class="title">Creacion de tarjeta</h1>
    

    <Loader v-if="isLoading" />
    <form v-else @submit.prevent="save">


      <div class="field">
        <input
          :class="{error: validation.hasError('model.fecha_expiración')}"
          v-model="model.fecha_expiración"
          class="input"
          type="date"
          placeholder="Ingrese el fecha expiracion"
        />
        <p class="help is-danger">{{validation.firstError('model.fecha_expiración')}}</p>
      </div>
      <div class="field">
        <input
          :class="{error: validation.hasError('model.numero_poseedor')}"
          v-model="model.numero_poseedor"
          class="input"
          type="text"
          placeholder="Ingrese la numero poseedor"
        />
        <p class="help is-danger">{{validation.firstError('model.numero_poseedor')}}</p>
      </div>
      
      <div class="field">
        <input
          :class="{error: validation.hasError('model.numero_tarjeta')}"
          v-model="model.numero_tarjeta"
          class="input"
          type="text"
          placeholder="Ingrese la numero tarjeta"
        />
        <p class="help is-danger">{{validation.firstError('model.numero_tarjeta')}}</p>
      </div>

      
      <div class="field">
        <button type="submit" class="button is-info">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script src="./TarjetaCreate.js"></script>
