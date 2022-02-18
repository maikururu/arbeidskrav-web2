<template>
    <section>   
        <h3>{{ hobby }}</h3>
        <h4>Where can you do the hobby?<br> {{ where }}</h4>
        <h4 v-bind:class="[utstyr === 'Ja' ? 'trenger' : 'trenger-ikke']">Does it need equipment? <br>{{ utstyr }}</h4>
        <img :src="getImage()"> 
    </section>             
</template>

<script>



export default {
    props: {
        hobby: String,
        where: String,
        split: String,
        utstyr: String,
        image: String
    },
    setup(props){
        const getImage = () => {
            let image;

            try{
                image = require( `@/assets/images/${ props.image }` );
            }catch{
                image = require( `@/assets/images/no-image.jpg` );
            }
            return image
        }
        return { getImage }
    }
}
</script>