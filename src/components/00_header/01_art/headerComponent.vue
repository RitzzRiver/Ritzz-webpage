<script setup>
import { useRouter } from 'vue-router'
const rootlinks = {
    commisions:{
        link: "/art/commisions",
    },
    works:{
        link: "/art/my-works",
    },
}

const routerLink = useRouter()

const navigate1 = () => {
    routerLink.push(rootlinks.commisions.link)
}
const navigate2 = () => {
    routerLink.push(rootlinks.works.link)
}
</script>

<template>
    <p>RitzzRiver</p>
    <div id="buttons">
        <button @click="navigate1">Commisions</button>
        <button @click="navigate2">My Works</button>
    </div>
</template>

<style scoped></style>
