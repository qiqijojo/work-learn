<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This components is in {{ fromPage }}</h2>
    <p>store state</p>
    <p>userName: {{ userName }}</p>
    <p>showCode: {{ showCode }}</p>
    <p>changeCodeUserName: {{ changeCodeUserName }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['fromPage'],
  data () {
    return {
      msg: 'This is hello components '
    }
  },
  computed: {
    ...mapGetters({
      userName: 'getUserName',
      showCode: 'getShowCode',
      changeCodeUserName: 'getChangeCodeUserName'
    })
  }
}
</script>
<style>
  .hello{
    border: 5px solid #666;
  }
</style>
