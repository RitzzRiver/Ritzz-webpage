<script setup>
import headerComponent from '@/components/00_header/01_art/headerComponent.vue'
import footerComponent from '@/components/01_footer/01_art/footerComponent.vue'

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element){
        element.scrollIntoView({ behavior: 'smooth'});
    }
};

</script>

<template>
    <div class="landing">
        <header>
            <headerComponent/>
        </header>
        <main>
            <div class="commisionsinfo">
                <p>Currently my commisions are:</p>
                <p class="status">status</p>
            </div>
            <div class="commisionscurrencyinfo">
                <p>Select your preferred currency to continue</p>
                <div class="buttons">
                    <button class="copcomm" @click="scrollToSection('cop')">COP</button>
                    <button class="usdcomm" @click="scrollToSection('usd')">USD</button>
                </div>
            </div>
            <section id="usd" class="usdcommisions">
                <p class="title">Commisions in USD</p>
                <button class="tos">
                    if you are interested for a commision<br />please first read my Terms Of Service
                </button>
                <div class="sketches">
                    <p class="subtitle">Sketches</p>
                    <div class="headshot">
                        <p class="info">type<br/>X$</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                    <div class="halfbody">
                        <p class="info">type<br/>X$</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                    <div class="fullbody">
                        <p class="info">type<br/>X$</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                </div>
                <div class="color">
                    <p class="subtitle">Color only</p>
                    <div class="headshot">
                        <p class="info">type<br/>X$</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                    <div class="halfbody">
                        <p class="info">type<br/>X$</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                    <div class="fullbody">
                        <p class="info">type<br/>X$</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                </div>
                <div class="render">
                    <p class="subtitle">full render</p>
                    <div class="headshot">
                        <p class="info">type<br/>X$</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                    <div class="halfbody">
                        <p class="info">type<br/>X$</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                    <div class="fullbody">
                        <p class="info">type<br/>X$</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                </div>
            </section>
            <section id="cop" class="copcommisions">
                <p class="title">Comisiones en COP</p>
                <button class="tos">
                    Si estas interesadx en comisionarme<br />porfavor revisa mis terminos de servicio
                </button>
                <div class="sketches">
                    <p class="subtitle">Sketches</p>
                    <div class="headshot">
                        <p class="info">type<br/>$price</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                    <div class="halfbody">
                        <p class="info">type<br/>$price</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                    <div class="fullbody">
                        <p class="info">type<br/>$price</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                </div>
                <div class="color">
                    <p class="subtitle">Color only</p>
                    <div class="headshot">
                        <p class="info">type<br/>$price</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                    <div class="halfbody">
                        <p class="info">type<br/>$price</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                    <div class="fullbody">
                        <p class="info">type<br/>$price</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                </div>
                <div class="render">
                    <p class="subtitle">full render</p>
                    <div class="headshot">
                        <p class="info">type<br/>$price</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                    <div class="halfbody">
                        <p class="info">type<br/>$price</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                    <div class="fullbody">
                        <p class="info">type<br/>$price</p>
                        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="alt" width="200">
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <footerComponent></footerComponent>
            <p class="copyright">© 2024 - RitzzRiver</p>
        </footer>
    </div>
</template>

<style scoped></style>
