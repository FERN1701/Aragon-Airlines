<template>
<section class="container py-5">
    <div class="container-fluid">
        <h3>Airplane Units</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis voluptatum consectetur dolor dicta ratione asperiores deleniti! Ad eligendi explicabo at, ipsum tempore id aut quaerat, est dicta expedita nesciunt.</p>
        <div class="row py-3">

            <div class="col-sm-4">
                <form v-if="airlines.geteditunitID !== null" @submit.prevent="airlines.saveEditUnits">
                
                    <img :src="airlines.updateUnits.image" alt="" class="img-fluid">
                    <div class="row g-2">
                        <div class="col-sm-6">
                            <label for="">Image</label>
                            <input type="file" @change="airlines.handleEditImageUpload" id="" class="form-control">
                        </div>
                        <div class="col-sm-6">
                           <label for="">ID</label>
                            <input type="number" v-model="airlines.updateUnits.id" id=""  class="form-control">
                        </div>
                        <div class="col-sm-6">
                            <label for="">Unit Name</label>
                            <input type="text" v-model="airlines.updateUnits.name_unit" id=""  class="form-control">
                        </div>
                        <div class="col-sm-6">
                            <label for="">Cost</label>
                            <input type="number" v-model="airlines.updateUnits.cost" id="" class="form-control">
                        </div>
                       <div class="col-sm-12">
                            <select v-model="airlines.updateUnits.type" id="" class="form-control">
                                <option value="Rotary">Rotary</option>
                                <option value="Steady">Steady</option>
                            </select>
                        </div>
                        <div class="col-sm-12">
                            <textarea  id="" v-model="airlines.updateUnits.description" class="form-control"></textarea>
                        </div>
                        <div class="col-sm-4">
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>

                <form v-else @submit.prevent="airlines.addUnits">
                    <img :src="airlines.newUnits.image" alt="" class="img-fluid">
                    <div class="row g-2">
                        <div class="col-sm-6">
                            <label for="">Image</label>
                            <input type="file" @change="airlines.handleImageUpload" id="" class="form-control">
                        </div>
                        <div class="col-sm-6">
                           <label for="">ID</label>
                            <input type="number" v-model="airlines.newUnits.id" id=""  class="form-control">
                        </div>
                        <div class="col-sm-6">
                            <label for="">Unit Name</label>
                            <input type="text" v-model="airlines.newUnits.name_unit" id=""  class="form-control">
                        </div>
                        <div class="col-sm-6">
                            <label for="">Cost</label>
                            <input type="number" v-model="airlines.newUnits.cost" id="" class="form-control">
                        </div>
                       <div class="col-sm-12">
                            <select v-model="airlines.newUnits.type" id="" class="form-control">
                                <option value="Rotary">Rotary</option>
                                <option value="Steady">Steady</option>
                            </select>
                        </div>
                        <div class="col-sm-12">
                            <textarea  id="" v-model="airlines.newUnits.description" class="form-control"></textarea>
                        </div>
                        <div class="col-sm-4">
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
                                <th scope="col">Unit Name</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Type</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(unit, id) in airlines.units" :key="id">
                                <td>{{ unit.id }}</td>
                                <td>{{ unit.name_unit }}</td>
                                <td>{{ unit.cost }}</td>
                                <td>{{ unit.type }}</td>
                                <td>
                                    <a @click="airlines.editUnits(id)" class="btn btn-sm btn-primary me-1">Edit</a>
                                    <a @click="airlines.deleteUnits(id)" class="btn btn-sm btn-danger">Delete</a>
                                </td>
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
import { airlineStore } from '../../stores/control'
import Units from '@/views/admin/Units.vue'
const airlines = airlineStore()
</script>