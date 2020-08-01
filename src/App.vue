<template>
   <div>
      <div class="page-wrapper">
         <app-header v-if="isAuth"/>
         <div class="page-body-wrapper" v-if="isAuth">
            <app-sidebar/>
            <div class="page-body">
               <router-view/>
            </div>
         </div>
         <div v-else-if="!isAuth">
            <router-view/>
         </div>
      </div>
   </div>
</template>

<script>
   import {mapState, mapGetters} from 'vuex'
   import Header from './components/Header'
   import Sidebar from './components/Sidebar'

   export default {
      computed: {
         ...mapState(['token']),
         ...mapGetters(['isAuth'])
      },
      components: {
         'app-header': Header,
         'app-sidebar': Sidebar
      }
   }
</script>

<style>
   #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
   }

   #nav {
      padding: 30px;
   }

   #nav a {
      font-weight: bold;
      color: #2c3e50;
   }

   #nav a.router-link-exact-active {
      color: #42b983;
   }
</style>
