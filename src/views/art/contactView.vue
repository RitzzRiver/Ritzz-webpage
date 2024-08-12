<script setup>
    import BWI from "../../components/ButtonWithIcon.vue"
</script>

<template>
    <main>
        <section class="main-container">
            <BWI class="button" link="/art">
                <img src="../../components/icons/home.png"/>
            </BWI>
            <p class="title">you can find me on</p>
            <a href="https://www.pinterest.es/StarlightDreamer56/" target="_blank">
                <BWI class="button">
                    <img src="../../components/icons/pinterest.png"/>
                </BWI>
            </a>
            <a href="https://twitter.com/RitzzRiver" target="_blank">
                <BWI class="button">
                    <img src="../../components/icons/twitter.png"/>
                </BWI>
            </a>
            <a href="https://discord.com/users/619340299155800106" target="_blank">
                <BWI class="button">
                    <img src="../../components/icons/discord.png"/>
                </BWI>
            </a>
            <a href="https://t.me/StarlightDreamer56" target="_blank">
                <BWI class="button">
                    <img src="../../components/icons/telegram.png"/>
                </BWI>
            </a>
        </section>
    </main>
</template>

<style scoped>
main {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(0, 100%);
}

.button{
    transform: translate(200%);
}
a .button{
    transform: translate(40%);
}
</style>