<script setup>
import landingheaderComponent from '@/components/00_header/landingheaderComponent.vue'

import { useRouter } from 'vue-router'

const routerLink = useRouter()

const navigate1 = () => {
    routerLink.push("/dev");
}
const navigate2 = () => {
    routerLink.push("/art")
}
</script>

<template>
    <div class="landing">
        <header>
            <landingheaderComponent/>
        </header>

        <main>
            <div class="welcome">
                <p>Hello there!</p>
                <p>I'm <span>Ritzz</span></p>
            </div>

            <div id="topic-container">
                <div id="dev">
                    <a href="javascript:void(0)" @click="navigate1">
                        <div class="topic-image-container">
                            <p>development</p>
                            <img src="../assets/images/dev-placeholder.jpg" alt="development-sample" />
                        </div>
                    </a>
                    
                </div>
                <div id="art">
                    <a href="javascript:void(0)" @click="navigate2">
                        <div class="topic-image-container">
                            <p>art</p>
                            <img src="../assets/images/art-placeholder.jpg" alt="art-sample" />
                        </div>
                    </a>
                    
                </div>
            </div>
        </main>

        <footer>
            <p class="copyright">© 2024 RitzzRiver</p>
        </footer>
    </div>
</template>
