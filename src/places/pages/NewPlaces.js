import React from "react";
import { useCallback , useReducer } from "react";
import './PlaceForm.css';
import Input from "../../shared/components/FormElements/input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

const NewPlaces = () => {

   const [formState , InputHandler] = useForm(
        {
            title:{
                value:'',
                isValid:false
            },
            description:{
                value:'',
                isValid:false
            },
            address:{
                value:'',
                isValid:false
            }
        },
        false
    );
   
   

    // const descriptionInputHandler = useCallback((id,value,isValid) =>{

    // }, []);

    const placeSubmitHandler = event => {
        event.preventDefault();

        console.log(formState.inputs);
    };


return <form className="place-form" onSubmit={placeSubmitHandler}>
    <Input 
    id="title" 
    element = "input" 
    type = "text" 
    label = "Title" 
    validators ={[VALIDATOR_REQUIRE()]} 
    errorText = "Please Enter a valid Title"
    onInput = {InputHandler}
    />

<Input 
    id="description"
    element = "textarea" 
   // type = "text" 
    label = "Description" 
    validators ={[VALIDATOR_MINLENGTH(5)]} 
    errorText = "Please Enter a valid description(at least 5 characters)"
    onInput = {InputHandler}
    />

<Input 
    id="address"
    element = "input" 
   // type = "text" 
    label = "Address" 
    validators ={[VALIDATOR_REQUIRE()]} 
    errorText = "Please Enter a valid Address"
    onInput = {InputHandler}
    />

{/* <Input 
    id="description"
    element = "textarea" 
   // type = "text" 
    label = "Description" 
    validators ={[VALIDATOR_MINLENGTH(5)]} 
    errorText = "Please Enter a valid description(at least 5 characters"
    onInput = {InputHandler}
    /> */}


    <Button type = "submit" disabled={!formState.isValid}>
        ADD PLACE
    </Button>
</form>;
};

export default NewPlaces;