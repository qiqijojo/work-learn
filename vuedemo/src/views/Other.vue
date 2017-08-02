<template>
  <div id="ot">
    <h1>This is {{ pageName }}，it's url param is {{ pageParam }}</h1>
    <input v-model="inputValue">
    <p>{{ inputValue }}</p>
    <h1 @click="isShow = !isShow">点击显示消失</h1><span v-if="isShow">内容</span>
    <router-link :to="{name: 'index'}">click here to index page</router-link>
    <hello :fromPage="pageName"></hello>
  </div>
</template>

<script>
  import Hello from '@/components/Hello'
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        pageTitle: '其他',
        inputValue: '',
        isShow: true,
        pageName: 'other page',
        pageParam: this.$route.params.pageParam
      }
    },
    created () {
      this.setPageTitle(this.pageTitle)
    },
    components: {
      Hello
    },
    methods: {
      ...mapActions([
        'setPageTitle'
      ])
    }
  }
</script>
