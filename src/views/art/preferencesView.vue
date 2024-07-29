<script setup>
import BWI from '../../components/ButtonWithIcon.vue'
import { likes } from '../../assets/js/information.js'
import { dislikes } from '../../assets/js/information.js'
</script>

<template>
    <main>
        <div class="main-container">
            <div id="homebtn">
                <BWI link="/art">
                    <img src="../../components/icons/home.png" />
                </BWI>
            </div>
            <div class="likes">
                <p class="title">I like</p>
                <ul>
                    <li v-for="like in likes" :key="like">{{ like }}</li>
                </ul>
            </div>
            <div class="dislikes">
                <p class="title">I dislike</p>
                <ul>
                    <li v-for="dislike in dislikes" :key="dislike">{{ dislike }}</li>
                </ul>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    align-items: center;
    justify-content: center;
}

#homebtn {
    display: flex;
    justify-content: center;
}

p {
    font-weight: bold;
    font-size: 25px;
    text-align: center;
}

.main-container {
    display: table-row;
    transform: translate(0, 25%);
}

.likes {
    display: table-cell;
    padding-right: 100px;
}
.dislikes {
    display: table-cell;
}

.likes ul li::before {
    content: '❤';
    margin-right: 25px;
    font-size: 15px;
    color: red;
}

.likes ul li {
    font-size: 25px;
}

.dislikes ul li {
    font-size: 25px;
}

.dislikes ul li::before {
    content: '×';
    margin-right: 25px;
    font-weight: bolder;
    font-size: 20px;
    color: red;
}
</style>
