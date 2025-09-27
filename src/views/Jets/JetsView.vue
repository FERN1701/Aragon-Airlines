<template>
<section>
    <div class="container py-5">
        <div class="container-fluid">
            <div class="d-flex justify-content-center align-items-center flex-column">
                <h2>Our Aesthetic Fleets</h2>
                <p style="width: 80%;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nisi fugit laboriosam explicabo illo est corrupti minima, commodi corporis perspiciatis ipsa obcaecati quas nemo fugiat voluptatem aut reprehenderit excepturi! Quia?</p>
            </div>
            <jets :showbutton="showbutton" :airline="airline"  />
        </div>
    </div>
</section>
</template>
<script setup>
import  { airlineStore } from '../../stores/control'
const airline = airlineStore()
import jets from '../../components/Jets.vue';
const showbutton = 0
</script>
