<script setup>
import fc from '@/components/01_footer/footerComponent.vue';
import headerComponent from '@/components/00_header/00_dev/headerComponent.vue';
</script>

<template>
    <div class="landing">
        <header>
            <headerComponent/>
        </header>
        <main>
            <div id="about">
                <h1>about</h1>
            </div>
        </main>
        <footer>
            <fc/>
            <p class="copyright">© 2024 RitzzRiver</p>
        </footer>
    </div>
    
</template>

<style scoped>
main{
    display: flex;
    justify-content: center;
    background-color: var(--dev-background);
    color: white;
    font-size: 50px;
    padding-top: 200px;
    border: 1px solid black;
}
</style>