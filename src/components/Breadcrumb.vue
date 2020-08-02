<template>
   <ol class="breadcrumb pull-right">
      <li class="breadcrumb-item"><router-link :to="{ name: 'Home' }"><i class="fa fa-home"></i> Home</router-link>
      <li class="breadcrumb-item active">{{ $route.meta.title }}</li>
   </ol>
</template>

<script>
   export default {
      name: "Breadcrumb"
   }
</script>

<style scoped>

</style>