<template>
  <div>
    <input type="text" v-model="search">

    <ul>
      <li v-for="user in filteredUsers" :key="user.name">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup>
const users = [{name:'Anton'}, {name:'Ivan'}, {name:'Olga'}];


const search = ref('');


const filteredUsers = computed(()=>{
  const newList =  users.filter(user => user.name.toLowerCase().includes(search.value.toLowerCase()));
  return newList;
})



























</script>

<style lang="scss" scoped>

</style>