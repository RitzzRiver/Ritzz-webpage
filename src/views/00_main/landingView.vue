<script setup>
import footerComponent from '@/components/01_footer/footerComponent.vue'
import landingheaderComponent from '@/components/00_header/landingheaderComponent.vue'
</script>

<template>
    <div class="landing">
        <header>
            <landingheaderComponent button1="/dev" button2="/info" button3="art" />
        </header>
    
        <main>
            <h1>Landing page</h1>
        </main>
    
        <footer>
            <footerComponent></footerComponent>
            <p class="copyright">© 2024 RitzzRiver</p>
        </footer>
    </div>
</template>

<style scoped>

</style>
