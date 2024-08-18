<script setup>
import headerComponent from '@/components/00_header/01_art/headerComponent.vue';
import footerComponent from '@/components/01_footer/01_art/footerComponent.vue';
import { generalTOS_ES } from '@/assets/js/information'
import { workflowTOS_ES } from '@/assets/js/information'
import { PaymentsAndRefoundsTOS_ES } from '@/assets/js/information'
</script>

<template>
    <header>
        <headerComponent/>
    </header>
    <main>
        <section class="main-container">
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
        </section>
    </main>
    <footer>
        <footerComponent/>
        <p class="copyright">© 2024 - RitzzRiver</p>
    </footer>
</template>

<style scoped>

</style>
