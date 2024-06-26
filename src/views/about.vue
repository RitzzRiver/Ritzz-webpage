<script setup>
    import BWI from "../components/ButtonWithIcon.vue";
    import BWTAI from "../components/ButtonWithTextAndIcon.vue";
</script>

<template>
    <div id="panel">
        <div id="leftpanel">
            <div id="homebtn">
                <BWI link="/home" icon="bx bxs-home"/>
            </div>
            <p id="header">about me</p>
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


</template>

<style>
    #homebtn {
        text-align: center;
    }
    #panel {
        float: left;
        padding: 50px;
        border-width: 3px;
        background-color: #9fa4e038;
        backdrop-filter: blur(1px);
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    #leftpanel{
        float: left;
        width: 50%;
    }
    #rightpanel{
        float: left;
        width: 50%;
        margin-top: 15%
    }
    #header {
        font-size: 40px;
        margin: auto;
    }
    p {
        word-wrap: break-word;
        font-size: 20px;
    }
    img {
        border-radius: 20px;
    }
</style>



