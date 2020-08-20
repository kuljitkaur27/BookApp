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
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
</style>

