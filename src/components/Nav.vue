<template>
      <div class="fixed-top">
        <div class="d-flex justify-content-between m-3 align-items-center">
            <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                <i class="fi fi-bs-menu-burger"></i>
            </button>
            <h2 class=""><i class="fi fi-bs-fighter-jet"></i> Aragon Airlines</h2>
            <a href="">Contact Us</a>
        </div>
        
        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel">PyGon Jets</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
               <div class="sidebar">
                <RouterLink  aria-current="page" to="/">Home</RouterLink>
                <RouterLink  aria-current="page" to="/jets">Jets</RouterLink>
                <RouterLink  aria-current="page" to="/">About Us</RouterLink>
                <RouterLink  aria-current="page" to="/">Contact US</RouterLink>
                </div>
            </div>
        </div>
      </div>
</template>
<script setup>

import Jets from '@/components/Jets.vue'
</script>
<style scoped>
.sidebar {
  margin: 0;
  padding: 0;
  width: 23%;
  position: fixed;
  height: 100%;
  overflow: auto;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #04AA6D;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}
.fixed-top{
  background-color: white;
}
</style>