<template>
   <div class="row">
      <div class="col-sm-12">
         <div class="card">
            <div class="card-header">
               <h5 class="card-title">Add New User</h5>
            </div>
            <div class="card-body">
               <user-form/>
               <div class="form-group">
                  <button class="btn btn-primary btn-sm btn-flat" @click.prevent="submit">
                     <i class="fa fa-save"></i> Add New
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import { mapActions } from 'vuex'
   import UserForm from './Form'
   export default {
      name: "Add",
      data() {
         return {

         }
      },
      methods: {
         ...mapActions('user', ['submitUser']),
         submit() {
            this.submitUser().then(() => {
               this.$router.push({ name: 'User.data' })
            })
         }
      },
      components: {
         'user-form': UserForm
      }
   }
</script>

<style scoped>

</style>