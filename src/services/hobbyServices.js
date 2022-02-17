import {ref} from "vue" 

const hobbyService = (function(){

    const hobbies = ref([
        { hobby: "Climbing", where: "In the mountains", utstyr: "Yes", image: "climbing.jpg"},
        { hobby: "Hiking", where: "Outside", utstyr: "No", image: "hiking.jpg"},
        { hobby: "Gaming", where: "At home", utstyr: "Yes", image: "gaming.jpg"},
        { hobby: "Fishing", where: "By the lake", utstyr: "Yes", image: "fishing.jpg"}
    ]);

    const getAll = () => {
        return hobbies;
    }

    const addHobby
     = ( newHobby ) => {
        hobbies.value.push( newHobby );
    }

    return { 
        getAll,
        addHobby

     }

} () );

export default hobbyService;