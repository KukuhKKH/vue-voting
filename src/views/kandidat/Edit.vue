<template>
   <div class="row">
      <div class="col-sm-12">
         <div class="card">
            <div class="card-header">
               <h5 class="card-title">Edit Kandidat</h5>
            </div>
            <div class="card-body">
               <form enctype="multipart/form-data">
                  <kandidat-form/>
                  <div class="form-group">
                     <button class="btn btn-primary btn-sm btn-flat" @click.prevent="submit">
                        <i class="fa fa-save"></i> Update
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import { mapActions } from 'vuex'
   import KandidatForm from './Form'
   export default {
      name: "Edit",
      data() {
         return {}
      },
      components: {
         'kandidat-form': KandidatForm
      },
      created() {
         this.editKandidat(this.$route.params.id)
      },
      methods: {
         ...mapActions('kandidat', ['editKandidat', 'updateKandidat']),
         submit() {
            this.updateKandidat(this.$route.params.id).then(() => {
               this.$router.push({ name: 'Kandidat.data' })
            })
         }
      },
   }
</script>

<style scoped>

</style>