<template>
   <div class="row">
      <div class="col-sm-12">
         <div class="card">
            <div class="card-header">
               <h5 class="card-title">Add New Kandiat</h5>
            </div>
            <div class="card-body">
               <kandidat-form/>
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
   import KandidatForm from './Form'
   export default {
      name: "Add",
      data() {
         return {
         }
      },
      components: {
         'kandidat-form': KandidatForm
      }
   }
</script>

<style scoped>

</style>