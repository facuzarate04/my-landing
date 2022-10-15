<template>
    <div class="flex flex-wrap items-center justify-center">
        <img v-for="(skill, index) in skills" :key="index" :alt="skill.name" 
            :src="skill.image"
            class="w-32 h-32 hover:opacity-90 cursor-pointer my-4 mx-4"
            @click="showSkill(skill)"
        >
    </div>
</template>

<script>

export default {
    props: {
        skills: {
            type: Object,
            required: true
        },
        projects: {
            type: Object,
            required: true
        }
    },
    methods: {
        showSkill(skill) {
            let projects = Object.values(this.projects).filter(project => project.technologies.includes(skill.name));
            if(projects) {
                let skillName = skill.name;
                let url = `https://github.com/facuzarate04?tab=repositories&q=${skillName}&type=&language=&sort=`;
                window.open(url, '_blank');
            }
            
        }
    }
}
</script>