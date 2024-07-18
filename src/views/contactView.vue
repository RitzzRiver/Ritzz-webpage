<script setup>
    import BWI from "../components/ButtonWithIcon.vue"
</script>

<template>

    <div>
        <BWI link="/">
            <img src="../components/icons/home.png"/>
        </BWI>
        <p>you can find me on</p>
        <a href="https://www.pinterest.es/StarlightDreamer56/" target="_blank">
            <BWI>
                <img src="../components/icons/pinterest.png"/>
            </BWI>
        </a>
        <a href="https://twitter.com/RitzzRiver" target="_blank">
            <BWI>
                <img src="../components/icons/twitter.png"/>
            </BWI>
        </a>
        <a href="https://discord.com/users/619340299155800106" target="_blank">
            <BWI>
                <img src="../components/icons/discord.png"/>
            </BWI>
        </a>
        <a href="https://github.com/RitzzRiver" target="_blank">
            <BWI>
                <img src="../components/icons/github.png"/>
            </BWI>
        </a>
        <a href="https://t.me/StarlightDreamer56" target="_blank">
            <BWI>
                <img src="../components/icons/telegram.png"/>
            </BWI>
        </a>
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

