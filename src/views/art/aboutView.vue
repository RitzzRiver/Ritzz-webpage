<script setup>
    import BWI from "../../components/ButtonWithIcon.vue";
    import BWTAI from "../../components/ButtonWithTextAndIcon.vue";
</script>

<template>
    <main>
        <div class="main-container">
            <div class="leftpanel">
                <div class="buttons">
                    <BWI link="/art">
                        <img src="../../components/icons/home.png"/>
                    </BWI>
                </div>
                <p class="title">about me</p>
                <p class="info">
                    Heya
                    I'm Ritzz
                    I'm a Colombian 20 years old student of software development mostly interested in arts, indie games and tea and furry stuff.
                    I'm currently waiting to finish the technologist of analysis and dev to start the career of plastic arts.
                    I collaborated in the translation of <a href="https://gamejolt.com/games/undertaleyellowesp/867360" target="_blank">Undertale yellow</a>
                </p>
            </div>
            <div class="rightpanel">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iASM509EsbFyS0LaFoWP8JYTOvkpf9iVfg&s" width="300">
                <br>
                <div class="btn">
                    <BWTAI class="button" button-text="likes and dislikes" icon="bx bx-check" link="/art/preferences"/>
                </div>
            </div>
    
        </div>
    </main>
</template>

<style scoped>

    .main-container {
        display: flex;
        transform: translate(50%, 40%);
    }
    .btn {
        display: flex;
        justify-content: center;
    }

    .leftpanel {
        width: 400px;
        margin-right: 50px;
    }
    .rightpanel {
        margin-top: 10px
    }


    @media(max-width:900px) {

        img {
            width: 250px;
        }
        .main-container{
            align-items: center;
            display: block;
            transform: translate(1%, 0);
            width: 400px;
        }
        .buttons {
            margin-left: 30%;
            width: 100px;
            height: 100px;
        }
    
        .buttons img {
            width: 40px;
        }

        .leftpanel {
            transform: translate(-11%);
            overflow-wrap: break-word;
        }

        .leftpanel .info {
            font-size: 25px;
        }
    }
</style>