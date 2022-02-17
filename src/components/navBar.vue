<template>
    <section class="background-color">
        <section class="row d-flex justify-content-end">
            <div class="col">
                <img class="navImg " src="@/assets/logo.png" alt="no-image">
            </div>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>                    
        </section>
    </section>
    <router-view/>        
</template>

<style scoped>
    a {
            padding: 1rem;
            max-width: 8rem;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: black;       
        }
    
    a:hover {
        background-color: rgb(255, 171, 16);
    }

    .background-color {
        background-color: bisque; 
    }

    .navImg {
        max-width: 5.5rem;
        max-height: 3.5rem;
        padding-left: 0.5rem;
    }

</style>