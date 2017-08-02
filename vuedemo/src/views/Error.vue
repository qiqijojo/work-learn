<template>
  <div id="index">
    <h1>404,page not found</h1>
    <router-link :to="{name: 'index'}">click here back to index</router-link>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        pageTitle: 'not found'
      }
    },
    created () {
      this.setPageTitle(this.pageTitle)
    },
    methods: {
      ...mapActions([
        'setPageTitle'
      ])
    }
  }
</script>
