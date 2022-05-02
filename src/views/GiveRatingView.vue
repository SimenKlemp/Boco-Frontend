<template>
  <star-rating :increment="0.5" active-color="#FB8500" v-model:key="rating" />

</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: "GiveRatingView",

  components:{
  StarRating
  },
  data(){
    return{
      rating:0
    }
  },

}
</script>

<style scoped>

</style>