<script setup>
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
    import {onMounted} from 'vue';
    import BackButton from '@/components/BackButton.vue';
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    import axios from 'axios';

    const isLoading = ref(true);
    const experiences = ref({});
    const route = useRoute();

    const experienceid = route.params.id;


    const fetchExperience = async () => {
        try {
            const response = await axios.get(`https://my-json-server.typicode.com/cowball0905/json-server/experiences/${experienceid}`);
            console.log(response.data);
            experiences.value = response.data || {}; 
        } catch (error) {
            console.error(error);
            experiences.value = {};  
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(fetchExperience);
</script>

<template>
        <div v-if="isLoading" class="exp-area2">
            <BackButton/>
            <PulseLoader class="loadback"/>
        </div>

        <div v-else class="exp-area">
            <BackButton/>
            <div class="exp-basic">
                <p class="type">{{experiences.type}}</p>
                <p class="title">{{experiences.title}}</p>
                <p class="company" v-if="experiences.company">{{experiences.company}}</p>
                <p v-else>-</p>
            </div>
            <div class="exp-adv">
                <div class="exp-desc">
                    <h1>Description</h1>
                    <p class="content">{{experiences.content}}</p>
                    <h1>Duration</h1>
                    <p>{{experiences.duration}}</p>
                </div>
                <div class="exp-org">
                    <h1>Company/Organization Info</h1>
                    <p v-if="experiences.companydesc" class="desc">{{experiences.companydesc}}</p>
                    <p v-else class="desc">-</p>
                    <h1>Company/Organization Website</h1>
                    <a :href="experiences.web" v-if="experiences.web">{{experiences.web}}</a>
                    <p v-else>-</p>
                </div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
            </div>



        </div>
</template>


<style scoped>
    .cube {
        position: absolute;
        top: 80vh;
        left: 45vw;
        width: 10px;
        height: 10px;
        transform-origin: top left;
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        animation: cube 6s ease-in forwards infinite;
        z-index: -1;
        background-color: #6f8ac084;
        border-radius: 1px;
    }


    .cube:nth-child(2) {
        animation-delay: 2s;
        right: 3vw;    
        top: 40vh;
    }

    .cube:nth-child(3) {
        animation-delay: 4s;
        left: 75vw;
        top: 50vh;
    }

    .cube:nth-child(4) {
        animation-delay: 1s;
        left: 90vw;
        top: 10vh;
    }

    .cube:nth-child(5) {
        animation-delay: 3s;
        left: 10vw;
        top: 85vh;
    }


    .cube:nth-child(10) {
        animation-delay: 2s;  
        left: 90vw;
        top: 30vh;
    }

    .cube:nth-child(11) {
        animation-delay: 1.5s;  
        right: 0vw;
        bottom: 30vh;
    }

    @keyframes cube {
        from {
            transform: scale(0) rotate(0deg) translate(-50%, -50%);   
            opacity: 0.3;
        }
        to {
            transform: scale(20) rotate(960deg) translate(-50%, 0%); 
            opacity: 0;
        }
    }
    .loadback{
        align-self:center;
    }
    .exp-area{
        background-color: hsla(120, 100%, 50%, 0.05);
        min-height: 800px;
    }
    .exp-area2{
        background-color: hsla(120, 100%, 50%, 0.05);
        min-height: 800px;
        padding: 3%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
    .desc {
        margin-bottom: 2rem;
        line-height: 1.6;
    }
    .exp-area {
        padding: 3%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 0 auto;
    }

    .exp-basic {
        background-color: rgb(255, 251, 246);
        border-radius: 1rem;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        padding: 2em;
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 2rem;
    }

    .exp-adv {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 2rem;
    }

    .exp-desc, .exp-org {
        background-color: rgb(255, 251, 246);
        border-radius: 1rem;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        padding: 2em;
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 30em;
    }

    h1 {
        color: gold;
        font-weight: bold;
        font-size: 1.3em;
        margin-bottom: 1em;
    }

    .company {
        color: green;
        margin-top: 0.5rem;
    }

    .type {
        color: gray;
        font-size: 0.9em;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
    }

    .title {
        font-weight: bold;
        font-size: 2em;
        line-height: 1.2;
        margin-bottom: 0.5rem;
    }

    .content {
        margin-bottom: 2rem;
        line-height: 1.6;
    }

    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        width: 100%;
    }

    @media (max-width: 768px) {
        .exp-adv {
            flex-direction: column;
        }

        .exp-desc, .exp-org {
            width: 100%;
            min-height: auto;
        }

        .title {
            font-size: 1.5em;
        }

        h1 {
            font-size: 1.2em;
        }
        .exp-area2{
            background-color: hsla(120, 100%, 50%, 0.05);
            min-height: 800px;
            padding: 3%;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
        }
    }

    @media (max-width: 480px) {
        .exp-area {
            padding: 1rem;
        }

        .exp-basic, .exp-desc, .exp-org {
            padding: 1.5em;
            border-radius: 0.5rem;
        }

        .title {
            font-size: 1.3em;
        }

        .type, .company {
            font-size: 0.8em;
        }

        h1 {
            font-size: 1.1em;
        }

        .content {
            font-size: 0.9em;
        }
    }
</style>