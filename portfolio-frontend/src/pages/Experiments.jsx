import React from "react";
import Card from "../components/card";
import ColorAverage from "../experiment-components/ColorAverage";
import PokemonApi from "../experiment-components/PokemonApi";
import Video from "../components/video";
import InfoHover from "../components/infoHover";

export default function Experiments(){
    return(
        <>
            <Card
            cardText={"This page is dedicated to simple ideas I had for coding projects to gain more experience. Enjoy!"}
            />
            <Card
                infoHover={<InfoHover text="Info HOVER" />}
            >
                <PokemonApi/>
            </Card>

            {/* <ColorAverage/> */}
            {/* <Video/> */}
        </>
        
        


    )

}