<template>
   <div class="home">
      <div class="container-fluid">
         <div class="page-header">
            <div class="row">
               <div class="col-lg-6">
                  <h3>Sample Page
                     <small>Universal Admin panel</small>
                  </h3>
               </div>
               <div class="col-lg-6">
                  <ol class="breadcrumb pull-right">
                     <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i></a></li>
                     <li class="breadcrumb-item active">Sample Page</li>
                  </ol>
               </div>
            </div>
         </div>
      </div>
      <!-- Container-fluid Ends -->

      <!-- Container-fluid starts -->
      <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12">
               <div class="card">
                  <div class="card-header">
                     <button class="btn btn-primary float-right" @click="refreshGrafik1"><i class="fa fa-refresh"></i></button>
                     <h5>Hasil</h5>
                  </div>
                  <div class="card-body chart-block">
                     <canvas id="myChart" ref="canvas"></canvas>
                  </div>
               </div>
            </div>
            <div class="col-sm-12">
               <div class="card">
                  <div class="card-header">
                     <h5>Token yang sudah digunakan</h5>
                  </div>
                  <div class="card-body chart-block">

                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import {mapActions, mapState} from "vuex";
   import { Bar } from 'vue-chartjs'

   export default {
      name: "Home",
      extends: Bar,
      data() {
         return {
            options: {
               scales: {
                  yAxes: [{
                     ticks: {
                        beginAtZero: true
                     }
                  }]
               }
            },
            grafik1: '',
            grafik2: '',
            loading: true
         }
      },
      mounted() {
         setTimeout(() => {
            this.loading = false
            this.renderChart(this.grafik1, this.options)
         }, 100)
      },
      created() {
         this.getHasil().then(res => this.grafik1 = res.data)
      },
      computed: {
         ...mapState('hasil', {
            hasil: state => state.hasil
         })
      },
      methods: {
         ...mapActions('hasil', ['getHasil']),
         refreshGrafik1() {
            this.renderChart(this.grafik1, this.options)
         }
      }
   };
</script>
