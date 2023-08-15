import React from "react";

import { useParams } from "react-router-dom";
import './PlaceForm.css';
import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE , VALIDATOR_MINLENGTH} from "../../shared/util/validators";
const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world!',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/375px-Empire_State_Building_%28aerial_view%29.jpg',
        address:'20 W 34th St., New York, NY 10001, United States',
        location:{
        lat: 40.748646,
        lng:-74.0681648
       },
       creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/375px-Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St., New York, NY 10001, United States',
        location:{
        lat: 40.748646,
        lng: -74.0681648
       },
       creator: 'u2'
    },
]


const UpdatePlace = () => {
    const placeId = useParams().placeId;

    useForm({
        
    })

    const identifiedPlace = DUMMY_PLACES.find( p => p.id === placeId);

    if(!identifiedPlace){
        return (
            <div className="center">
                <h2>Could not find a place!</h2>
            </div>
        );
    }
    return <form className="place-form">
        <Input 
        id="title" 
        element="input" 
        type="text" 
        label="Title" 
        validators={[VALIDATOR_REQUIRE()]}
        errorText = "Please enter a valid title."
        onInput= {() => {

        }}
        value={identifiedPlace.title}
        valid={true}
        />

<Input 
        id="description" 
        element="textarea" 
        //type="text" 
        label="Description" 
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText = "Please enter a valid description(at least 5 characters)."
        onInput= {() => {

        }}
        value={identifiedPlace.description}
        valid={true}
        />
        {/* <Input 
        id="Address" 
        element="input" 
        type="text" 
        label="Address" 
        validators={[VALIDATOR_REQUIRE]}
        errorText = "Please enter a valid address."
        onInput= {() => {

        }}
        value={identifiedPlace.title}
        valid={true}
        /> */}

        <Button type = "submit" disabled ={true}>
            UPDATE PLACE
        </Button>
    </form>
};

export default UpdatePlace;