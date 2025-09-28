<template>
<section class="container py-5">
    <div class="container-fluid">
        <h1>Destinations</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque non odit, laboriosam in repellat esse sit sed aliquid, magni omnis error velit recusandae debitis ratione unde. Rem, nostrum facilis?</p>
        <div class="row py-3">
             <img :src="country.newCountry.image" alt="" class="img-fluid">
            <div class="col-sm-4">
                <form v-if="country.getcountryID !== null" method="post" @submit.prevent="country.saveEditCountry">
                    <div class="row">
                       
                        <div class="col-sm-6">
                            <img :src="country.updateCountry.flags" alt="" class="img-fluid" width="100px">
                        </div>
                        <div class="col-sm-6">
                            <label for="flag">Country ID</label>
                            <input type="number" v-model="country.updateCountry.id" id="flag" class="form-control">
                        </div>
                        <div class="col-sm-6">
                            <label for="flag">Flag</label>
                            <input type="url" v-model="country.updateCountry.flags" id="flag" class="form-control">
                        </div>
                        <div class="col-sm-12">
                            <label for="country">Country Name</label>
                            <input type="text" v-model="country.updateCountry.name_country" class="form-control" id="country">
                        </div>

                        <div class="col-sm-12">
                            <label for="itinerary">Itinerary Details</label>
                            <textarea v-model="country.updateCountry.itenerary_details" id="itinerary" class="form-control"></textarea>
                        </div>
                        <div class="col-sm-4 mt-3">
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
                <form v-else method="post" @submit.prevent="country.addCountry">
                    <div class="row">
                       
                        <div class="col-sm-6">
                            <img :src="country.newCountry.flags" alt="" class="img-fluid" width="100px">
                        </div>
                        <div class="col-sm-6">
                            <label for="flag">Flag</label>
                            <input type="url" v-model="country.newCountry.flags" id="flag" class="form-control">
                        </div>
                        <div class="col-sm-12">
                            <label for="country">Country Name</label>
                            <input type="text" v-model="country.newCountry.name_country" class="form-control" id="country">
                        </div>

                        <div class="col-sm-12">
                            <label for="itinerary">Itinerary Details</label>
                            <textarea v-model="country.newCountry.itenerary_details" id="itinerary" class="form-control"></textarea>
                        </div>
                        <div class="col-sm-4 mt-3">
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-sm-8">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Flag</th>
                                <th scope="col">Country Name</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody v-if="country.countries.length !== 0">
                            <tr v-for="(nation, id) in country.countries" :key="id">
                                <td>{{id}}</td>
                                <td><img :src="nation.flags" alt="" class="img-fluid" width="100px"></td>
                                <td>{{nation.name_country}}</td> 
                                
                                <td>
                                    <a @click="country.getIDcountry(id)" class="btn btn-sm btn-primary me-1">Edit</a>
                                    <a @click="country.deleteCountry(id)" class="btn btn-sm btn-danger">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td colspan="3" class="text-center">No data found</td>
                            </tr>
                        </tbody>
                        </table>
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
