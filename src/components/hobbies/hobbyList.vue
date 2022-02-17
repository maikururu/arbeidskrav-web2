<template>
    <section>
            <article class="row">
                <hobby-type 
                    class="col p-2 text-center" v-for="(hobby, i) in hobbies" :key="i" 
                    :hobby="hobby.hobby" 
                    :where="hobby.where" 
                    :utstyr="hobby.utstyr"
                    :image="hobby.image"> 
                </hobby-type>
            </article>       
    </section>
</template>

<script>

import hobbyServices from "../../services/hobbyServices"
import hobbyType from "./hobbyType.vue"



export default {
    setup(){
        const hobbies = hobbyServices.getAll();

        return { hobbies }
    },
    components: {
        hobbyType
    }
}
</script>
    
<style scoped>
    img{
        max-width:350px;
        max-height:350px;
    }
    h3{
        font-size: bold;
    }
</style>
