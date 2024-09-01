<script setup>
import headerComponent from '@/components/00_header/01_art/headerComponent.vue'
import footerComponent from '@/components/01_footer/01_art/footerComponent.vue'
import { details } from '@/assets/js/information'

import { featuredWorks } from '@/assets/js/gallery'
import { ref } from 'vue'

const isModalOpen = ref(false)
const selectedImage = ref(null)

function openModal(image) {
    selectedImage.value = image
    isModalOpen.value = true
}

function closeModal() {
    isModalOpen.value = false
}
</script>

<template>
    <div class="landing">
        <header>
            <headerComponent />
        </header>
        <main>
            <div v-if="isModalOpen" class="modal" @click="closeModal">
                <img :src="selectedImage" alt="Selected item" />
            </div>
            <div id="art-intro">
                <div class="info">
                    <ul>
                        <li v-for="detail in details" :key="detail">{{ detail }}</li>
                    </ul>
                </div>
            </div>

            <div class="featured-art">
                <h1>featured art</h1>
                <div class="container">
                    <article class="featured" v-for="photo in featuredWorks" :key="photo">
                        <div @click="openModal(photo.image)">
                            <p>{{ photo.title }}</p>
                            <img :src="photo.image" :alt="photo.alt" />
                        </div>
                    </article>
                </div>
            </div>
        </main>
        <footer>
            <footerComponent></footerComponent>
            <p class="copyright">© 2024 - RitzzRiver</p>
        </footer>
    </div>
</template>

<style scoped>
main {
    font-family: 'Nerko One', cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 25px;

    align-items: center;
    margin-top: 50px;

    #art-intro {
        margin: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .info {
            text-align: center;
            align-content: center;
        }
    }

    ul {
        list-style: none;
    }

    .featured-art {
        margin-top: 500px;

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .featured {
            margin: 10px;

            div {
                position: relative;

                img {
                    border-radius: 20px;
                    width: 400px;
                }

                p {
                    z-index: 1;
                    position: absolute;
                    left: 50%;
                    bottom: 0%;
                    transform: translate(-50%, -50%);
                    color: var(--main-color4);
                }
            }
            :hover {
                cursor: -webkit-zoom-in;
            }
        }
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;

        img {
            max-width: 90%;
            max-height: 90%;
            border-radius: 0%;
        }
    }
    .modal:hover {
        cursor: -webkit-zoom-out;
    }
}
</style>
