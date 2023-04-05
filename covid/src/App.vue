<script setup>
import { Text } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

</script>

<template>
  <div>
    <div class="d-flex">

      <button v-bind:disabled="isDisabled" type="button" class="btn btn-success flex-grow-3"
        @click="create">CreateAndMove</button>
      <div class="form-group border flex-grow-1">
        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="TypeNewFolderName"
          v-model="inputValue">

      </div>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Num</th>
          <th>Name</th>
          <th>Path</th>
          <th>Operate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in g_payload" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.path.split(row.name).join("") }}</td>
          <td style="width: 0px"><button type="button" class="btn btn-danger"
              @click="DeleteElement(index)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      g_payload: [],
      inputValue: "",
      isDisabled: false,
      //rows:[{num:1,name:"sss",path:"/1"}]
    };
  },
  methods: {
    addRow() {
      this.g_payload.push(...[{ num: 1, name: "sss", path: "/s" }]);
      console.log(this.g_payload);
      //console.log(this.rows);
    },
    DeleteElement(index) {
      this.g_payload.splice(index, 1);
      //alert(index)
    },
    create() {

      if (this.inputValue == "") {
        this.inputValue = "新建文件夹";
      }
      let path = this.g_payload[0].path.split(this.g_payload[0].name).join(this.inputValue) + "\\";
      createFolder(path);
      for (let i = 0; i < this.g_payload.length; i++) {
        let current = this.g_payload[i].path;
        let target = path + this.g_payload[i].name;
        moveFile(current, target);
      };
      this.g_payload = [];
      this.isDisabled = true;
        //console.log(target)
      
    }
  },
  mounted() {
    utools.onPluginEnter(({ code, type, payload }) => {
      this.g_payload = payload;
      console.log(this.g_payload);
      //this.addRow();
    })
  },

  components: { Text }
}
</script>

<style>
header {
  display: flex;
  flex-direction: row;
  background-color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: rgb(0, 255, 42);
  font-weight: 600;
}

button {
  color: rgb(0, 4, 255);
  border-radius: 20px;
  background-color: rgb(136, 255, 0);
  cursor: pointer;
}

.border {
  border: 1px solid greenyellow;
  border-radius: 5px;
  padding: 5px;
}

table {
  border: 5px solid greenyellow;
  border-radius: 10px;
}

button[disabled] {
  color: #ddd;
  background-color: #f5f5f5;
}
</style>

