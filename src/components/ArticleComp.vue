<template>
<div class="productOverview">
   <section v-for="items in shopitems" :key="items.id" > 
       <img :src="items.ProductLink" alt="Company">
        <article>
                <div>
                    <h3> {{ items.ProductName }}</h3>
                    <h3> {{ items.Price }} </h3>
                </div>
                <h3> {{ items.Company }}</h3>
            </article>
    </section> 
</div>
</template>
<script>
import axios from 'axios';

export default  {
            name: 'ArticleComp',
            data() {
                return {
                    shopitems: []
                }
            },
            created(){
                axios.get('/items').then(response => {
                    console.log(response)
                    this.shopitems = response.data
                })
                
            
            }
    }
</script>
<style lang="sass" scoped>
.productOverview 
    display: grid
    grid-template-columns: repeat(3, 1fr)
    gap: 15px
    section:nth-of-type(7n+1)
        grid-column: 1/4
    img 
        width: 100%
    
    article 
        display: flex
        justify-content: space-between
        align-items: flex-start
        padding: 5px 0
        p 
            color: grey
</style>