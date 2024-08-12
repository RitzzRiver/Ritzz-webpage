<script setup>
import { watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'

const route = useRoute()

watch(route, (newRoute) => {
    const path = newRoute.path
    if (path.startsWith('/art')) {
        document.body.style.backgroundImage = 'var(--art-background-image)';
    }
    else {
        document.body.style.backgroundColor = '#FDFCDC';
    }
})
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
