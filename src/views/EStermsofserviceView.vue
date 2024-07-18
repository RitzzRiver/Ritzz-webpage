<script setup>
import BWI from '../components/ButtonWithIcon.vue'
import BWIAT from '../components/ButtonWithTextAndIcon.vue'

const generalTOS = [
    "NO APOYO LOS NFT NI LAS IA, SÍ VAS A USAR MI ARTE PARA ELLO MEJOR NO ME COMISIONES.",
    "PUEDES SOLICITAR EN CUALQUIER MOMENTO AVANCES DE TU PEDIDO.",
    "PUEDES POSTEAR TU COMISIÓN, SIEMPRE Y CUANDO DES CRÉDITOS.",
];

const workflowTOS = [
    "EMPIEZO A TRABAJAR UNA VEZ EL 50% DEL PEDIDO HA SIDO PAGADO.",
    "SI TIENES UNA FECHA LÍMITE, POR FAVOR, AVISA CON ANTICIPACIÓN, DE RESTO TRABAJARÉ CON EL PLAZO DE ENTREGA ESTÁNDAR.",
    "LOS PEDIDOS SE ENTREGAN EN UN PLAZO DE 4 DÍAS HÁBILES.",
    "TIENES 5 CORRECCIONES GRATUITAS SOBRE EL PEDIDO.",
    "LAS CORRECCIONES ADICIONALES TIENEN UN COSTO DE $10.000",
    "REQUIERO UNA REFERENCIA VISUAL DEL PERSONAJE, DIGITAL SIENDO PREFERIDO.",
    "LAS REFERENCIAS EN TRADICIONAL DEBEN SER CLARAS Y CON SUS COLORES EN DIGITAL.",
    "NO ACEPTO COMO REFERENCIAS DIBUJOS SOMBREADOS.",
    "PUEDO HACER PEQUEÑAS MODIFICACIONES AL DIBUJO, PERO NO ME HAGAS HACERLO TODO DE NUEVO.",
];

const PaymentsAndRefoundsTOS = [
    "TODOS LOS PRECIOS ESTÁN EN PESOS COLOMBIANOS.",
    "POR FAVOR ESPERAR POR MI APROVACION ANTES DE REALIZAR EL PAGO.",
    "LOS PAGOS TIENEN UN PLAZO DE 48 HORAS PARA REALIZARLOS, EN CASO CONTRARIO, EL PEDIDO SERÁ CANCELADO.",
    "SI CAMBIAS DE PARECER PORFAVOR AVISAME LO ANTES POSIBLE PARA UN REEMBOLSO.",
    "UNA VEZ QUE LA PIEZA FUE EMPEZADA NO SE PUEDEN PEDIR REEMBOLSOS.",
];

</script>

<template>

    <section>

        <BWI id="home" link="/">
            <img src="../components/icons/home.png" />
        </BWI>
        <BWIAT button-text="Terms of service (EN)" link="/TermsOfService-EN">
            <img src="../components/icons/store.png" />
        </BWIAT>

        <p id="title">TERMINOS DE SERVICIO</p>
        <p id="subtitle">AL COMISIONARME ACEPTAS LOS SIGUIENTES TERMINOS DE SERVICIO:</p>

        <section id="GENERAL">
            <p class="topic">GENERAL</p>
            <ul>
                <li v-for="term in generalTOS" :key="term">{{ term }}</li>
            </ul>
        </section>

        <section id="MDT">
            <p class="topic">MANERA DE TRABAJAR</p>
            <ul>
                <li v-for="term in workflowTOS" :key="term">{{ term }}</li>
            </ul>
        </section>

        <section id="PYR">
            <p class="topic">PAGOS Y REEMBOLSOS</p>
            <ul>
                <li v-for="term in PaymentsAndRefoundsTOS" :key="term">{{ term }}</li>
            </ul>
            <!-- image source: https://www.canva.com/es_mx/plantillas/EAF_bdyl4eg-post-de-instagram-medios-de-pago-minimalista-crema-y-negro/ -->
            <img src="https://marketplace.canva.com/EAF_bdyl4eg/1/0/1600w/canva-post-de-instagram-medios-de-pago-minimalista-crema-y-negro-x3Go8Lk6BX4.jpg"
                width="1000" />
        </section>

        <section id="price chart">
            <p class="topic">esto es una tabla de precios</p>
            <img class="samples" src="https://i.pinimg.com/564x/74/36/fc/7436fc67ad355e06fdd2d811c0388644.jpg"
                width="300" />
            <img class="samples" src="https://i.pinimg.com/564x/74/36/fc/7436fc67ad355e06fdd2d811c0388644.jpg"
                width="300" />
            <img class="samples" src="https://i.pinimg.com/564x/74/36/fc/7436fc67ad355e06fdd2d811c0388644.jpg"
                width="300" />
        </section>
    </section>

</template>

<style scoped>
</style>