<script setup>
import headerComponent from '@/components/00_header/01_art/headerComponent.vue';
import { favGames } from '@/assets/js/gallery'
</script>

<template>
    <header>
        <headerComponent/>
    </header>
    <main>
        <div class="main-container">
            <div class="panel">
                <article class="about">
                    <p>Heyaaaaa~</p>
                    <p>
                        My name is Kris, better known as Ritzz. I'm a 20 years old colombian artist
                        who likes nature and fantasy. I am inspirated by the emotions and indie
                        games.
                    </p>
                    <p>My journey?</p>
                    <p>
                        I started in 2018 with a close friend who also draws a lot. And it awaked me
                        the sensation of materialize or almost give a visual concept of a existent
                        idea, also because I looks great to transform the reality at your desire
                        haha. So I decided to make it a hobby, but it was in 2020 in quarentine with
                        a teacher who doesnt put much effort in art, so there is the second reason
                        to choose arts: the way to express yourself with a image. and finally, on
                        2021 a real teacher of arts gives me the help to grow as an artist with how
                        to draw (at least with the basics) and the history what is a really
                        marvelous thing.
                    </p>
                    <p>
                        In 2022 I went to a Fine Arts school to learn more but... It wasn't that I
                        was specting because all the topics where given in a short time and I don't
                        feel good with only know the basics. If I want to get good at art I need to
                        have good bases. unfortunately, the career of Arts isn't here in my city BUT
                        hey I'm waiting to travel and purse that career.
                    </p>
                    <p>
                        Currently I have a few bases about color, history, painting, etc. So I can
                        do basic stuff with it, I try to do my best with grow with art, at least
                        watching videos or drawing small sketches for me or my friends
                    </p>
                    <p>
                        I am too way reserved with strangers, so please be patient with me :3 And
                        yes, if you where asking:
                        <a href="https://www.youtube.com/shorts/Un3gfp0QO2g" target="_blank">
                            I'm a furry
                        </a>
                    </p>
                </article>
            </div>
            <div class="panel">
                <p class="title">my fave games</p>
                <article class="games">
                    <div class="game-show" v-for="game in favGames" :key="game">
                        <img :src="game" height="400" width="280" />
                    </div>
                </article>
            </div>
        </div>
    </main>
    <footer>
        <p class="copyright">© 2024 RitzzRiver</p>
    </footer>
</template>

<style scoped></style>
