<template>
   <div>
      <div class="page-wrapper">
         <div class="auth-bg">
            <div class="authentication-box">
               <h4 class="text-center">LOGIN</h4>
               <h6 class="text-center">
                  Enter your Username and Password For Login or Signup
               </h6>
               <div class="card mt-4 p-4 mb-0" >
                  <div class="form-group" :class="{'has-error': errors.email}">
                     <label class="col-form-label pt-0">Email</label>
                     <input type="text" class="form-control" placeholder="Email" v-model="data.email"/>
                     <p class="text-danger" v-if="errors.email">{{ errors.email[0] }}</p>
                  </div>
                  <div class="form-group" :class="{'has-error': errors.password}">
                     <label class="col-form-label">Password</label>
                     <input type="password" class="form-control" placeholder="Password" v-model="data.password"/>
                     <p class="text-danger" v-if="errors.password">{{ errors.password[0] }}</p>
                  </div>
                  <div class="alert alert-danger" v-if="errors.invalid">{{ errors.invalid }}</div>
                  <div class="form-group form-row mt-3 mb-0">
                     <div class="col-md-4">
                        <button type="submit" class="btn btn-primary" @click.prevent="postLogin" v-if="!loading">LOGIN</button>
                        <button type="submit" class="btn btn-primary" v-if="loading" disabled>Loading...</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="auth-bg-effect">
            <div class="first-effect"></div>
            <div class="second-effect"></div>
            <div class="third-effect"></div>
            <div class="fourth-effect"></div>
         </div>
      </div>
   </div>
</template>

<script>
   import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
   export default {
      name: "Login",
      data() {
         return {
            data: {
               email: '',
               password: ''
            },
            loading: false
         }
      },
      created() {
         if (this.isAuth) {
            this.$router.push({ name: 'Home' })
         }
      },
      computed: {
         ...mapGetters(['isAuth']),
         ...mapState(['errors'])
      },
      methods: {
         ...mapActions('auth', ['submit']),
         ...mapMutations(['CLEAR_ERRORS']),
         postLogin() {
            this.loading = true
            this.submit(this.data).then(() => {
               if (this.isAuth) {
                  this.CLEAR_ERRORS()
                  this.$router.push({ name: 'Home' })
               }
            })
            setTimeout(() => {
               this.loading = false
            }, 500)
         }
      }
   };
</script>
