<script setup>
import Nav from '../components/Nav.vue'
import About from '../components/About.vue'
import Jets from '../components/Jets.vue'
import Consul from '../components/Consultation.vue'
const showbutton = 1
import  { airlineStore } from '../stores/control'
const airline = airlineStore()
</script>

<template>
  <Nav />
  <div class="banner">
    <div class="container" style="height: 100vh">
      <div class="container-fluid text-end" style="position: inherit; top: 48%;">
       <h1 class="display-2 fw-semibold">We make your dreams fly</h1>
          <a href="" class="btn btn-outline-light p-3">Learn More</a>
      </div>
      
    </div>
  </div>
  <About />
  <section class="container py-5">
        <div class="container-fluid">
           <div class="d-flex flex-column justify-content-center align-items-center text-center" >
                <h1>Our Jets</h1>
                <p style="width:80%">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ducimus enim minus, explicabo voluptates laborum ex, eaque dolorem, et reprehenderit nostrum laudantium ratione quisquam. Laudantium quasi reiciendis cupiditate consequuntur expedita.</p>
           </div>
          <Jets :showbutton="!!showbutton" :airline="airline" />
         </div>
    </section>  
  <Consul />
</template>
<style>
.banner {
    position: relative;
    background-image: url('../assets/gulf1.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    overflow: hidden; /* ensures overlay stays inside */
    color: White;
}

.banner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3); /* 20% dark */
    z-index: 1;
}

/* If you have text inside, make sure it stays above the overlay */
.banner > * {
    position: relative;
    z-index: 2;
}
.card{
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
RouterLink{
  text-decoration: none;
  color: black;
}
</style>
