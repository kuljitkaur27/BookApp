<template>
  <div id="app">
    <BookSearch msg="Welcome to Book Search"/>
  </div>
</template>

<script>
import BookSearch from './components/BookSearch'

export default {
  name: 'App',
  components: {
    BookSearch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
