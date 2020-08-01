<template>
   <div>
      <div class="page-main-header">
         <div class="main-header-left">
            <div class="logo-wrapper">
               <a href="">
                  <img src="images/logo-light.png" class="image-dark" alt=""/>
                  <img src="images/logo-light-dark-layout.png" class="image-light" alt=""/>
               </a>
            </div>
         </div>
         <div class="main-header-right row">
            <div class="mobile-sidebar">
               <div class="media-body text-right switch-sm">
                  <label class="switch">
                     <input type="checkbox" id="sidebar-toggle" checked>
                     <span class="switch-state"></span>
                  </label>
               </div>
            </div>
            <div class="nav-right col">
               <ul class="nav-menus">
                  <li>
                     <form class="form-inline search-form">
                        <div class="form-group">
                           <label class="sr-only">Email</label>
                           <input type="search" class="form-control-plaintext" placeholder="Search..">
                           <span class="d-sm-none mobile-search">
                                </span>
                        </div>
                     </form>
                  </li>
                  <li class="onhover-dropdown">
                     <div class="media  align-items-center">
                        <img class="align-self-center pull-right mr-2" src="images/dashboard/user.png" alt="header-user"/>
                        <div class="media-body">
                           <h6 class="m-0 txt-dark f-16">
                              My Account
                              <i class="fa fa-angle-down pull-right ml-2"></i>
                           </h6>
                        </div>
                     </div>
                     <ul class="profile-dropdown onhover-show-div p-20">
                        <li>
                           <a href="#">
                              <i class="icon-user"></i>
                              Edit Profile
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="icon-email"></i>
                              Inbox
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="icon-check-box"></i>
                              Task
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="icon-comments"></i>
                              Chat
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="icon-power-off"></i>
                              Logout
                           </a>
                        </li>
                     </ul>
                  </li>
               </ul>
               <div class="d-lg-none mobile-toggle">
                  <i class="icon-more"></i>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "Header"
   }
</script>

<style scoped>

</style>