import React from "react";
import DescritonWithLink from '../shared/description-With-Link';
import GrayImg from '../shared/gray-img/index';

const Planet = (props) => {

    let title
    if (props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>

    return (
        <div>
            {title}
            < DescritonWithLink
                description={props.description}
                link={props.link}
            />
            <GrayImg
                img_url={props.img_url}
                gray={props.gray}
            />
        </div >
    )
}

export default Planet