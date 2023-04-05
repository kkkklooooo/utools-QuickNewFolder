<script setup>
import { Text } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(value, key) in jsonData[0]" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in jsonData" :key="rowIndex">
          <td v-for="(value, key) in row" :key="key">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const jsonData = [
  { name: "John", age: 25, country: "USA" },
  { name: "Jane", age: 32, country: "Canada" },
  { name: "Bob", age: 18, country: "Australia" },
  { name: "Alice", age: 40, country: "France" },
];
export default {
  data() {
    return {
      jsonData,
    };
  },
};
</script>

<style>
header {
  display: flex;
  flex-direction: row;
  background-color: black;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
h1{
  color: rgb(0, 255, 42);
  font-weight: 600;
}
button {
  color: rgb(0, 4, 255);
  border-radius: 20px;
  background-color: rgb(136, 255, 0);
  cursor: pointer;
}
tr{
  border: 10px;
  border-bottom: 100px solid #1900ff;
}
</style>
