<template>
   <div class="row">
      <div class="col-md-6">
         <div class="form-group">
            <label for="nama">Nama</label>
            <input type="text" class="form-control" id="nama" v-model="user.name" placeholder="Nama Lengkap" required="">
         </div>
         <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="user.email" placeholder="Email" required="">
         </div>
      </div>
      <div class="col-md-6">
         <div class="form-group">
            <label for="password1">Password</label>
            <input type="password" class="form-control" id="password1" v-model="user.password" placeholder="Password" required="">
         </div>
         <div class="form-group">
            <label for="password2">Password</label>
            <input type="password" class="form-control" id="password2" v-model="user.password2" placeholder="Password" required="">
         </div>
      </div>
      <div class="col-12 mt-2 mb-2">
         <div class="alert alert-danger text-center" v-if="errors.password">{{ errors.password }}</div>
      </div>
   </div>
</template>

<script>
   import { mapState, mapMutations } from 'vuex'
   export default {
      name: "Form",
      computed: {
         ...mapState(['errors']),
         ...mapState('user', {
            user: state => state.user
         })
      },
      methods: {
         ...mapMutations('user', ['CLEAR_FORM']),
      },
      destroyed() {
         this.CLEAR_FORM()
      },
   }
</script>

<style scoped>

</style>