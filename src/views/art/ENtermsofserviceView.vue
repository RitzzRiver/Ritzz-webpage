<script setup>
import BWI from '../../components/ButtonWithIcon.vue'
import BWIAT from '../../components/ButtonWithTextAndIcon.vue'
import { generalTOS_EN } from '@/assets/js/information'
import { workflowTOS_EN } from '@/assets/js/information'
import { PaymentsAndRefoundsTOS_EN } from '@/assets/js/information'
import { sketchPricesUSD } from '@/assets/js/information'
import { colorPricesUSD } from '@/assets/js/information'
import { renderPricesUSD } from '@/assets/js/information'
</script>

<template>
    <main>
        <section class="main-container">
            <div class="nav-buttons">
                <BWI id="home" link="/art">
                    <img src="../../components/icons/home.png" />
                </BWI>
                <BWIAT
                    class="nav-button"
                    button-text="Terminos de servicio (ES)"
                    link="/art/commisions/terminos-de-servicio"
                >
                    <img src="../../components/icons/store.png" />
                </BWIAT>
            </div>

            <p class="title">TERMS OF SERVICE</p>
            <p class="subtitle">BY COMMISIONING ME YOU AGREE TO THE FOLLOWING TERMS OF SERVICE:</p>

            <section class="topic-section" id="general">
                <p class="topic">GENERAL</p>
                <ul>
                    <li v-for="term in generalTOS_EN" :key="term">{{ term }}</li>
                </ul>
            </section>

            <hr />

            <section class="topic-section" id="workflow">
                <p class="topic">WORKFLOW</p>
                <ul>
                    <li v-for="term in workflowTOS_EN" :key="term">{{ term }}</li>
                </ul>
            </section>

            <hr />

            <section class="topic-section" id="PAR">
                <p class="topic">PAYMENTS AND REFUNDS</p>
                <ul>
                    <li v-for="term in PaymentsAndRefoundsTOS_EN" :key="term">{{ term }}</li>
                </ul>
                <!-- image source: https://www.canva.com/es_mx/plantillas/EAF_bdyl4eg-post-de-instagram-medios-de-pago-minimalista-crema-y-negro/ -->
                <img
                    src="https://marketplace.canva.com/EAF_bdyl4eg/1/0/1600w/canva-post-de-instagram-medios-de-pago-minimalista-crema-y-negro-x3Go8Lk6BX4.jpg"
                    width="1000"
                />
            </section>

            <hr />

            <section class="topic-section" id="price-chart">
                <p class="topic">PRICE CHART</p>
                <div class="content">
                    <img
                        class="samples"
                        src="https://i.pinimg.com/564x/74/36/fc/7436fc67ad355e06fdd2d811c0388644.jpg"
                        width="300"
                    />
                    <ul class="price-list">
                        <li v-for="price in sketchPricesUSD" :key="price">{{ price }}</li>
                    </ul>
                </div>
                <div class="content">
                    <img
                        class="samples"
                        src="https://i.pinimg.com/564x/74/36/fc/7436fc67ad355e06fdd2d811c0388644.jpg"
                        width="300"
                    />
                    <ul class="price-list">
                        <li v-for="price in colorPricesUSD" :key="price">{{ price }}</li>
                    </ul>
                </div>
                <div class="content">
                    <img
                        class="samples"
                        src="https://i.pinimg.com/564x/74/36/fc/7436fc67ad355e06fdd2d811c0388644.jpg"
                        width="300"
                    />
                    <ul class="price-list">
                        <li v-for="price in renderPricesUSD" :key="price">{{ price }}</li>
                    </ul>
                </div>
                <p>if you want to commision me, <a href="/art/contact">contact me</a></p>
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

img {
    transform: translate(15%);
}
.nav-buttons {
    display: flex;
}

#home {
    display: flex;
    justify-content: right;
    margin-right: 70%;
}

main ul li {
    list-style-type: circle;
    margin-left: 50px;
}

.samples {
    transform: translate(40%);
}

.price-list {
    width: max-content;
    margin-left: 100px;
}

.content {
    display: table-cell;
    padding-right: 100px;
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
