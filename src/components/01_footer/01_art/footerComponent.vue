<script setup>
import { links } from '@/assets/js/information.js'
</script>

<template>
    <div class="container">
        <div class="footer-row">
            <div class="footer-links">
                <h4>important links</h4>
                <ul>
                    <li><a href="/">landing page</a></li>
                    <li><a href="/art">art page</a></li>
                    <li><a href="/about-me">about me</a></li>
                    <li><a href="/commisions/terms-of-service">terms of service</a></li>
                    <li><a href="/commisions/terminos-de-servicio">terminos de servicio</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Contact</h4>
                <ul>
                    <li><a href="/contact">find me</a></li>
                </ul>
            </div>

            <div class="footer-links">
                <h4>social links</h4>
                <div class="social-links">
                    <a :href="links.twitter.link" target="_blank"
                        ><i class="fa-brands fa-twitter"></i
                    ></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
