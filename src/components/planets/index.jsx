import React, { useEffect, useState } from "react";
import Form from "../planet/form";
import Planet from "./planet";


async function getPLanets() {
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data
}

const Planets = () => {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPLanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])

    const addPLanet = (new_planet) => {
        setPlanets([...planets, new_planet])
    }

    return (
        <>
            <h3>PLanets List</h3>
            <hr />
            <Form addPLanet={addPLanet} />
            <hr />
            {planets.map((planet, index) =>
                <Planet
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                    key={index}
                />
            )}

        </>
    )
}


export default Planets