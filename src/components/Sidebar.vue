<template>
   <div class="page-sidebar custom-scrollbar">
      <div class="sidebar-user text-center">
         <div>
            <img class="img-50 rounded-circle" :src="'/images/user/1.jpg'" alt="#">
         </div>
         <h6 class="mt-3 f-12">{{ data.nama }}</h6>
      </div>
      <ul class="sidebar-menu">
         <li>
            <div class="sidebar-title">General</div>
            <router-link :to="{name: 'Home'}" class="sidebar-header">
               <i class="icon-desktop"></i><span>Dashboard</span>
            </router-link>
         </li>
         <li>
            <router-link :to="{name: 'User.data'}" class="sidebar-header">
               <i class="icofont icofont-users"></i><span>User</span>
            </router-link>
         </li>
         <li>
            <router-link :to="{name: 'Kandidat.data'}" class="sidebar-header">
               <i class="icofont icofont-businessman"></i><span>Kandidat</span>
            </router-link>
         </li>
         <li>
            <router-link :to="{name: 'Pemilih.data'}" class="sidebar-header">
               <i class="icofont icofont-deal"></i><span>Pemilih</span>
            </router-link>
         </li>
      </ul>
      <div class="sidebar-widget text-center">
         <div class="sidebar-widget-top">
            <h6 class="mb-2 fs-14">Need Help</h6>
            <i class="icon-bell"></i>
         </div>
         <div class="sidebar-widget-bottom p-20 m-20">
            <p>+62 838 4525 7534
               <br>Krahmadani1@gmail.com
               <br><a href="https://kukuhkkh.github.io">Portofolio</a>
            </p>
         </div>
      </div>
   </div>
</template>

<script>
   import { mapState } from 'vuex'
   export default {
      name: "Sidebar",
      computed: {
         ...mapState('auth', {
            data: state => state.data
         })
      }
   }
</script>

<style scoped>

</style>