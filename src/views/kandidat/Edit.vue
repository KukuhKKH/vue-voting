<template>
   <div class="row">
      <div class="col-sm-12">
         <div class="card">
            <div class="card-header">
               <h5 class="card-title">Edit Kandidat</h5>
            </div>
            <div class="card-body">
               <kandidat-form ref="formKandidat"></kandidat-form>
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
   import KandidatForm from './Form'
   export default {
      name: "Edit",
      data() {
         return {}
      },
      components: {
         'kandidat-form': KandidatForm
      },
      methods: {
         submit() {
            this.$refs.formKandidat.submit()
         }
      },
   }
</script>

<style scoped>

</style>