<template>
    <section class="container py-5">
        <div class="container-fluid">
            <p>Destinations</p>
            <h1>Destinations we love to offer</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ad eum veritatis temporibus? Voluptas est consequuntur officiis sunt. Nobis quos amet quisquam veritatis. Vitae, tempora delectus maiores quisquam voluptas quasi.</p>
            <div class="row py-5 g-3">
                <div class="col-sm-4" v-for="(nation, id) in country.countries" :key="id" @click="$router.push({ name: 'countryDescription', params:{id:nation.id}})">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-4">
                                    <img :src="nation.flags" alt="" class="img-fluid" width="200px">
                                </div>
                                <div class="col-sm-8 d-flex flex-column justify-content-center">
                                    <h3>{{nation.name_country}}</h3>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { places } from '../../stores/control'
const country = places()
</script>