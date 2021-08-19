import React, {useState} from "react";

type RatingType = 0 | 1 | 2 | 3 | 4 | 5
type PropsType = {
    defaultValue?: RatingType
}

export function UncontrolledRating(props: PropsType) {

    let [selected, setSelected] = useState<RatingType>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <Star selected={selected > 0} onClick={() => setSelected(1)}/>
            <Star selected={selected > 1} onClick={() => setSelected(2)}/>
            <Star selected={selected > 2} onClick={() => setSelected(3)}/>
            <Star selected={selected > 3} onClick={() => setSelected(4)}/>
            <Star selected={selected > 4} onClick={() => setSelected(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.onClick()}>{props.selected ? <b>Star </b> : 'Star '}</span>
}