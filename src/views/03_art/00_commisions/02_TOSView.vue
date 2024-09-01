<script setup>
import headerComponent from '@/components/00_header/01_art/headerComponent.vue';
import footerComponent from '@/components/01_footer/01_art/footerComponent.vue';
import { generalTOS_EN } from '@/assets/js/information'
import { workflowTOS_EN } from '@/assets/js/information'
import { PaymentsAndRefoundsTOS_EN } from '@/assets/js/information'
</script>

<template>
    <header>
        <headerComponent/>
    </header>
    <main>
        <section class="main-container">
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
            <p>if you want to commision me, <a href="/art/contact">contact me</a></p>
        </section>
    </main>
    <footer>
        <footerComponent/>
        <p class="copyright">© 2024 - RitzzRiver</p>
    </footer>
</template>

<style scoped>

</style>
