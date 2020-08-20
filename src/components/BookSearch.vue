<template>
  <div>
    <div class="loginButton">
      <b-button  variant="outline-info">Login to buy</b-button>
    </div>
    <h1>{{ msg }}</h1>
    <div class="search"> 
      <input placeholder="Search Book" />
      <b-button variant="outline-info">Search</b-button>
    </div>
    <div class="mainDiv">
      <div class="category" >
        <Categories />
      </div>  
      <div class="booklist">
        <BookList  />
      </div>
    </div>
  </div>
</template>

<script>
import Categories from './Categories'
import BookList from './BookList'
import axios from 'axios'

export default {
  name: 'BookSearch',
  // props: {
  //   books: []
  // },
  components: {
    Categories,
    BookList
  },
  created(){
        axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:horror').then(data=>{
            // console.log(data.items.volumeInfo.categories);
            console.log(data.items);
              // this.books = data.items
              // console.log(data)

          });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginButton{
  display: flex;
  flex-direction: row-reverse;
}
.search {
  padding-bottom: 20px;
}
.mainDiv {
    display: flex
}
.category {
  width: 150px;
  height: 400px;
  border: 1px solid #c3c3c3;
  flex: 1;
  margin: 5px
}
.booklist {
  width: 600px;
  height: auto;
  border: 1px solid #c3c3c3;
  flex: 2;
  margin: 5px
}

</style>
