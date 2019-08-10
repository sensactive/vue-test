<template>
  <div class="hello">
    <div>
      <div v-if="selectedItemData">
        {{selectedItemData.runame}}
      </div>
      <div v-if="curItem">
        <select v-model="selectedItemName" v-on:change="getItemOkpd">
          <option v-for="item in curItem" v-bind:key="item.id">
            {{item.runame}}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
  import {Okpds2} from '../api/getListOkpd2'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        'okpds': null,
        'selectedItemData': null,
        'selectedItemName': null,
        'curItem': null,
      }
    },
    beforeMount() {
      Okpds2.list().then(response => {
        this.curItem = response;
      })
    },
    methods: {
      getItemOkpd() {
        for (let c of this.curItem){
          if (c.runame === this.selectedItemName){
            this.selectedItemId = c.id;
            this.selectedItemData = c;
          }
        }
        Okpds2.getItem(this.selectedItemId).then(response => {
          this.curItem = response.data;
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
