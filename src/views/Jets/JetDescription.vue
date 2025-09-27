<template>
<section class="container py-5">
    <div class="container-fluid">
        <h1>Description</h1>
        <h6>Name : {{jet.name_unit}}</h6>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, delectus fugit numquam possimus odio suscipit odit vitae ipsam veniam asperiores perspiciatis, porro illo, laborum dicta consequatur minus debitis officiis. Impedit?</p>
        <div class="row py-5">
            <div class="col-sm-6 mb-5">
                <img :src="jet.image" alt="" class="img-fluid">
            </div>
            <div class="col-sm-6">
                <h5>Cabin Space</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, error sequi quam voluptate aliquid quod! Dignissimos consequuntur omnis ipsam rem ipsa quod eius molestias quidem aperiam non, necessitatibus cum exercitationem.</p>
            </div>
        </div>
    </div>

</section>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { airlineStore } from '../../stores/control';

const route = useRoute()           // ✅ you need this
const airline = airlineStore()
const jet = computed(() => airline.getAirline(route.params.id))
</script>
