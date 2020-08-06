<template>
   <div class="row">
      <div class="col-md-12">
         <div class="form-group">
            <label for="nama">Nama</label>
            <input type="text" class="form-control" id="nama" v-model="kandidat.name" placeholder="Nama Lengkap" required="">
         </div>
      </div>
      <div class="col-md-12">
         <div class="form-group">
            <label>Visi</label>
            <ckeditor :editor="editor" v-model="kandidat.visi" id="visi"></ckeditor>
         </div>
         <div class="form-group">
            <label>Misi</label>
            <ckeditor :editor="editor" v-model="kandidat.misi" id="misi"></ckeditor>
         </div>
      </div>
      <div class="col-md-12">

      </div>
      <div class="col-12 mt-2 mb-2">
         <div class="alert alert-danger text-center" v-if="errors.invalid">{{ errors.invalid }}</div>
      </div>
   </div>
</template>

<script>
   import { mapState, mapMutations } from 'vuex'
   import Vue from 'vue'
   import CKEditor from '@ckeditor/ckeditor5-vue'
   import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
   Vue.use( CKEditor )
   export default {
      name: "Form",
      data() {
         return {
            editor: ClassicEditor,
         }
      },
      computed: {
         ...mapState(['errors']),
         ...mapState('kandidat', {
            kandidat: state => state.kandidat
         })
      },
      mounted() {
      },
      methods: {
         ...mapMutations('kandidat', ['CLEAR_FORM']),
      },
      destroyed() {
         this.CLEAR_FORM()
      }
   }
</script>

<style>
   .ck-content {
      height: 250px;
   }
</style>