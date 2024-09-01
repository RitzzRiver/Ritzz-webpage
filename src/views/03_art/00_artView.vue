<script setup>
import headerComponent from '@/components/00_header/01_art/headerComponent.vue'
import footerComponent from '@/components/01_footer/01_art/footerComponent.vue'
</script>

<template>
    <div class="landing">
        <header>
            <headerComponent />
        </header>
        <main>
            <p>Hewo, I'm Ritzz a Colombian artist<br />mostly inspired in indie games</p>
        </main>
        <footer>
            <footerComponent></footerComponent>
            <p class="copyright">© 2024 - RitzzRiver</p>
        </footer>
    </div>
</template>

<style scoped>
main p{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
}
</style>
