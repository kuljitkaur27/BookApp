<template>
    <div> 
        <h1>Categories</h1>
        <ul>
            <li class="bookCategories" v-for="item in bookCategories" v-bind:key="item.key" @click="fetch">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Categories",
    data() {
        return {
            bookCategories: {
                all: 'All',
                Action: 'Action and Adventure',
                classics: 'Classics',
                comic: 'Comic Book',
                detective: 'Detective and Mystery',
                fantasy: 'Fantasy',
                fiction: 'Fiction',
                horror: 'Horror'
            },
            books: []
        }
    },
    created(){
        axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:horror').then(data=>{
            // console.log(data.items.volumeInfo.categories);
            // console.log(data.items[0].volumeInfo.imageLinks.thumbnail);
              this.books = data.items

          });
    },
    methods: {
            fetch(){
                console.log('hello');
                console.log(this.books);
            }

        }
}
</script>

<style scoped>
.bookCategories {
    text-align: left;
    padding: 2px
}
</style>