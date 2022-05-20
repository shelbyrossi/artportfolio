import React, { useEffect, useState } from "react"
import "./pinstripe.css"


export const PinstripeList = () => {
    // declaring "pinstripes" that defines state
    // declaring "showPinstripe" that defines function that will modify state/set value of pinstripes
    // useState passes a value as argument and returns ARRAY WHEN INVOKED
    const [pinstripes, showPinstripe] = useState ([])
   



    useEffect(
        // *LISTENING FOR STATE CHANGES AND REACTS*
        // takes a function and array as arguments & runs code when state changes (event listener)
        () => {
            // Query string parameter
            fetch("http://localhost:8088/pinstripes")
                // fetching data from the API and parsing into application state
                .then(res => res.json())

                // you have final array of works & worksMaterials defined in line 15
                .then(
                    (pinstripe) => {
                        showPinstripe(pinstripe)
                    }
                )
        },
        // leave DEPENDENCY ARRAY empty, or infinite loop
        []
    )

       
    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>



            <center> <div className="pinstripeTitle"></div> </center>
            {
                pinstripes.map(
                    (displayPinstripe) => {
                        
                        return <center>
                            
                            <div className ="pinstripe"><div key={`displayPinstripe-${displayPinstripe.id}`}>
                              
                                <img className ="pinstripePhoto" src={displayPinstripe.url} />
                                <div className="pinstripeInfo">
                               
                                    <div> Name: {displayPinstripe.name}</div>
                              
                                    <div>Description: {displayPinstripe.description}</div>
                                    
                                  
                                   


                                </div>



                            </div>
                            </div>
                        </center>
                    }
                )


            }


        </>
    )
}