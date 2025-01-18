<template>
  <div className="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  background-color: rgb(255, 251, 246);
  border-radius: 2rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2em;
  display: flex;
  flex-direction: column;
  width: 100%; 
  min-height: 100%;
}
</style>