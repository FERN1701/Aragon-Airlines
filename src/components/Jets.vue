<template>
    <section class="container py-5">
        <div class="container-fluid">
           
           <div class="row py-3 g-3">
                <div class="col-sm-4">
                    <div class="card card-image d-flex justify-content-center align-items-center"  :style="{ backgroundImage: `url(${jet1})` }">
                        <h4 class="text-light">Gulfstream500</h4>
                    </div>        
                </div>
                <div class="col-sm-4">
                    <div class="card card-image d-flex justify-content-center align-items-center" :style="{ backgroundImage: `url(${jet1})` }">
                        <h4 class="text-light">Gulfstream500</h4>
                    </div>        
                </div>
                <div class="col-sm-4">
                    <div class="card card-image d-flex justify-content-center align-items-center" :style="{ backgroundImage: `url(${jet1})` }">
                        <h4 class="text-light">Gulfstream500</h4>
                    </div>        
                </div>
           </div>
           <div v-if="showbutton == 1" class="d-flex justify-content-center">
            <RouterLink  class="btn btn-secondary p-3" to="/fleets">View All Jets</RouterLink>
           </div>
           <div v-else class="d-flex justify-content-center">
            
           </div>
        </div>
    </section>
</template>
<script setup>
import Jets from '@/components/Jets.vue'
import jet1 from '../assets/gulf1.jpg'
const props = defineProps(['showbutton'])
</script>
<style scoped>
.card-image {
    position: relative;
    background-size: cover;
    background-position: center;
    height: 60vh;
    overflow: hidden; /* ensures overlay stays inside */
    color: White;
}

.card-image::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* 20% dark */
    z-index: 1;
}


.card-image > * {
    position: relative;
    z-index: 2;
}
</style>