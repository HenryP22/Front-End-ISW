<template>
  <div>
    <h1 class="title">TUTOFINDER APP</h1>
    <h2 class="subtitle">La aplicación que necesitas para aprender más</h2>

    <p><b>{{user.lastName}}, {{user.name}}</b> con esta app podrás ofrecer servicios de tutorías y obtener servicios de tutorías.</p>
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
