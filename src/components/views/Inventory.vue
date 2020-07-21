<template>
<div v-if="!loading" class="row">

    <div v-for="(item,index) in items" :key="index" class="col-md-4" >
      <div class="card" style="width: 17rem;">
         <div>
            <router-link tag="div" :to="{path:'/item/'+ item.id}">
       <img :src="item.photo" alt="img">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">${{item.price}}</p>


          </div>
            </router-link>
          <a @click="addToCart(item)" class="btn btn-primary">+ Add</a>
      </div>
      </div>
    </div>

  </div>
    <h1 v-else>Loading..</h1>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return{
        loading:true,
       
      }

    },
    computed:{
       items(){
         return this.$store.getters.getInventory
       }
    },
    //props:['items'],
    mounted(){
        this.fetchInventory()
    },
    methods:{
      addToCart(item){
        this.$store.dispatch('addToCart',item)
      },
      fetchInventory(){
        var self =this
        axios.get('http://localhost:3000/items').then(response => {
          
             self.$store.commit('setInventory',response.data)
             self.loading = false


        })
      }
    }
  }
</script>
