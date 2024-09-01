<script setup>
import { useRouter } from 'vue-router'
const rootlinks = {
    Home: {
        link: "/art",
    },
    aboutme: {
        link: "/about-me"
    },
    commisions:{
        link: "/commisions",
    },
    works:{
        link: "/art/my-works",
    },
}

const routerLink = useRouter()
const navigateHome = () => {
    routerLink.push(rootlinks.Home.link)
}
const navigateAbout = () => {
    routerLink.push(rootlinks.aboutme.link)
}
const navigateCommisions = () => {
    routerLink.push(rootlinks.commisions.link)
}
const navigatePortfolio = () => {
    routerLink.push(rootlinks.works.link)
}
</script>

<template>
    <a href="/">
        <p>RitzzRiver</p>
    </a>
    <div id="buttons">
        <ul>
            <li><a href="javascript:void(0)" @click="navigateHome">Home</a></li>
            <li><a href="javascript:void(0)" @click="navigateAbout">About me</a></li>
            <li><a href="javascript:void(0)" @click="navigateCommisions">Commisions</a></li>
            <li><a href="javascript:void(0)" @click="navigatePortfolio">Portfolio</a></li>
        </ul>
    </div>
</template>

<style scoped></style>
