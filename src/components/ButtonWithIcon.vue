<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

const routerLink = useRouter()

const navigate = () => {
    routerLink.push(props.link)
}
</script>

<template>
    <button @click="navigate">
        <slot></slot>
    </button>
</template>

<style>
button {
    margin-right: 5px;
    margin-bottom: 5px;
    padding: center;
    padding: 10px;
    border-color: transparent;
    border-radius: 10px;
    cursor: pointer;
}

i {
    font-size: 25px;
}
</style>
