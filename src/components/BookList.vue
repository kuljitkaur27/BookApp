<template>
    <div> 
        <h1>BookList</h1>
        <div class="booklist">
            <b-card-group deck>
                <div v-for="book in books" :key="book.id">
                    <b-card 
                        title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </div>
            </b-card-group>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BookList',
      data(){
        return {
            books : [
                {id:'1', title:'Book1', image:'XXX'},
                {id:'2', title:'Book2', image:'XXX'},
                {id:'3', title:'Book3', image:'XXX'},
                {id:'4', title:'Book4', image:'XXX'}
            ]
          }
      },
    }
</script>

<style>
    .booklist{
        margin: 60px;
    }
</style>