<template>
    <Nav />
    <section class="midbanner">
        <div class="container-fluid">
            <div class="d-flex flex-column justify-content-center align-items-center" style="height: 20vh;">
                <h2 class="display-6">Airlines Fleets</h2>
            </div>
        </div>
    </section>
    <RouterView />
</template>
<script setup>
import Nav from '../../components/Nav.vue'
</script>
<style>
.midbanner {
    position: relative;
    background-image: url('../../assets/gulf2.jpg');
    background-size: cover;
    background-position: center;
    height: 25vh;
    overflow: hidden; /* ensures overlay stays inside */
    color: White;
}

.midbanner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3); /* 20% dark */
    z-index: 1;
}

/* If you have text inside, make sure it stays above the overlay */
.midbanner > * {
    position: relative;
    z-index: 2;
}
</style>
