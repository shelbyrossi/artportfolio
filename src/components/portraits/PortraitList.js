import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./portraitList.css"
import { Link } from "react-router-dom"


export const PortraitList = () => {
    // declaring "portraits" that defines state
    // declaring "updateportrait" that defines function that will modify state/set value of portraits
    // useState passes a value as argument and returnes ARRAY WHEN INVOKED
    const [portraits, showPortrait] = useState([])
    const { portraitId } = useParams()  // Variable storing the route parameter




    useEffect(
        // *LISTENING FOR STATE CHANGES AND REACTS*
        // takes a function and array as arguments & runs code when state changes (event listener)
        () => {
            // Query string parameter
            fetch("http://localhost:8088/portraits")
                // fetching data from the API and parsing into application state
                .then(res => res.json())

                // you have final array of works & worksMaterials defined in line 15
                .then(
                    (portrait) => {
                        showPortrait(portrait)
                    }
                )
        },
        // leave DEPENDANCY ARRAY empty, or infinite loop
        []
    )


    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>



            <center> <div className="portraitTitle"></div> </center>
            {
                portraits.map(
                    (displayPortrait) => {

                        return <center>

                            <div className="gallery"><div key={`displayPortrait-${displayPortrait.id}`}>
                            <Link to={`/portrait/${displayPortrait.id}`}>
                                <img className="portraitPhoto" src={displayPortrait.url} /></Link>
                           



                            </div>
                            </div>
                        </center>
                    }
                )


            }


        </>
    )
}