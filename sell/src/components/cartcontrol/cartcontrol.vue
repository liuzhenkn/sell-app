<template>
    <div class="cartcontrol">
        <div class="cart-decrease" v-show="food.count>0" v-on:click.stop.prevent="decreaseCart">
            <span class="inner icon-remove_circle_outline"></span>
        </div>
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
      <div class="cart-increase icon-add_circle" v-on:click.stop.prevent="addCart"></div>
    </div>
</template>

<script type="text/ecamscript-6">
import Vue from 'vue';
export default {
  props: {
    food: {
      type: Object
    }
  },
  created() {
  },
  methods: {
    addCart(event) {
      if(!event._constructed){
        return;
      }
      if (!this.food.count) {
        Vue.set(this.food,'count',1);
      }else{
        this.food.count++;
      }
    },
    decreaseCart(event) {
      if(!event._constructed){
        return;
      }
      if (this.food.count>0) {
        this.food.count--;
      }
    }
  }
};
</script>

<style lang="stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      transition: all 0.4s inner
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0,160,220)
        transition: all 0.4s inner
        transform: rotate(0)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147,153,159)
    .cart-increase
      display: inline-block
      line-height: 24px
      padding: 6px
      font-size: 24px
      color: rgb(0,160,220)
</style>
