<template>
<section class="container py-5">
    <div class="container-fluid">
        <div class="row py-3">
            <div class="col-sm-12 d-flex justify-content-center flex-column align-items-center">
                <h1>{{destination.name_country}}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil ullam, itaque consequatur unde numquam cum, quis facere nobis placeat in dolores explicabo temporibus est illo eligendi perspiciatis ducimus suscipit?</p>
            </div>
            <div class="col-sm-4">
                <img :src="destination.flags" alt="" class="img-fluid">
            </div>
            <div class="col-sm-8">
                <h3>Itinerary Details</h3>
                <p>{{destination.itenerary_details}}</p>
            </div>

        </div>
    </div>
</section>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { places } from '../../stores/control'
import { computed } from 'vue';

const route = useRoute()
const country = places()
const destination = computed(() => country.getCountry(route.params.id))

</script>