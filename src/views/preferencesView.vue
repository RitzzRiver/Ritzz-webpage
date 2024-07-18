<script setup>
import BWI from '../components/ButtonWithIcon.vue'
const likes = [
    "Plastic arts",
    "🛐 ROGUELIKES 🛐",
    "😺 C A T S 😺",
    "Japanese stuff",
    "Cottagecore",
    "Sandbox games",
    "Goofy CO-OP games",
    "Indie games",
    "Tech stuff",
    "Nature",
    "Photography",
];
const dislikes = [
    "AI, if you're into that GET OUT OF MY SIGHT.",
    "Violence",
    "Contamination",
    "Loud noises",
    "Actual reggaeton songs",
    "Sports",
    "Hot seasons * dies at 26° *",
    "Homophobia and transphobia (EQUAL RIGHTS)",
]
</script>

<template>
    <div id="container">
        <div id="homebtn">
            <BWI link="/">
                <img src="../components/icons/home.png"/>
            </BWI>
        </div>
        <div id="likes">
            <p>I like</p>
            <ul>
                <li v-for="like in likes" :key="like">{{ like }}</li>
            </ul>
        </div>
        <div id="dislikes">
            <p>I dislike</p>
            <ul>
                <li v-for="dislike in dislikes" :key="dislike">{{ dislike }}</li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
#container {
    float: left;
    padding: 50px;
    border-width: 3px;
    backdrop-filter: blur(1px);
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

p {
    font-size: 30px;
}
</style>