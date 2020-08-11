<template>
   <div class="row">
      <div class="col-md-12">
         <div class="form-group">
            <label for="nama">Nama</label>
            <input type="text" class="form-control" id="nama" v-model="kandidatData.nama" placeholder="Nama Lengkap" required="">
         </div>
      </div>
      <div class="col-md-12">
         <div class="form-group">
            <label>Visi</label>
            <ckeditor :editor="editor" v-model="kandidatData.visi" id="visi"/>
         </div>
         <div class="form-group">
            <label>Misi</label>
            <ckeditor :editor="editor" v-model="kandidatData.misi" id="misi"/>
         </div>
      </div>
      <div class="col-md-12">
         <div class="field form-group">
            <label for="file" class="label">Upload Avatar</label>
            <input type="file" id="file" accept="image/*" @change="uploadImage($event)" class="form-control">
         </div>
      </div>
      <div class="col-md-12">
         <div v-if="kandidatData.avatar.filename" class="text-center">
            <img :src="'http://localhost:3000/images/kandidat/' + kandidatData.avatar.filename" :alt="kandidatData.avatar" width="100" class="img img-fluid">
            <br><small>Kosongkan jika tidak mengubah gambar</small>
         </div>
      </div>
      <div class="col-12 mt-2 mb-2">
         <div class="alert alert-danger text-center" v-if="errors.invalid">{{ errors.invalid }}</div>
      </div>
   </div>
</template>

<script>
   import { mapState, mapMutations, mapActions } from 'vuex'
   import Vue from 'vue'
   import CKEditor from '@ckeditor/ckeditor5-vue'
   import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
   Vue.use( CKEditor )
   export default {
      name: "Form",
      data() {
         return {
            editor: ClassicEditor,
            kandidatData: {
               id: '',
               nama: '',
               visi: '',
               misi: '',
               avatar: ''
            }
         }
      },
      created() {
         if(this.$route.name === 'Kandidat.edit') {
            this.editKandidat(this.$route.params.id).then(res => {
               this.kandidatData = {
                     nama: res.data.nama,
                     visi: res.data.visi,
                     misi: res.data.misi,
                     avatar: ''
               }
            })
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
         ...mapActions('kandidat', ['submitKandidat', 'editKandidat', 'updateKandidat']),
         uploadImage(event) {
            this.kandidatData.avatar = event.target.files[0]
         },
         submit() {
            let form = new FormData()
            form.append('nama', this.kandidatData.nama)
            form.append('visi', this.kandidatData.visi)
            form.append('misi', this.kandidatData.misi)
            form.append('avatar', this.kandidatData.avatar)
            if(this.$route.name === 'Kandidat.add') {
               this.submitKandidat(form).then(() => {
                  this.kandidatData = {
                     id: '',
                     nama: '',
                     visi: '',
                     misi: '',
                     avatar: ''
                  }
                  this.$router.push({name: 'Kandidat.data'})
               })
            }
         }
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