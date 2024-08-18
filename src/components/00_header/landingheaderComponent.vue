<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    button1: {
        type: String,
        required: false,
    },
    button2: {
        type: String,
        required: false,
    },
    button3: {
        type: String,
        required: false,
    },
});

const routerLink = useRouter();

const navigate1 = () => {
    routerLink.push(props.button1);
    console.log(props.button1);
}
const navigate2 = () => {
    routerLink.push(props.button2)
}
const navigate3 = () => {
    routerLink.push(props.button3)
}
</script>

<template>
    <p>RitzzRiver</p>
    <div id="buttons">
        <button @click="navigate1">Dev</button>
        <button @click="navigate2">Info</button>
        <button @click="navigate3">Art</button>
    </div>
    
</template>
