<template>
   <div class="row">
      <div class="col-sm-12">
         <div class="card">
            <div class="card-header">
               <h5 class="card-title">Edit User</h5>
            </div>
            <div class="card-body">
               <user-form/>
               <div class="form-group">
                  <button class="btn btn-primary btn-sm btn-flat" @click.prevent="submit">
                     <i class="fa fa-save"></i> Update
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
      name: "Edit",
      data() {
         return {

         }
      },
      created() {
         this.editUser(this.$route.params.id)
      },
      methods: {
         ...mapActions('user', ['editUser', 'updateUser']),
         submit() {
            this.updateUser(this.$route.params.id).then(() => {
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