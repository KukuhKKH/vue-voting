<template>
   <div>
      <div class="container-fluid">
         <div class="page-header">
            <div class="row">
               <div class="col-lg-6">
                  <h3>Management Kandidat</h3>
               </div>
               <div class="col-lg-6">
                  <breadcrumb/>
               </div>
            </div>
         </div>
      </div>
      <div class="container-fluid">
         <router-view></router-view>
      </div>
   </div>
</template>

<script>
   import Breadcrumb from "../../components/Breadcrumb";
   export default {
      name: "Index",
      components: {
         'breadcrumb': Breadcrumb
      }
   }
</script>

<style scoped>

</style>