<script setup>
import { watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'

const route = useRoute()

watch(route, (newRoute) => {
    const path = newRoute.path
    if (path.startsWith('/info')) {
        document.body.style.backgroundImage = 'var(--background-image)';
    }
    else {
        document.body.style.backgroundColor = 'var(--main-color1)';
    }
})
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
