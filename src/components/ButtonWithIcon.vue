<script setup>
    defineProps({
        icon: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        }
    });
</script>

<template>
    <button id="home"><i :class='icon' id="home icon"></i></button>
</template>

<style>
    #home {
        margin-right: 5px;
        margin-bottom: 5px;
        padding: center;
        padding: 10px;
        background-color: rgb(120, 207, 112);
        border-color: transparent;
        border-radius: 10px;
    }

    i {
        font-size: 25px;
    }

    #home :hover {
        cursor:pointer;
    }
</style>