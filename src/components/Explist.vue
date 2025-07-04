<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Card from './Card.vue';
import Tag from 'primevue/tag';
import ProgressSpinner from 'primevue/progressspinner';

let isLoading = ref(true);
const experiences = ref([]);

const fetchExperiences = async () => {
    try {
        const response = await axios.get('https://my-json-server.typicode.com/cowball0905/json-server/db');
        console.log(response.data);
        experiences.value = response.data.experiences;
    } catch (error) {
        console.error(error);
        experiences.value = []; 
    } finally {
        isLoading.value = false;
    }
};

onMounted(fetchExperiences);

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    },
    showIntro:{
        type: Boolean,
        default: true
    }
});

</script>

<template>
    <div className="min-h-[800px] p-[5%] bg-[hsla(120,100%,50%,0.05)]">
        
        <div v-if="showIntro" className="min-h-[300px] flex flex-col items-center md:text-left text-center my-4">
            <h1 className="text-4xl text-black">Let me introduce myself</h1>
                <div className="p-[5%] flex flex-row justify-center">
                    <div className="text-gray-600 md:text-xl space-y-8 md:w-[60%] md:text-left text-center text-lg w-full">
                    <p>Hello I am Ken Wong from CityU!</p>
                    <p>I am passionate in Computer Science and I have learnt different aspects of skills such as <span className="text-green-600">Basic Python,C++,JAVA and React.js/Vue.js</span>.</p>
                    <p>My field of interest are developing new Websites. Also, I crave the opportunity to learn different areas of IT skills.</p>
                </div>
                <div className="w-[40%] justify-center md:flex hidden items-center">
                    <img src="../assets/pc-icon.png" className="w-[50%] hidden md:flex">
                </div>
            </div>

        </div>

        <div v-if="showIntro" className="min-h-[300px] flex flex-col md:text-left">
            <h1 className="text-4xl text-black">Skills</h1>
            <div className="flex flex-col p-[3%]">
                <div className="flex gap-2 my-2 flex-wrap">
                    <Tag severity="info" value="C++" rounded ></Tag>
                    <Tag severity="info" value="Python" rounded ></Tag>
                    <Tag severity="info" value="Java" rounded ></Tag>
                    <Tag severity="info" value="React.js" rounded ></Tag>
                    <Tag severity="info" value="Vue.js" rounded ></Tag>
                    <Tag severity="info" value="HTML/CSS/JavaScript" rounded ></Tag>
                    <Tag severity="info" value="Tailwind CSS" rounded ></Tag>
                    <Tag severity="info" value="Google Analytics Tools" rounded ></Tag>
                    <Tag severity="info" value="Cloudflare" rounded ></Tag>
                </div>
                <div className="flex gap-2 my-2 flex-wrap">
                    <Tag severity="warn" value="Teamwork & Collaboration" rounded ></Tag>
                    <Tag severity="warn" value="Fast Learner" rounded ></Tag>
                    <Tag severity="warn" value="Problem-Solving Aptitude" rounded ></Tag>
                    <Tag severity="warn" value="Time Management & Organization" rounded ></Tag>
                </div>
                <div className="flex gap-2 my-2 flex-wrap">
                    <Tag severity="secondary" value="Adobe PhotoShop" rounded ></Tag>
                    <Tag severity="secondary" value="Adobe Premiere Pro" rounded ></Tag>
                </div>      
            </div>
        </div>



        <div className=" flex md:items-center md:justify-between md:width-full flex-col items-start md:flex-row ">
            <h1>My Experience</h1>
            <RouterLink to="/experience" v-if="showButton" class="viewmore">
                    View More
            </RouterLink>
        </div>
        <div v-if="isLoading" className="flex justify-center items-center h-[200px] w-full">
            <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
        </div>

        <div v-else className="area-card">
        <div class="each-exp" v-for="experience in experiences.slice(0,limit || experiences.length)" :key="experience.id">
        <Card>
            <p v-if="experience.type=='intern'" class="intern">Intern</p>
            <p v-else-if="experience.type=='volunteer'" class="volunteer">Volunteer</p>
            <p v-else class ="project">Project</p>
            <p class="title">{{ experience.title }}</p><br>
            <p class="company">{{ experience.company }}</p><br>
            <p class="content">{{ experience.content }}</p> 

            <RouterLink class="readm" :to="'/experience/'+ experience.id">Read More</RouterLink>

        </Card>
        </div>
        <RouterLink to="/experience" v-if="showButton" class="viewmore1">
                View More
        </RouterLink>
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

    .viewmore:hover{
        background-color: gray;
    }
    .readm{
        padding: 5%;
        background-color: gold;
        text-align: center;
        margin-top:15%;
        border-radius: 5rem;
        display: flex;
        justify-content: center;
        width: 40%;
    }
    .readm:hover{
        background-color: rgb(171, 145, 0);
    }
    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        width: 100%;
    }
    .content{
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical;
    }
    .title{
        font-weight: bold;
        font-size: 1.5em;
    }
    .company{
        font-size: small;
        color: gray;
    }
    h1{
        font-size: 3em;
    }
    .each-exp {
        margin-bottom: 3rem;
        width:30%; 
    }
    .area-card {
        display: flex;
        flex-wrap: wrap;
        gap: 4%;
        padding: 3%;
    }
    .intern{
        font-weight: bold;
        display: flex;
        justify-content: center;
        padding: 1rem;
        background-color: greenyellow;
        color:black;
        border-radius: 10px;
        width:25%;
        margin:0% 0% 3% 0%;
        font-size: small ;
        text-align: center;
    }
    .volunteer{
        font-weight: bold;
        display: flex;
        justify-content: center;
        padding: 1rem;
        background-color: gold;
        color:black;
        border-radius: 10px;
        width:25%;
        margin:0% 0% 3% 0%;
        font-size: small ;
        text-align: center;
    }
    .project{
        font-weight: bold;
        display: flex;
        justify-content: center;
        padding: 1rem;
        background-color: rgb(0, 208, 255);
        color:black;
        border-radius: 10px;
        width:25%;
        margin:0% 0% 3% 0%;
        font-size: small ;
        text-align: center;
    }
    .viewmore {
        background-color: black;
        border-radius: 2em;
        color: white;
        text-align: center;
        padding: 1%;
        width:30%;
        cursor: pointer; 
    }
    .header-container {
        display: flex;
        align-items: center;
        justify-content: space-between; 
        width: 100%; 
    }
    .viewmore1{
        display: none;
    }
    @media (max-width:1200px) {
        .each-exp{
            width:90%;
        }
        .readm{
            width:40%;
            }
        h1{
            font-size: 2em;
        }
        .intern{
        font-weight: bold;
        padding: 1rem;
        background-color: greenyellow;
        color:black;
        border-radius: 10px;
        width:25%;
        margin:0% 0% 3% 0%;
        font-size: small ;
        }
        .volunteer{
            font-weight: bold;
            padding: 1rem;
            background-color: gold;
            color:black;
            border-radius: 10px;
            width:30%;
            margin:0% 0% 3% 0%;
            font-size: small ;
        }

        .viewmore {
            width: 100%; 
            margin-top: 1rem; 
            order:2;
        }
        .area-card{
            justify-content: center;
        }
        .readm {
            width: 60%; 
            padding: 0.7rem 1rem;  
            margin: 1rem auto;  
            font-size: 0.9rem; 
            margin-top: 2rem;
            min-width: 120px; 
            max-width: 200px; 
        }
        .viewmore1 {
            background-color: black;
            border-radius: 2em;
            color: white;
            text-align: center;
            padding: 3%;
            width:100%;
            cursor: pointer; 
            display: block;
        }
        .viewmore{
            display: none;
        }
    }
  </style>