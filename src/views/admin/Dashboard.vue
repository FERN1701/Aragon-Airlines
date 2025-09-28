<template>
<section class="container py-5">
    <div class="container-fluid">
        <h3>Dashboard</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto possimus veniam inventore, a quisquam nesciunt, iusto molestias eius repellendus quasi quod beatae deleniti qui explicabo facilis fuga repudiandae esse!</p>
        <div class="row py-5 g-3">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <h1>{{airline.units.length}}</h1>
                            </div>
                            <div class="col-8">
                                <h3>Fleets</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <h1>08</h1>
                            </div>
                            <div class="col-8">
                                <h3>Countries</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <h1>08</h1>
                            </div>
                            <div class="col-8">
                                <h3>Consultations</h3>
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
import { airlineStore } from '../../stores/control'
const airline = airlineStore()
</script>