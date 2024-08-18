<script setup>
import { likes } from '../../assets/js/information.js'
import { dislikes } from '../../assets/js/information.js'
</script>

<template>
    <main>
        <div class="main-container">
            <p class="title">likes and dislikes</p>
            <div class="likes">
                <p class="subtitle">I like</p>
                <ul>
                    <li v-for="like in likes" :key="like">{{ like }}</li>
                </ul>
            </div>
            <div class="dislikes">
                <p class="subtitle">I dislike</p>
                <ul>
                    <li v-for="dislike in dislikes" :key="dislike">{{ dislike }}</li>
                </ul>
            </div>
        </div>
    </main>
    <footer>
        <p class="copyright">© 2024 RitzzRiver</p>
    </footer>
</template>

<style scoped></style>
