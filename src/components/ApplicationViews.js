import React from "react"
import { Route } from "react-router-dom"
import {PortraitList} from "./portraits/PortraitList"
import {PetList} from "./pets/PetList"
import {PinstripeList} from "./pinstripes/PinstripeList"
import {CollageList} from "./collages/CollageList"
import { SinglePortrait } from "./portraits/SinglePortrait"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/portraits">
                <PortraitList />
            </Route>
            <Route path="/pets">
                <PetList />
            </Route>
            <Route path="/pinstripes">
                <PinstripeList />
            </Route>
            <Route path="/collages">
                <CollageList />
            </Route>
            <Route exact path="/portrait/:portraitId(\d+)">
                <SinglePortrait/>
            </Route>
        </>
    )
}