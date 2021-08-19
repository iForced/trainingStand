import React, {useState} from "react";

type PropsType = {
    onChange: (value: boolean) => void
    defaultValue?: boolean
}

export function UncontrolledOnOff(props: PropsType) {

    let [on, setOn] = useState(props.defaultValue ? props.defaultValue : false)

    const onStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',
        display: 'inline-block'
    }
    const offStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red',
        display: 'inline-block',
        marginLeft: '10px'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        borderRadius: '15px',
        backgroundColor: on ? 'green' : 'red',
        display: 'inline-block',
        marginLeft: '20px'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle} />
        </div>
    )
}
