<template>
  <div id="index">
    <h1>This is {{ pageName }}</h1>
    <router-link :to="{name: 'other', params: {pageParam: '123'}}">click here to other page</router-link><br>
    <router-link :to="{name: 'storeTest'}">click here to store test page</router-link>
    <hello :fromPage="pageName"></hello>
  </div>
</template>

<script>
  import Hello from '@/components/Hello'
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        pageTitle: '首页',
        pageName: 'index page'
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
