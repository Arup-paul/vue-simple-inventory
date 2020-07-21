<template>
 <div v-if="item" class="row">
   <div class="col-md-6">
     <img :src="item.photo" alt="photo">
   </div>
   <div class="col-md-6">
       <h4>{{item.title}}</h4>
       <p>{{item.description}}</p>
       <p>${{item.price}}</p>
       <a @click="addToCart(item)" class="btn btn-primary">+ Add</a>
   </div>
 </div>
 <h3 v-else>Loading</h3>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      item:[]
    }
  },
  mounted(){
        this.fetchData()
    },
  methods:{
    fetchData(){
      var self =this
        axios.get('http://localhost:3000/item/'+this.$route.params.id).then(response => {
             self.item= response.data


        })
    },
    addToCart(item){
        this.$store.commit('addToCart',item)
    }
  }
}
</script>
