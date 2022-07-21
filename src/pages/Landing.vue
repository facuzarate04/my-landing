<template>
    <div>
        <GuestLayout>
            <template #navbar>
                <NavBar @scrollTo="scrollTo"/>
            </template>
            <template #content>
                <!--Intro-->
                <div ref="inicio" class="py-20">
                    <div class="container md:pt-20 px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <!--Left Col-->
                        <div class="w-full mx-auto justify-center items-start text-center">
                            <h1 class="my-4 text-4xl font-bold leading-tight">
                                <span class="title-typed"></span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="relative -mt-12 lg:-mt-24 ">
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
                    <div class="p-10 px-20 text-center flex flex-col space-y-4 max-w-lg mx-auto">
                        <a target="_blank" v-for="social in jsonSocials" :key="social" :href="social['url']"
                            :style="social['color']"
                            class="my-2 w-full py-2 font-semibold flex justify-center space-x-2 items-center text-white space-x-4 rounded-full">
                            <img :src="social['image']" class="w-8 h-8 fill-current" alt="">
                            <span>{{social['name']}}</span>
                        </a>
                    </div>
                </section>
                <!-- Portfolio -->
                <section class="bg-white py-4 px-10" ref="portfolio">
                    <div class="container mx-auto flex flex-wrap pt-4 pb-4 rounded-xl border-2 max-w-xl">
                        <div @click="showingPortfolio = !showingPortfolio" class="w-full flex items-center justify-between px-10 cursor-pointer my-2 font-bold leading-tight text-center text-gray-800">
                            <p class="text-3xl">{{jsonPortFolio['title']}}</p>
                            <svg v-if="!showingPortfolio" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                            </svg>
                        </div>
                        <template v-if="showingPortfolio">
                            <a :href="project['url']" v-for="project in jsonPortFolio['projects']" :key="project" class="w-full max-w-lg p-6 flex flex-col mx-auto">
                                <div class="flex-1 bg-custom-500 hover:bg-custom-600 rounded-xl overflow-hidden shadow-md py-10">
                                    <div class="flex flex-wrap no-underline hover:no-underline space-y-4">
                                        <p class="mx-auto text-gray-800 rounded-lg bg-gray-200 text-xs md:text-sm px-4">
                                            {{project['languaje']}}
                                        </p>
                                        <div class="w-full font-bold text-xl text-white px-6">
                                            {{project['title']}}
                                        </div>
                                        <p class="text-gray-200 text-sm px-6 mb-2">
                                            {{project['description']}}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </template>
                    </div>
                </section>
                <!-- About me -->
                <section class="bg-white py-4 pb-10 px-10" ref="about" >
                    <div class="container mx-auto flex flex-wrap pt-4 pb-4 rounded-xl border-2 max-w-xl">
                        <div @click="showingAbout = !showingAbout" class="w-full flex items-center justify-between px-10 cursor-pointer my-2 font-bold leading-tight text-center text-gray-800">
                            <p class="text-3xl">{{jsonAbout['title']}}</p>
                            <svg v-if="!showingAbout" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                            </svg>
                        </div>
                        <div v-show="showingAbout">
                            <div class="flex flex-wrap my-2">
                                <div class="w-5/6 p-6 m-auto">
                                    <h3 class="text-xl text-gray-800 font-bold leading-none mb-3">
                                        {{jsonAbout['studies-title']}}
                                    </h3>
                                    <div class="text-gray-600 text-left space-y-4">
                                        <li v-for="l in jsonAbout['l']" :key="l">
                                            {{l}}
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap my-2">
                                <div class="w-full p-6 m-auto">
                                    <h3 class="text-xl text-gray-800 font-bold leading-none mb-3">
                                        {{jsonInterest['title']}}
                                    </h3>
                                    <div class="bg-black px-6 text-gray-100 rounded-xl h-96 flex items-center justify-center sm:h-50 text-left">
                                        <code class="skills-typed"></code>
                                    </div>
                                </div>
                            </div>
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
import json from '../../public/json/text.json'
import GuestLayout from '../layouts/GuestLayout.vue'
import NavBar from '../components/NavBar.vue'
import Typed from 'typed.js';
export default {
    data() {
        return {
            jsonDescription: json['description'],
            jsonAbout: json['about'],
            jsonInterest: json['interest'],
            jsonSkills: json['skills'],
            jsonPortFolio: json['portfolio'],
            jsonSocials: json['socials'],
            showingPortfolio: false,
            showingAbout: false,
        }
    },
    components: {
        GuestLayout,
        NavBar
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

            var titleTyped = new Typed('.title-typed', titleOptions);
        },
        skillsTyped() {
            var skillsOptions = {
                strings: [
                    `let skillsArr = [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: <b>'JavaScript'</b>, tools: [<b>'VueJS'</b>, <b>'ExpressJS'</b>]},<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: <b>'PHP'</b>, tools: <b>'Laravel'</b>},<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: <b>'Python'</b>, tools: <b>'Flask'</b>},<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: <b>'SQL'</b>, tools: [<b>'MySQL'</b>, <b>'PostgreSQL'</b>]},<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: <b>'NoSQL'</b>, tools: <b>MongoDB</b>},<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: <b>'Docker</b>', tools: <b>null</b>},<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name: <b>'AWS'</b>, tools: <b>null</b>}<br>];`,
                ],
                typeSpeed: 1,
                backSpeed: 1,
                backDelay: 10000,
                smartBackspace: false,
                loop: true,
                loopCount: Infinity,
                contentType: 'html',
                showCursor: false,
            };

            var skillsTyped = new Typed('.skills-typed', skillsOptions);
        }
    },
    mounted() {

        this.titleTyped()
        this.skillsTyped()
        
        var scrollpos = window.scrollY;
        var header = document.getElementById("header");
        var navcontent = document.getElementById("nav-content");
        var navaction = document.getElementById("navAction");
        var toToggle = document.querySelectorAll(".toggleColour");
        window.addEventListener('scroll', (e) => {
            scrollpos = window.scrollY;
            if (scrollpos > 10) {
                header.classList.add("bg-gray-800");
                navaction.classList.remove("bg-white");
                navaction.classList.add("gradient");
                navaction.classList.remove("text-gray-800");
                navaction.classList.add("text-white");
                //Use to switch toggleColour colours
                for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-gray-800");
                    toToggle[i].classList.remove("text-white");
                }
                header.classList.add("shadow");
                navcontent.classList.remove("bg-gray-100");
                navcontent.classList.add("bg-white");
            } else {
                header.classList.remove("bg-gray-800");
                navaction.classList.remove("gradient");
                navaction.classList.add("bg-white");
                navaction.classList.remove("text-white");
                navaction.classList.add("text-gray-800");
                //Use to switch toggleColour colours
                for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-white");
                    toToggle[i].classList.remove("text-gray-800");
                }

                header.classList.remove("shadow");
                navcontent.classList.remove("bg-white");
                navcontent.classList.add("bg-gray-100");
            }
        })
    }
}
</script>