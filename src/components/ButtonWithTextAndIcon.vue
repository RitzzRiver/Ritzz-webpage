<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
        buttonText: {
            type: String,
            required: true, 
        },
        icon: {
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
    <span id="infobox">
            <button id="buttonWithIcon" @click="navigate">
                <i :class='icon'></i>
                {{ props.buttonText }}
            </button>
    </span>
</template>

<style scoped>
    #buttonWithIcon{
        background-color: rgb(120, 207, 112);
        border-radius: 10px;
        border-color: transparent;
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
    }
    i{
        font-size: 16px;
    }
    button {
        margin-right: 5px;
        margin-bottom: 5px;
        font-family: "Playwrite DE Grund", cursive;;
        font-weight: 400;
        font-optical-sizing: auto;
        font-size: 17px;
    }
</style>