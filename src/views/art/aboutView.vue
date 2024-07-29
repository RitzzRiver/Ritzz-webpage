<script setup>
    import BWI from "../../components/ButtonWithIcon.vue";
    import BWTAI from "../../components/ButtonWithTextAndIcon.vue";
</script>

<template>
    <main>
        <div class="main-container">
            <div id="leftpanel">
                <div id="homebtn">
                    <BWI link="/art">
                        <img src="../../components/icons/home.png"/>
                    </BWI>
                </div>
                <p class="title">about me</p>
                <p>
                    Heya
                    I'm Ritzz
                    I'm a Colombian 20 years old student of software development mostly interested in arts, indie games and tea and furry stuff.
                    I'm currently waiting to finish the technologist of analysis and dev to start the career of plastic arts.
                    I collaborated in the translation of <a href="https://gamejolt.com/games/undertaleyellowesp/867360" target="_blank">Undertale yellow</a>
                </p>
            </div>
    
            <div id="rightpanel">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iASM509EsbFyS0LaFoWP8JYTOvkpf9iVfg&s" width="300">
                <br>
                <BWTAI button-text="likes and dislikes" icon="bx bx-check" link="/preferences"/>
            </div>
    
        </div>
    </main>
</template>