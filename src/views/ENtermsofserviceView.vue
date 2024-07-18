<script setup>
    import BWI from '../components/ButtonWithIcon.vue'
    import BWIAT from '../components/ButtonWithTextAndIcon.vue'

    const generalTOS = [
        "I DO NOT SUPPORT NFT OR IA, IF YOU ARE GOING TO USE MY ART FOR IT YOU BETTER NOT COMMISSION ME.",
        "YOU CAN REQUEST ADVANCES ON YOUR ORDER AT ANY TIME.",
        "YOU CAN POST YOUR COMMISSION, AS LONG AS YOU GIVE CREDITS.",
    ];

    const workflowTOS = [
        "I START WORKING ONCE 50% OF THE ORDER HAS BEEN PAID.",
        "IF YOU HAVE A DEADLINE, PLEASE LET ME KNOW IN ADVANCE, OTHERWISE I WILL WORK WITH THE STANDARD DELIVERY TIME.",
        "ORDERS ARE DELIVERED WITHIN 4 WORKING DAYS.",
        "YOU HAVE 5 FREE CORRECTIONS ON THE ORDER.",
        "ADDITIONAL CORRECTIONS HAVE A COST OF $10.000.",
        "I REQUIRE A VISUAL REFERENCE OF THE CHARACTER, DIGITAL BEING PREFERRED.",
        "THE REFERENCES IN TRADITIONAL MUST BE CLEAR AND WITH THEIR COLORS IN DIGITAL.",
        "I DO NOT ACCEPT REFERENCES OR SHADED DRAWINGS.",
        "I CAN MAKE MINOR MODIFICATIONS TO THE DRAWING, BUT DON'T MAKE ME DO IT ALL OVER AGAIN.",
    ];

    const PaymentsAndRefoundsTOS = [
        "ALL PRICES ARE IN USD.",
        "PAYMENTS ARE MADE VIA PAYPAL ONLY.",
        "PLEASE WAIT FOR MY APPROVAL BEFORE MAKING THE PAYMENT.",
        "PAYMENTS MUST BE MADE WITHIN 48 HOURS, OTHERWISE THE ORDER WILL BE CANCELLED.",
        "IF YOU CHANGE YOUR MIND PLEASE LET ME KNOW AS SOON AS POSSIBLE FOR A REFUND.",
        "ONCE THE PIECE HAS BEEN STARTED NO REFUNDS CAN BE REQUESTED.",
    ];

</script>

<template>

    <section>

        <BWI id="home" link="/">
            <img src="../components/icons/home.png"/>
        </BWI>
        <BWIAT button-text="Terminos de servicio (ES)" link="/TermsOfService-ES">
            <img src="../components/icons/store.png"/>
        </BWIAT>
        <p id="title">TERMS OF SERVICE</p>
        <p>BY COMMISIONING ME YOU AGREE TO THE FOLLOWING TERMS OF SERVICE:</p>
        
        <section id="general">
            <p class="topic">GENERAL</p>
            <ul>
                <li v-for="term in generalTOS" :key="term">{{ term }}</li>
            </ul>
        </section>
        
        <section id="workflow">
            <p class="topic">WORKFLOW</p>
            <ul>
                <li v-for="term in workflowTOS" :key="term">{{ term }}</li>
            </ul>
        </section>

        <section id="PAR">
            <p class="topic">PAYMENTS AND REFUNDS</p>
            <ul>
                <li v-for="term in PaymentsAndRefoundsTOS" :key="term">{{ term }}</li>
            </ul>
            <!-- image source: https://www.canva.com/es_mx/plantillas/EAF_bdyl4eg-post-de-instagram-medios-de-pago-minimalista-crema-y-negro/ -->
            <img src="https://marketplace.canva.com/EAF_bdyl4eg/1/0/1600w/canva-post-de-instagram-medios-de-pago-minimalista-crema-y-negro-x3Go8Lk6BX4.jpg" width="1000"/>
        </section>

       <section id="price chart">
            <p class="topic">this is a price chart</p>
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