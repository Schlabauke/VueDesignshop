<template>
    <section class="addProductForm">
            <h2>ADD A NEW PRODUCT</h2>
            <div class="headlineUnderline"></div>
            <form action="/addItem" method="post">
                <input type="text" name="ProductName"  placeholder="Product Name">
                <input type="text" name="ProductPic" placeholder="Product Picture URL">
                <input type="text" name="Company"  placeholder="Company Name">
                <input type="number" name="Price"  placeholder="Product Price">
                <input type="text" name="ProductLink"  placeholder="Link">
                <input type="submit" id="addProductButton" value="ADD PRODUCT">
            </form>
  </section>
</template>

<script>
export default {
  name: 'AddProduct',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.addProductForm 
    text-align: center
    margin: 3vh 0 8vh 0
    div 
        border-top: 3px solid black
        width: 150px
        margin: 0 auto
    
    form 
        margin: 8vh 0
        input 
            display: block 
            width: 100%
            height: 40p
            text-align: center
            margin: 2vh 0 
            border: none
            background-color: #E5E5E5
            border-radius: 5px
        
        #addProductButton 
            color: white
            font-weight: bold
            background-color: #323A45 
            &:hover 
                background-color: #E5E5E5
                color: black
            
  </style>
