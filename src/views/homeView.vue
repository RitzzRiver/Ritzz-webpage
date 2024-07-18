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
            <BWTI button-text="about me" link="/about">
                <img class="buttonIcon" src="../components/icons/info-circle.png" width="24"/>
            </BWTI>
            <BWTI button-text="contact" link="/contact">
                <img class="buttonIcon" src="../components/icons/envelope.png" width="24"/>
            </BWTI>
            <BWTI button-text="likes and dislikes" link="/preferences">
                <img class="buttonIcon" src="../components/icons/message-square-check.png" width="24"/>
            </BWTI>
            <BWTI button-text="Commisions" link="/termsofservice-en">
                <img class="buttonIcon" src="../components/icons/store.png" width="24"/>
            </BWTI>
        </div>
    </div>
</template>

<style scoped>

</style>

