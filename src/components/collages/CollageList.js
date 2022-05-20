import React, { useEffect, useState } from "react"

import "./collagelist.css"


export const CollageList = () => {
    // declaring "collage" that defines state
    // declaring "showCollage" that defines function that will modify state/set value of collage
    // useState passes a value as argument and returns ARRAY WHEN INVOKED
    const [collage, showCollage] = useState([])





    useEffect(
        // *LISTENING FOR STATE CHANGES AND REACTS*
        // takes a function and array as arguments & runs code when state changes (event listener)
        () => {
            // Query string parameter
            fetch("http://localhost:8088/collages")
                // fetching data from the API and parsing into application state
                .then(res => res.json())

                // you have final array of works & worksMaterials defined in line 15
                .then(
                    (collage) => {
                        showCollage(collage)
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
                collage.map(
                    (displayCollage) => {

                        return <center>

                            <div key={`displayCollage --${displayCollage.id}`}>

                                <div className="gallery"> <img className="gallery" src={displayCollage.url} /></div>
                                  
                              





                                </div>



                         

                        </center>
                    }
                )


            }


        </>

    )
        }