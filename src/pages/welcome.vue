<script setup>

import BWTI from "../components/ButtonWithTextAndIcon.vue";
</script>

<template>
    <div id="content">
        <img src="../assets/ramas.png" width="400"/>
        <p>INFJ-T lazy Artist</p>
        <p>They/them</p>
        <p>
            <span class="ace_text_animated">demisexual</span> - <span class="pan_text_animated">pansexual</span>
        </p>
        
        <img src="../assets/ramas.png" width="400"/>
        
        <div id="buttons">
            <BWTI button-text="about me" icon="bx bx-info-circle" link="./about.vue"/>
            <BWTI button-text="contact" icon="bx bx-envelope" link="/contact"/>
            <BWTI button-text="likes and dislikes" icon="bx bx-check" link="/preferences"/>
        </div>
    </div>
</template>

<style scoped>

    .ace_text_animated {
        background: linear-gradient(to right, #000000, #f7f7f7 , #6b006c, #cbcbcb);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: rainbow_animation 6s ease-in infinite;
        background-size: 400% 100%;
        
    }
    .pan_text_animated {
        background: linear-gradient(to right, #f72088, #f7d100 , #20abf7);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: rainbow_animation 6s ease-in infinite;
        background-size: 400% 100%;
        
    }

    @keyframes rainbow_animation {
        0%, 100% {
            background-position: 0 0;
        }
        50% {
            background-position: 100% 0;
        }
    }

    #demi {
        color: purple;
    }
    #pan {
        color: yellow;
    }
    #content {
        border-width: 3px;
        background-color: #9c9fbe2f;
        backdrop-filter: blur(1px);
        border-radius: 10px;
        width: 25%;
        padding: 50px;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

    }
    #buttons{
        padding-left: 15px;
        text-align: center;
    }

</style>

