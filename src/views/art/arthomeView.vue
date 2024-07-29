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
                        INFJ-T lazy Artist <br />
                        They/them
                    </p>
                    <p>
                        <span class="ace_text_animated">demisexual</span>
                        -
                        <span class="pan_text_animated">pansexual</span>
                    </p>
    
                    <img src="../../assets/ramas.png" width="400" />
                </div>
    
                <div id="buttons">
                    <BWTI button-text="about me" link="art/about">
                        <img
                            class="buttonIcon"
                            src="../../components/icons/info-circle.png"
                            width="24"
                        />
                    </BWTI>
                    <BWTI button-text="contact" link="art/contact">
                        <img class="buttonIcon" src="../../components/icons/envelope.png" width="24" />
                    </BWTI>
                    <BWTI button-text="likes and dislikes" link="art/preferences">
                        <img
                            class="buttonIcon"
                            src="../../components/icons/message-square-check.png"
                            width="24"
                        />
                    </BWTI>
                    <BWTI button-text="Commisions" link="/art/commisions/TermsOfService-EN">
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
    transform: translate(0, 80%);
}

</style>
