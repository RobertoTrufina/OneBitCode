import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DescritonWithLink from '../shared/description-With-Link';
import GrayImg from '../shared/gray-img/index';
import Form2 from './../planets/form/index';


async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}

const Planet = () => {
    const [satellites, setSatellites] = useState([])
    const [planet, setPlanet] = useState({})
    let { id } = useParams()
    let navigate = useNavigate();

    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites'])
            getPlanet(data['data'])
        })
    }, [])

    const goToPLanet = () => {
        navigate.push('/')
    }

    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite])
    }

    let title
    if (planet.title_with_underline)
        title = <h4><u>{planet.name}</u></h4>
    else
        title = <h4>{planet.name}</h4>

    return (
        <div>
            {title}
            < DescritonWithLink
                description={planet.description}
                link={planet.link}
            />
            <GrayImg
                img_url={planet.img_url}
                gray={planet.gray}
            />
            <h4>Satélites</h4>
            <hr />
            <Form2 addSatellite={addSatellite} />
            <hr />
            <ul>
                {satellites.map((satellite, index) =>
                    <li key={index}>{satellite.name}</li>
                )}
            </ul>
            <hr />
            <button type="button" onClick={goToPLanet}>Voltar a listagem</button>
        </div >
    )
}

export default Planet