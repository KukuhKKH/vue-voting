<template>
   <div>
      <div class="page-main-header">
         <div class="main-header-left">
            <div class="logo-wrapper">
               <a href="">
                  <img :src="'/images/evote.png'" class="image-dark" alt=""/>
                  <img :src="'/images/evote.png'" class="image-light" alt=""/>
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
                        <div class="media-body">
                           <h6 class="m-0 txt-dark f-16">
                              My Account
                              <i class="fa fa-angle-down pull-right ml-2"></i>
                           </h6>
                        </div>
                     </div>
                     <ul class="profile-dropdown onhover-show-div p-20">
                        <li>
                           <a href="javascript:void(0)" @click="logout">
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
   import $ from 'jquery'
   export default {
      name: "Header",
      mounted() {
         $.sidebarMenu = function(menu) {
            var animationSpeed = 300,
               subMenuSelector = '.sidebar-submenu';
            $(menu).on('click', 'li a', function(e) {
               var $this = $(this);
               var checkElement = $this.next();
               if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
                  checkElement.slideUp(animationSpeed, function() {
                     checkElement.removeClass('menu-open');
                  });
                  checkElement.parent("li").removeClass("active");
               }
               else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
                  var parent = $this.parents('ul').first();
                  var ul = parent.find('ul:visible').slideUp(animationSpeed);
                  ul.removeClass('menu-open');
                  var parent_li = $this.parent("li");
                  checkElement.slideDown(animationSpeed, function() {
                     checkElement.addClass('menu-open');
                     parent.find('li.active').removeClass('active');
                     parent_li.addClass('active');
                  });
               }
               if (checkElement.is(subMenuSelector)) {
                  e.preventDefault();
               }
            });
         }
         $(".mobile-sidebar .switch-state").click(function(){
            $(".page-body-wrapper").toggleClass("sidebar-close");
         });
         $.sidebarMenu($('.sidebar-menu'));

      },
      methods: {
         logout() {
            return new Promise((resolve) => {
               localStorage.removeItem('token')
               resolve()
            }).then(() => {
               this.$store.state.token = localStorage.getItem('token')
               this.$router.push('/login')
            })
         }
      }
   }
</script>

<style scoped>

</style>