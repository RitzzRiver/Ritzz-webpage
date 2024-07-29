<script setup>
import ButtonWithTextAndIcon from '@/components/ButtonWithTextAndIcon.vue';
import FooterComponent from '@/components/footerComponent.vue';
</script>

<template>

    <header>
        <h1>Este es un header</h1>
    </header>

    <main>
        <div>
            <h1>Welcome</h1>
            <ButtonWithTextAndIcon button-text="DEV" link="dev"/>
            <ButtonWithTextAndIcon button-text="ART" link="art"/>
        </div>
    </main>
    
    <footer>
        <FooterComponent></FooterComponent>
    </footer>


</template>

<style scoped>
</style>