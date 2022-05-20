import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./singlePortrait.css"



export const SinglePortrait = () => {
    // declaring "portrait" that defines state
    // declaring "showPortrait" that defines function that will modify state/set value of portraits
    // useState passes a value as argument and returns ARRAY WHEN INVOKED
    const [portrait, showPortrait] = useState([])
    const { portraitId } = useParams()  // Variable storing the route parameter





    // *LISTENING FOR STATE CHANGES AND REACTS*
    // takes a function and array as arguments & runs code when state changes (event listener)
    // Fetch the individual booking when the parameter value changes
    useEffect(
        () => {
            fetch(`http://localhost:8088/portraits/${portraitId}`)
                // fetching data from the API and parsing into application state
                .then(res => res.json())
                // setting booking state
                .then(showPortrait)
        },
        [portraitId]  // Above function runs when the value of bookingId changes
    )



    return (
        <><center>

            <div class="singlePortfolio">
             

                  <img className="singlePhoto" src={portrait.url} /> </div>
           

                <div className="portInfo">

                    <div>Title: {portrait.name}</div>

                    <div>Description: {portrait.description}</div>
                    <div> Medium: {portrait.medium}</div>





                </div>

       
        </center>
        </>

    )
}


