<template>
  <div>
    <h1 class="title">TUTOFINDER APP</h1>
    <h2 class="subtitle">La aplicación de aprendizaje y enseñanza a tu alcance.</h2>

    <p><b>{{user.lastName}}, {{user.name}}</b> con esta app podrás buscar tutores a tu necesidad.</p>
  </div>
</template>

<script>
export default {
  name: "Default",
  data() {
    return {
      user: this.$store.state.user
    }
  }
};
</script>
