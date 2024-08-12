<script setup>
import { links } from '../assets/js/information.js';


</script>

<template>
    <div class="container">
        <div class="footer-row">
                <div class="footer-links">
                    <h4>ayuda</h4>
                    <ul>
                        <li><a href="#about">acerca de mi</a></li>
                        <li><a href="art">mi pagina de arte</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>contacto</h4>
                    <div class="social-links">
                        <a :href="links.mail.link"
                            ><i class="fa-solid fa-envelope"></i
                        ></a>
                        <a :href="links.twitter.link" target="_blank"
                            ><i class="fa-brands fa-twitter"></i
                        ></a>
                        <a :href="links.github.link" target="_blank"
                            ><i class="fa-brands fa-github"></i
                        ></a>
                        <a :href="links.telegram.link" target="_blank"><i class="fa-brands fa-telegram"></i></a>
                    </div>
                </div>

            <div class="footer-links">
                <p>© 2024 RitzzRiver</p>
            </div>
        </div>
    </div>
</template>
