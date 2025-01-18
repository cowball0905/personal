<script setup>
import { ref } from 'vue';

const name= ref('Ken');
const status= ref('false');

const tasks = ref(["a","b","c"]);
const newTask = ref('');

const togglestatus = () => {
        if(status.value=='true'){
          status.value = 'false';
        }else{
          status.value= 'true';
        }
      }


const addTask = () =>{
  if(newTask.value.trim() !== ''){
    tasks.value.push(newTask.value);
    newTask.value ='';
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index,1);
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status == 'true'">User is active</p>
  <p v-else>User is not active</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label><br>
    <input type="text" id="newTask" name="newTask" v-model="newTask"/><br>
    <button type="submit">submit</button>




  </form>


  <h1>Tasks:</h1>
  <ul>
    <li v-for="(task,index) in tasks" key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">DelTask</button>
    </li>
  </ul>
  <br>
  <button @click="togglestatus">Click ME!</button>

</template>

<style scoped>

</style>
