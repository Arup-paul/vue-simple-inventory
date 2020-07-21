<template>
<ul class="list-group">
   <li class="list-group-item">
      <span class="item-name">Name</span>
     <span class="item-price float-right">Price</span>
  </li>
  <li v-for="(item,index) in items" :key="index" class="list-group-item">
     <span class="item-name">{{item.title}}</span>
     <button class="btn btn-danger btn-sm" @click="removeItem">-</button>
     <span class="item-price float-right">${{item.price}}</span>
  </li>
  <li class="list-group-item">
      <span class="item-name">Total</span>
     <span class="item-price float-right">$ {{totalPrice}}</span>
  </li>
    <li v-if="items.length > 0" class="list-group-item">
     <span @click="checkout" class="btn btn-block btn-success ">checkout</span>
  </li>

</ul>
</template>

<script>
export default {

  computed:{
    items(){
      return this.$store.getters.getCart
    },
    totalPrice() {
       var total =0
       this.items.forEach(item => {
           total += parseFloat(item.price)
       })
       return total.toFixed(2)
    }
  },
  methods:{
    removeItem(index){
      this.$store.dispatch('removeItem',index)
    },
    checkout(){
      if(confirm('Are you sure you want to cart')){
           this.$store.commit('clearCart')
      }
    }
  }
}
</script>


