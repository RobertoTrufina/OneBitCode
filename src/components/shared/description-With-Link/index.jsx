import React from "react";


function DescritonWithLink(props) {


    if (props.link) {
        return (
            <>
                <p>{props.description}</p>
                <p><a href={props.link}>{props.link}</a></p>
            </>
        )
    } else {
        return (
            <>
                <p><u>{props.description}</u></p>
            </>
        )
    }
}

export default DescritonWithLink