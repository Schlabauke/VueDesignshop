<template>
    <section class="addProductForm">
        <h2>ADD A NEW PRODUCT</h2>
        <div class="headlineUnderline"></div>
        <form action="/addItem" method="post">
            <input
                type="text"
                v-model="ProductName"
                name="ProductName"
                placeholder="Product Name"
            />
            <input
                type="text"
                v-model="ProductPic"
                name="ProductPic"
                placeholder="Product Picture URL"
            />
            <input
                type="text"
                v-model="Company"
                name="Company"
                placeholder="Company Name"
            />
            <input
                type="number"
                v-model="Price"
                name="Price"
                placeholder="Product Price"
            />
            <input
                type="text"
                v-model="ProductLink"
                name="ProductLink"
                placeholder="Link"
            />
            <input
                type="submit"
                @click="submit"
                id="addProductButton"
                value="ADD PRODUCT"
            />
        </form>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AddProduct',

    methods: {
        addProduct() {
            console.log('Push the button');
            axios
                .post('/addItem', {
                    ProductName: this.ProductName,
                    ProductLink: this.ProductLink,
                    Company: this.Company,
                    ProductPic: this.ProductPic,
                    Price: this.Price,
                })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
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
