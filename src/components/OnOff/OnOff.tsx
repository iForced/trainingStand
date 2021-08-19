import React from "react";

type OnOffPropsType = {
    on: boolean
    setOn: (value: boolean) => void
}

export function OnOff(props: OnOffPropsType) {
    const onStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white',
        display: 'inline-block'
    }
    const offStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red',
        display: 'inline-block',
        marginLeft: '10px'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        borderRadius: '15px',
        backgroundColor: props.on ? 'green' : 'red',
        display: 'inline-block',
        marginLeft: '20px'
    }
    return (
        <div>
            <div style={onStyle} onClick={() => props.setOn(true)}>On</div>
            <div style={offStyle} onClick={() => props.setOn(false)}>Off</div>
            <div style={indicatorStyle} />
        </div>
    )
}
