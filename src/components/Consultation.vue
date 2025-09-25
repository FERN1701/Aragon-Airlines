<template>
<section class="banner-cons">
    <div class="container-fluid">
        <div class="d-flex flex-column justify-content-center align-items-center" style="height: 50vh;">
            <h2 class="display-6">Schedule your private expirience</h2>
            <a href="" class="btn btn-outline-light">Consulte Now</a>
        </div>
    </div>
</section>
<section class="container py-5">
    <div class="container-fluid">
        <div class="">
            <div class="row">
                <div class="col-sm-6 d-flex justify-content-center align-items-center"><h4>Join the conversation</h4></div>
                <div class="col-sm-6">
                    <a class="btn btn-square btn-dark me-2" href="" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a class="btn btn-square btn-dark me-2" href="" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a class="btn btn-square btn-dark me-2" href="" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a class="btn btn-square btn-dark me-2" href="" target="_blank"><i class="fab fa-reddit"></i></a>
                    <a class="btn btn-square btn-dark me-2" href="" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
            <div class="d-flex justify-content-center py-4">
                <img src="https://assets.gulfstream.aero/thedotcom/images/icons/qr_wechat.png" alt="" class="img-fluid" width="100px">
                <div class="d-flex flex-column">
                    <p>Join in our wechat group</p>
                <p>Lorem ipsum dolor sit, amet</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script setup>
</script>
<style scoped>
.banner-cons {
    position: relative;
    background-image: url('../assets/gulf1.jpg');
    background-size: cover;
    background-position: center;
    height: 50vh;
    overflow: hidden; /* ensures overlay stays inside */
    color: White;
}

.banner-cons::before {
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
.banner-cons > * {
    position: relative;
    z-index: 2;
}
</style>
