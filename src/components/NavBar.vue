
<template>
    <nav id="header" class="fixed w-full z-30 top-0 text-white">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 py-2">
            
            <div class="w-full  lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-gray-600 lg:bg-transparent text-black p-4 lg:p-0 z-20"
                id="nav-content">
                <ul class="list-reset lg:flex justify-end flex-1 items-center">
                    <!-- <li class="mr-3">
                        <a
                        :href="cv_url"
                        download="Facundo Zarate CV" 
                        class="cursor-pointer inline-block py-2 px-4 text-black hover:bg-gray-300 font-bold no-underline rounded-xl bg-gray-100">
                            Mi CV/Resume
                        </a>
                    </li> -->
                    <li class="mr-3">
                        <button :class="{'underline decoration-white decoration-4 underline-offset-8': active == 'portfolio'}" class="link inline-block py-2 px-4 text-white font-bold" 
                        @click="scrollTo('portfolio')">
                            Mi Portfolio
                        </button>
                    </li>
                    <li class="mr-3">
                        <button :class="{'underline decoration-white decoration-4 underline-offset-8': active == 'about'}" class="link inline-block py-2 px-4 text-white font-bold" 
                        @click="scrollTo('about')">
                            Acerca de mi
                        </button>
                    </li>
                    <li class="mr-3">
                        <button :class="{'underline decoration-white decoration-4 underline-offset-8': active == 'contacto'}" class="link inline-block py-2 px-4 text-white font-bold"
                        @click="scrollTo('contacto')">
                            Contacto
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
</template>
<script>
import { ref } from 'vue'
import json from '../../public/json/text.json'
export default{
    data() {
        return {
            cv_url: process.env.CV_URL,
            jsonNavBar: json['nav-bar'],
            showingMenu: false,
            active: null
        }   
    },
    methods: {
        scrollTo: function(ref) {
            this.active = ref
            this.$emit('scrollTo',ref)
        }
    }
}

</script>

