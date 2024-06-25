<script setup>
    import BWI from "../components/ButtonWithIcon.vue"
</script>

<template>

    <div>
        <BWI icon="bx bxs-home" link="./welcome.vue"/>
        <p>you can find me on</p>
        <BWI icon="bx bxl-pinterest"/>
        <BWI icon="bx bxl-discord-alt"/>
        <BWI icon="bx bxl-twitter"/>
    </div>

</template>

<style scoped>
    div{
        background-color: #9fa4e038;
        backdrop-filter: blur(2px);
        width: 25%;
        border-radius: 10px;
        padding: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    p {
        font-size: 25px;
    }
</style>

