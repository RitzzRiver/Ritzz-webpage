<script setup>
import fc from '@/components/footerComponent.vue';
</script>

<template>
    <header>header space</header>
    <main>
        main space
        <div id="about">
            <h1>about</h1>
        </div>
    </main>
    <footer>
        <fc></fc>
    </footer>
</template>

<style scoped>
header{
    display: flex;
    justify-content: center;
    background-color: var(--dev-background);
    color: white;
    font-size: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid black;
}
main{
    display: flex;
    justify-content: center;
    background-color: var(--dev-background);
    color: white;
    font-size: 50px;
    padding-top: 200px;
    padding-bottom: 900px;
    border: 1px solid black;
}
</style>