<template>
    <header class="headerNav">
      <h1><router-link to='/'>THE DESIGN SHOP</router-link></h1>
    <article class="navLinks">
        <router-link to="/sale">Less than 30$</router-link>
        <router-link to="/additem">Add Product</router-link>
    </article>
    </header>
</template>


<script>
export default {
  name: 'HeaderNav'
}
</script>
<style lang="sass">

.headerNav 
    display: flex
    justify-content: space-between
    align-items: baseline 
    margin-right: 3em
   
    .navLinks 
        a 
            margin-left: 3vw
        



</style>