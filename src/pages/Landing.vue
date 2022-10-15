<template>
    <div>
        <GuestLayout>
            <template #content>
                <!--Intro-->
                <div ref="inicio" class="py-12">
                    <div class="container md:pt-12 px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div class="w-full mx-auto justify-center items-start text-center">
                            <h1 class="my-4 text-4xl font-bold leading-tight">
                                <span class="title-typed"></span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="relative -mt-10 lg:-mt-24 ">
                    <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <path
                                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                                    opacity="0.100000001"></path>

                                <path
                                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                                    id="Path-4" opacity="0.200000003"></path>
                            </g>
                            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <path
                                    d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z">
                                </path>
                            </g>
                        </g>
                    </svg>
                </div>
                <!-- Socials -->
                <section class="bg-white" ref="contacto">
                    <div class="py-10 px-20 text-center flex flex-col space-y-4 max-w-lg mx-auto">
                        <a target="_blank" v-for="social in jsonSocials" :key="social" :href="social['url']"
                            :style="social['color']"
                            class="my-2 relative w-full py-2 md:py-3 font-semibold flex justify-center space-x-2 items-center text-white space-x-4 rounded-full">
                            <img :src="social['image']" class="w-8 h-8 fill-current absolute left-4 invert" alt="">
                            <span class="text-center">{{social['name']}}</span>
                        </a>
                        <a href="/Resume.pdf" target="_blank"
                            class="my-2 bg-custom-500 relative w-full py-2 md:py-3 font-semibold flex justify-center space-x-2 items-center text-white space-x-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 absolute left-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <span class="text-center">Resume</span>
                        </a>
                    </div>
                </section>
                <!-- Portfolio -->
                <section class="bg-white py-10 px-10" ref="portfolio">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-once="true">
                        <h4 class="text-3xl font-bold text-black">{{jsonPortFolio['title']}}</h4>
                        <Swiper
                            :autoplay="{
                                delay: 3000,
                                disableOnInteraction: true,
                            }"
                            :modules="modules"
                            :pagination="{
                                dynamicBullets: true,
                            }"
                            :navigation="true"
                            :effect="'cards'"
                            class="mySwiper md:max-w-3xl py-10 px-5 md:px-24"
                        >
                            <SwiperSlide
                                v-for="project in jsonPortFolio['projects']"
                                :key="project"
                            >
                                <a :href="project['url']" target="_blank">
                                    <div class="w-full bg-custom-500 hover:bg-custom-600 rounded-xl overflow-hidden shadow-md py-16">
                                        <div class="flex flex-wrap no-underline hover:no-underline space-y-4">
                                            <p class="mx-auto text-gray-800 rounded-lg bg-gray-200 text-xs md:text-sm px-4">
                                                {{project['languaje']}}
                                            </p>
                                            <div class="w-full font-bold text-xl text-white px-6">
                                                {{project['title']}}
                                            </div>
                                            <p class="text-gray-200 text-sm px-6 mb-2 line-clamp-4">
                                                {{project['description']}}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <!-- Skills -->
                <section class="bg-white py-4 pb-10 px-10" ref="skills">
                    <div class="mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-once="true">
                        <h4 class="font-bold text-black text-3xl">{{jsonSkills['title']}}</h4>
                        <div class="max-w-xl mx-auto  py-10">
                            <Skills :skills="jsonSkills['skills']" :projects="jsonPortFolio['projects']" />
                        </div>
                    </div>
                </section>
            </template>
            <template #footer>
                    <svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-1.000000, -8.000000)" fill-rule="nonzero">
                                <g class="wave" fill="#f8fafc">
                                    <path
                                        d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z">
                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <section class="container mx-auto text-center p-4">
                        <h3 class="my-4 text-3xl leading-tight">
                            ¡Gracias por visitar mi página personal!
                        </h3>
                        <button
                            @click="scrollTo('inicio')" 
                            class="link mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Subir
                        </button>
                    </section>
                </template>
        </GuestLayout>
    </div>
</template>

<script>
import json from '/public/json/text.json'
import GuestLayout from '@/layouts/GuestLayout.vue'
import NavBar from '@/components/NavBar.vue'
import Skills from '@/components/Skills.vue'
import Typed from 'typed.js';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper";

import 'aos/dist/aos.css';
import 'swiper/css';
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default {
    data() {
        return {
            jsonDescription: json['description'],
            jsonAbout: json['about'],
            jsonSkills: json['skills'],
            jsonPortFolio: json['portfolio'],
            jsonSocials: json['socials'],
            showingPortfolio: false,
            showingAbout: false,
            modules: [Autoplay, EffectCards, Pagination, Navigation],
        }
    },
    components: {
        GuestLayout,
        NavBar,
        Skills,
        Swiper,
        SwiperSlide,
    },
    methods: {
        
        scrollTo: function(ref) {
            this.$refs[ref].scrollIntoView({behavior: 'smooth'})
        },
        titleTyped() {
            var titleOptions = {
                strings: [
                    this.jsonDescription['title-1'],
                    this.jsonDescription['title-2'],
                    this.jsonDescription['title-3']
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 1200,
                smartBackspace: false,
                loop: true,
                loopCount: Infinity,
            };

            new Typed('.title-typed', titleOptions);
        }
    },
    mounted() {
        this.titleTyped();
        AOS.init();
    }
}
</script>

<style>
.swiper-button-prev,
.swiper-button-next {
    display: none;
    color: #235061;
    font-weight: 800;
}

.swiper-button-prev::after,
.swiper-button-next::after {
    font-size: 2rem;
}

@media (min-width: 768px) {
    .swiper-button-prev,
    .swiper-button-next {
        display: flex;
    }
}

</style>