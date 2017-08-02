<template>
    <div id="store">
        <h1>This is {{ pageName }}</h1>
        <router-link :to="{name: 'index'}">click here to index page</router-link>
        <p>Now UserName : {{ userName }}</p>
        <p>Now showCode : {{ showCode }}</p>
        <p>Who change showCode : {{ changeCodeUserName }}</p>
        <button v-on:click="changeShowCodeMethod(1)">clickBtn1 {{ num1 }}</button>
        <button v-on:click="changeShowCodeMethod(2)">clickBtn2 {{ num2 }}</button>
    </div>
</template>

<script>
import storeTest from '@/js/storeTest.js'
export default {
  ...storeTest
}
</script>
