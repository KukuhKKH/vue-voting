<template>
   <div class="page-sidebar custom-scrollbar">
      <div class="sidebar-user text-center">
         <div>
            <img class="img-50 rounded-circle" src="assets/images/user/1.jpg" alt="#">
         </div>
         <h6 class="mt-3 f-12">Johan Deo</h6>
      </div>
      <ul class="sidebar-menu">
         <li>
            <div class="sidebar-title">General</div>
            <a href="javascript:void(0)" class="sidebar-header">
               <i class="icon-desktop"></i><span>Dashboard</span>
               <i class="fa fa-angle-right pull-right"></i>
            </a>
            <ul class="sidebar-submenu">
               <li><a href="index.html"><i class="fa fa-angle-right"></i>Default</a></li>
               <li><a href="ecommerce.html"><i class="fa fa-angle-right"></i>E-commerce</a></li>
               <li><a href="business.html"><i class="fa fa-angle-right"></i>Business<span class="badge badge-secondary ml-3">Tour</span></a></li>
               <li><a href="crm.html"><i class="fa fa-angle-right"></i>CRM</a></li>
            </ul>
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
   export default {
      name: "Sidebar"
   }
</script>

<style scoped>

</style>