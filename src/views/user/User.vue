<template>
   <div>
      <div class="row">
         <div class="col-sm-12">
            <div class="card">
               <div class="card-header">
                  <router-link :to="{ name: 'User.add' }" class="btn btn-primary btn-sm btn-flat">Tambah</router-link>
                  <div class="float-right">
                     <input type="text" class="form-control" placeholder="Cari..." v-model="search">
                  </div>
               </div>
               <b-table striped hover bordered :items="users.data" :fields="fields" show-empty>
                  <template v-slot:cell(actions)="row">
                     <router-link :to="{ name: 'User.edit', params: {id: row.item.id} }" class="btn btn-warning btn-sm mr-1"><i class="fa fa-pencil"></i></router-link>
                     <button class="btn btn-danger btn-sm" @click="deleteUser(row.item.id)"><i class="fa fa-trash"></i></button>
                  </template>
               </b-table>
               <div class="row">
                  <div class="col-12 mt-4 text-center">
                     <p v-if="users.data"><i class="fa fa-bars"></i> {{ users.data.length }} item</p>
                  </div>
                  <div class="col-md-6">
                     <div class="float-right">
<!--                        <b-pagination-->
<!--                              v-model="page"-->
<!--                              :total-rows="users.meta"-->
<!--                        ></b-pagination>-->
                     </div>
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
      name: "User",
      data() {
         return {
            fields: [
               { key:'id', label: 'Kode' },
               { key:'name', label: 'Nama' },
               { key:'email', label: 'Email' },
               { key:'actions', label: 'Aksi' }
            ],
            search: ''
         }
      },
      computed: {
         ...mapState('user', {
            users: state => state.users
         })
      },
      watch: {
         search(){
            this.getUsers(this.search)
         }
      },
      created() {
         this.getUsers()
      },
      methods: {
         ...mapActions('user', ['getUsers', 'removeUser']),
         deleteUser(id) {
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
                  this.removeUser(id)
                  this.$swal({
                     title: "Hapus user berhasil",
                     type: "success"
                  })
               }
            })
         }
      }
   }
</script>

<style scoped>

</style>