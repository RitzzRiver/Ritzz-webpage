<script setup>
import BWI from '../../components/ButtonWithIcon.vue'
import BWIAT from '../../components/ButtonWithTextAndIcon.vue'
import { generalTOS_ES } from '@/assets/js/information'
import { workflowTOS_ES } from '@/assets/js/information'
import { PaymentsAndRefoundsTOS_ES } from '@/assets/js/information'
import { sketchPricesCOP } from '@/assets/js/information'
import { colorPricesCOP } from '@/assets/js/information'
import { renderPricesCOP } from '@/assets/js/information'
</script>

<template>
    <main>
        <section class="main-container">
            <div class="nav-buttons"></div>
            <BWI class="nav-button" id="home" link="/art">
                <img src="../../components/icons/home.png" />
            </BWI>
            <BWIAT class="nav-button" button-text="Terms of service (EN)" link="/art/commisions/terms-of-service">
                <img src="../../components/icons/store.png" />
            </BWIAT>

            <p class="title">TERMINOS DE SERVICIO</p>
            <p class="subtitle">AL COMISIONARME ACEPTAS LOS SIGUIENTES TERMINOS DE SERVICIO:</p>

            <section id="GENERAL">
                <p class="topic">GENERAL</p>
                <ul>
                    <li v-for="term in generalTOS_ES" :key="term">{{ term }}</li>
                </ul>
            </section>

            <hr />

            <section id="MDT">
                <p class="topic">MANERA DE TRABAJAR</p>
                <ul>
                    <li v-for="term in workflowTOS_ES" :key="term">{{ term }}</li>
                </ul>
            </section>

            <hr />

            <section id="PYR">
                <p class="topic">PAGOS Y REEMBOLSOS</p>
                <ul>
                    <li v-for="term in PaymentsAndRefoundsTOS_ES" :key="term">{{ term }}</li>
                </ul>
                <!-- image source: https://www.canva.com/es_mx/plantillas/EAF_bdyl4eg-post-de-instagram-medios-de-pago-minimalista-crema-y-negro/ -->
                <img
                    src="https://marketplace.canva.com/EAF_bdyl4eg/1/0/1600w/canva-post-de-instagram-medios-de-pago-minimalista-crema-y-negro-x3Go8Lk6BX4.jpg"
                    width="1000"
                />
            </section>

            <hr />

            <section id="price chart">
                <p class="topic">esto es una tabla de precios</p>
                <div class="content">
                    <img
                        class="samples"
                        src="https://i.pinimg.com/564x/74/36/fc/7436fc67ad355e06fdd2d811c0388644.jpg"
                        width="300"
                    />
                    <ul class="price-list">
                        <li v-for="price in sketchPricesCOP" :key="price">{{ price }}</li>
                    </ul>
                </div>
                <div class="content">
                    <img
                        class="samples"
                        src="https://i.pinimg.com/564x/74/36/fc/7436fc67ad355e06fdd2d811c0388644.jpg"
                        width="300"
                    />
                    <ul class="price-list">
                        <li v-for="price in colorPricesCOP" :key="price">{{ price }}</li>
                    </ul>
                </div>
                <div class="content">
                    <img
                        class="samples"
                        src="https://i.pinimg.com/564x/74/36/fc/7436fc67ad355e06fdd2d811c0388644.jpg"
                        width="300"
                    />
                    <ul class="price-list">
                        <li v-for="price in renderPricesCOP" :key="price">{{ price }}</li>
                    </ul>
                </div>
                <p>Si quieres comisionarme, <a href="/art/contact">contactame</a></p>
            </section>
        </section>
    </main>
</template>

<style scoped>
main {
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-buttons {
    display: flex;
}

#home {
    margin-right: 70%;
}

main ul li {
    list-style-type: circle;
    margin-left: 50px;
}

@media (max-width: 900px) {

   .main-container {
        align-items: center;
        width: 400px;
    }

    .nav-buttons .nav-button {
        width: 300px;
        height: 130px;
    }

    #home {
        width: 50px;
        height: 50px;
        margin-right: 60%;
    }
    .nav-button img {
        width: 25px;
    }
    img {
        width: 300px;
        transform: translate(0);
    }

    .topic-section {
        display: block;
    }
    .samples{
        display: block;
        transform: translate(0);
    }

    .content {
        display: block;
        padding-right: 100px;
    }

    .price-list {
        margin-left: 30px;
    }
}
</style>
