<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    icon: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
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
