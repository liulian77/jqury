<template>
  <div class="bxtabbar">

    <router-link
    v-for='tab in tabs'
    :key="tab.path"
     class="bxtabbaritem"
     active-class='current'
     tag="li"
     :to="tab.path">
      <i v-html="tab.icon"></i>
      <span>{{tab.title}}</span>
    </router-link>

  </div>
</template>

<script>
export default {
  props: {
    tabs: Array
  }
}
</script>

<style lang='scss' scoped>
html{
font-size: 62.5%;
}
.bx {
  &tabbar {
    height: 5rem;
    display: flex;
    border: 1px solid #dedede;
    list-style: none;
    &item {
        &.current{
          background-color: #cccccc
        }
      flex: 1;
      text-align: center;
      & > span {
        display: block;
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
      &>i{
          font-family: 'bxfont';
          font-size:3rem;
          line-height: 3rem
      }
    }
  }
}
</style>
