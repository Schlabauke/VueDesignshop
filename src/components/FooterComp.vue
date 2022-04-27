<template>
<section>
<section class="footergrid">
    <article>
        <h2>The Design Shop</h2>
        <p>Carefully curated online design store</p>
        <p>founded and designed by Ruby Bacanovic.</p>
        <p></p> <!-- Newsletter-Funktion?!  -->
        <p></p>
    </article>
    <article>
        <h2>Contact</h2>
        <p><a href="mailto:super@super.de">Email us</a></p>
        <p>Work with us</p>
    </article>
    <article>
        <h2>Newsletter</h2>
        <p>Click here to <a href="">subscribe</a></p>
        <p><i>Don't worry. We hate spam too.</i></p>
    </article>
    <article>
        <h2>Find Us Here</h2>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
    </article>
</section>
<section>
    <p>&copy; 2019 The Design Shop</p>
    <p id="pTag"></p>
    <p>The DesignBlog</p>
</section>
</section>
</template>

<script>
export default {
    name:'FooterComp'
}

</script>
<style lang="sass">

.footergrid 
        margin: 0 auto
        display: flex
        justify-content: space-between
        margin: 5vh 5vw
        h2 
            font-size: 16px
            font-weight: 500
            margin-bottom: 2em
            text-align: left
        p 
            margin: 1em 0
        
        article 
            width:35vw
            margin: 2.5em 0
        
        article:nth-of-type(2)
            margin-left:2em
        
        article:nth-of-type(4)
            margin-left:5em
        
section 
    section:nth-of-type(2)
        display: flex
        margin: 5em 0 1em 5vw
        color: #848484   
    
</style>