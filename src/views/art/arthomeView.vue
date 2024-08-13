<script setup>
import BWTI from '../../components/ButtonWithTextAndIcon.vue'
</script>

<template>
    <main>
        <section class="main-container">
            <div class="home">
                <div class="secondary-container">
                    <img src="../../assets/ramas.png" width="400" />
                    <p>
                        INFJ-T<br/>
                        lazy (unmotivated) artist<br/>
                        Kitty cat cat<br/>
                        Roguelike enjoyer<br/>
                        They/them
                    </p>
                    <p>
                        <span class="ace_text_animated">demisexual</span>
                        -
                        <span class="pan_text_animated">pansexual</span>
                    </p>
    
                    <img src="../../assets/ramas.png" width="400" />
                </div>
    
                <div class="buttons-container">
                    <BWTI class="buttons" button-text="about me" link="/art/about/">
                        <img
                            class="buttonIcon"
                            src="../../components/icons/info-circle.png"
                            width="24"
                        />
                    </BWTI>
                    <BWTI class="buttons" button-text="contact" link="art/contact">
                        <img class="buttonIcon" src="../../components/icons/envelope.png" width="24" />
                    </BWTI>
                    <BWTI class="buttons" button-text="likes and dislikes" link="art/preferences">
                        <img
                            class="buttonIcon"
                            src="../../components/icons/message-square-check.png"
                            width="24"
                        />
                    </BWTI>
                    <BWTI class="buttons" button-text="Commisions (currently on wip)" link="/art/commisions/terms-of-service">
                        <img class="buttonIcon" src="../../components/icons/store.png" width="24" />
                    </BWTI>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>

main{
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(0, 40%);
}

.buttons-container {
    display: flex;
    justify-content: center;
}

@media(max-width:900px) {

    img {
        width: 300px;
    }
    .main-container{
        align-items: center;
        width: 400px;
        transform: translate(0, -15%);
    }
    .buttons {
        width: 100px;
        height: 100px;
    }

    .buttons img {
        width: 20px;
    }
}
</style>
