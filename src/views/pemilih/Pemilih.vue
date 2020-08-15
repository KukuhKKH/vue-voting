<template>
   <div class="row">
      <div class="col-sm-12">
         <div class="card">
            <div class="card-header">
               <button @click="showModal" class="btn btn-primary btn-sm btn-flat">Tambah</button>
               <button class="btn btn-danger ml-3" @click="truncate">Hapus Semua Token</button>
               <div class="float-right">
                  <input type="text" class="form-control" placeholder="Cari Token..." v-model="search">
               </div>
            </div>
            <b-table striped hover bordered :items="pemilihs.data" :fields="fields" show-empty>
               <template v-slot:cell(status)="row">
                  <div class="badge badge-success" v-if="row.item.status">Sudah Memilih</div>
                  <div class="badge badge-danger" v-if="!row.item.status">Belum Memilih</div>
               </template>
            </b-table>
            <div class="row container m-3">
               <div class="col-md-6">
                  <p v-if="pemilihs.data"><i class="fa fa-bars"></i> {{ pemilihs.data.length }} item dari {{ pemilihs.totalItem }} total data</p>
               </div>
               <div class="col-md-6">
                  <div class="float-right">
                     <b-pagination
                        v-model="page"
                        :total-rows="pemilihs.totalItem"
                        :per-page="pemilihs.data.length"
                        v-if="pemilihs.data && pemilihs.data.length > 0"
                     ></b-pagination>
                  </div>
               </div>
            </div>
         </div>
      </div>

<!--      Modal -->
      <div class="modal fade" id="modalTambah" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Generate Token</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div class="modal-body">
                  <input type="number" autofocus class="form-control" min="0" v-model="total" placeholder="Total Token">
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-secondary" :disabled="loading" @click="generate">Generate</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import { mapState, mapActions } from 'vuex'
   import $ from 'jquery'
   import 'bootstrap'
   export default {
      name: "Pemilih",
      data() {
         return {
            fields: [
               { key:'id', label: 'Kode Pemilih' },
               { key:'token', label: 'Token' },
               { key:'status', label: 'Status' }
            ],
            total: 0,
            search: '',
            loading: false
         }
      },
      computed: {
         ...mapState('pemilih', {
            pemilihs: state => state.pemilihs
         }),
         page: {
            get() {
               return this.$store.state.pemilih.page
            },
            set(val) {
               this.$store.commit('pemilih/SET_PAGE', val)
            }
         }
      },
      created() {
         this.getPemilih()
      },
      watch: {
         page() {
            this.getPemilih()
         },
         search() {
            this.getPemilih(this.search)
         }
      },
      methods: {
         ...mapActions('pemilih', ['getPemilih', 'truncatePemilih', 'generateToken']),
         showModal() {
            this.total = 0
            $('#modalTambah').modal('show')
         },
         truncate(){
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
                  this.truncatePemilih()
                  this.$swal({
                     title: "Hapus kandidat berhasil",
                     type: "success"
                  })
               }
            })
         },
         async generate() {
            this.loading = true
            let total = this.total
            await this.generateToken(total)
            this.loading = false
            $('#modalTambah').modal('hide')
         }
      }
   }
</script>

<style scoped>

</style>