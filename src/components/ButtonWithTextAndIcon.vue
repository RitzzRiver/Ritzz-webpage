<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    buttonText: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});

const routerLink = useRouter();

const navigate = () => {
    routerLink.push(props.link)
}
</script>

<template>
    <button id="buttonWithIcon" @click="navigate">
        <slot></slot>
        {{ props.buttonText }}
    </button>
</template>

<style scoped>
#buttonWithIcon {
    border-radius: 10px;
    border-color: transparent;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
}

i {
    font-size: 16px;
}

button {
    margin-right: 5px;
    margin-bottom: 5px;
    font-family: "Playwrite DE Grund", cursive;
    font-weight: 400;
    font-optical-sizing: auto;
    font-size: 17px;
}

</style>