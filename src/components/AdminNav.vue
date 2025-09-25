<template>
      <div class="">
        <div class="d-flex justify-content-between m-3 align-items-center">
            <h2 class=""><i class="fi fi-bs-fighter-jet"></i>Aragon Airlines</h2>
            
        </div>
        <div class="bg-dark p-2 nav-style ">
            <ul class="nav">
               <li class="nav-item">
                 <RouterLink  class="nav-link text-light" to="/">Home</RouterLink>
                </li>
                <li class="nav-item">
                 <RouterLink  class="nav-link text-light" to="/administrator">Dashboard</RouterLink>
                </li>
                <li class="nav-item" >
                  <RouterLink  class="nav-link text-light" to="/fleets">Units</RouterLink>
                </li>
            </ul>
        </div>
        
        
      </div>
</template>
<script setup>
import Dashboard from '@/views/admin/Dashboard.vue'
</script>
<style scoped>
.nav-style {
    position: relative;
    background-image: url('../assets/gulf2.jpg');
    background-size: cover;
    background-position: center;
    height: 8vh;
    overflow: hidden; /* ensures overlay stays inside */
    color: white;
}

.nav-style::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* 20% dark */
    backdrop-filter: blur(10px); /* 10% blur */
    z-index: 1;
    color: white;
}

/* If you have text inside, make sure it stays above the overlay */
.nav-style > * {
    position: relative;
    z-index: 2;
    color: white;
}

</style>