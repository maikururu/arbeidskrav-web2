<template>
<br>
    <section class="mb-5 midtstill">
        <h3>Add a new hobby!</h3>
        <div class="mb-3">
            <label class="form-label">Name the hobby</label>
            <input class="form-control" v-model="hobby" type="text">
        </div>
        <div class="mb-3">
            <label class="form-label">Where can you do the hobby?</label>
            <input class="form-control" v-model="where" type="text">
        </div>
        <div class="mb-3">
            <label class="form-label">Do you need equipment?</label>
            <select v-model="utstyr">
                <option disabled value="">Fishing rod etc..</option>
                <option>Ja</option>
                <option>Nei</option>
            </select>
        </div>

        <input class="btn btn-secondary w-100" @click="addHobby" type="button" value="Legg til hobby">
    </section>
</template>

<script>
import { ref } from 'vue'
import hobbyService from '../../services/hobbyServices';
export default {
    setup(){
        const hobby = ref();
        const where = ref();
        const utstyr = ref();

        const addHobby = () => {

            const newHobby = {
                hobby: hobby.value,
                where: where.value,
                utstyr: utstyr.value
            };
            hobbyService.addHobby( newHobby );
        }

        return {
            hobby,
            where,
            utstyr,
            addHobby
        }
    }   
}
</script>