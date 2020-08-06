<template>
   <div class="row">
      <div class="col-sm-12">
         <div class="card">
            <div class="card-header">
               <router-link :to="{ name: 'Kandidat.add' }" class="btn btn-primary btn-sm btn-flat">Tambah</router-link>
               <div class="float-right">
                  <input type="text" class="form-control" placeholder="Cari..." v-model="search">
               </div>
            </div>
            <b-table striped hover bordered :items="kandidats.data" :fields="fields" show-empty>
               <template v-slot:cell(actions)="row">
                  <button class="btn btn-primary btn-sm mr-1"><i class="fa fa-eye"></i></button>
                  <router-link :to="{ name: 'Kandidat.edit', params: {id: row.item.id} }" class="btn btn-warning btn-sm mr-1"><i class="fa fa-pencil"></i></router-link>
                  <button class="btn btn-danger btn-sm" @click="deleteKandidat(row.item.id)"><i class="fa fa-trash"></i></button>
               </template>
            </b-table>
            <div class="row">
               <div class="col-12 mt-4 text-center">
                  <p v-if="kandidats.data"><i class="fa fa-bars"></i> {{ kandidats.data.length }} item</p>
               </div>
               <div class="col-md-6">
                  <div class="float-right">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import { mapState, mapActions } from 'vuex'
   export default {
      name: "Kandidat",
      data() {
         return {
            fields: [
               { key:'id', label: 'Kode' },
               { key:'nama', label: 'Nama' },
               { key:'actions', label: 'Aksi' }
            ],
            search: ''
         }
      },
      computed: {
         ...mapState('kandidat', {
            kandidats: state => state.kandidats
         })
      },
      watch: {
         search(){
            this.getKandidats(this.search)
         }
      },
      created() {
         this.getKandidats()
      },
      methods: {
         ...mapActions('kandidat', ['getKandidats', 'removeKandidat']),
         deleteKandidat(id) {
            this.$swal({
               title: "Apakah anda yakin ?",
               text: "Tindakan ini akan menghapus permanen",
               type: "warning",
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Iya, Lanjutkan!'
            }).then((res) => {
               if(res.value) {
                  this.removeKandidat(id)
                  this.$swal({
                     title: "Hapus kandidat berhasil",
                     type: "success"
                  })
               }
            })
         }
      }
   }
</script>
