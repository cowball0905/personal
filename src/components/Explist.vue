<script setup>
    import Card from './Card.vue';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
    import { ref, onMounted } from 'vue';
    import { db } from '../firebase';
    import { ref as dbRef, get, child,} from 'firebase/database';


    let isLoading = ref(true) ;
    const experiences = ref([]);

    const fetchExperiences = async () => {
    const dbReference = dbRef(db);
    try {
        console.log("Fetching data...");
        const snapshot = await get(child(dbReference, 'experiences'));
        console.log("Snapshot received:", snapshot);
        if (snapshot.exists()) {
        experiences.value = snapshot.val();
        console.log("Data loaded:", experiences.value);
        } else {
        console.log("No data available");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        isLoading.value = false;
    }
    };

    onMounted(fetchExperiences);





    defineProps({
        limit: Number,
        showButton:{
            type:Boolean,
            default:false
        },
    })
</script>


<template>
    <div class="Area">
        <div class="header-container">
            <h1>My Experience</h1>
        <RouterLink to="/experience" v-if="showButton" class="viewmore">
                View More
        </RouterLink>
        </div>

        <div v-if="isLoading" class="loading">
            <PulseLoader/>
        </div>

        <div v-else class="area-card">
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
        </div>

    </div>


</template>
  
  <style scoped>
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
    .Area{
        background-color: hsla(120, 100%, 50%, 0.05);
        padding:5%;
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
    @media (max-width:768px) {
        .each-exp{
            width:90%;
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
        .header-container {
        flex-direction: column; 
        align-items: flex-start; 
        }
        .viewmore {
            width: 100%; 
            margin-top: 1rem; 
            order:2;
        }
        .area-card{
            justify-content: center;
        }
    }
  </style>