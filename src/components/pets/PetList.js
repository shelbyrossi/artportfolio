import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./petList.css"


export const PetList = () => {
    // declaring "pets" that defines state
    // declaring "showPet" that defines function that will modify state/set value of pets
    // useState passes a value as argument and returns ARRAY WHEN INVOKED
    const [pets, showPet] = useState([])





    useEffect(
        // *LISTENING FOR STATE CHANGES AND REACTS*
        // takes a function and array as arguments & runs code when state changes (event listener)
        () => {
            // Query string parameter
            fetch("http://localhost:8088/pets")
                // fetching data from the API and parsing into application state
                .then(res => res.json())

                // you have final array of works & worksMaterials defined in line 15
                .then(
                    (pet) => {
                        showPet(pet)
                    }
                )
        },
        // leave DEPENDENCY ARRAY empty, or infinite loop
        []
    )


    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>



            <center> <div className="petTitle"></div> </center>
            {
                pets.map(
                    (displayPets) => {

                        return <center>

                            <div key={`displayPortrait-${displayPets.id}`}>

                                <div className="gallery"><img className="petPhoto" src={displayPets.url} /></div>
                                  
                               




                                </div>



                         

                        </center>
                    }
                )


            }


        </>
    )
}