<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    buttonText: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: false,
    },
});

const routerLink = useRouter();

const navigate = () => {
    routerLink.push(props.link)
}
</script>

<template>
    <button class="buttonWithIcon" @click="navigate">
        <slot></slot>
        {{ props.buttonText }}
    </button>
</template>