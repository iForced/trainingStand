import React, {useReducer} from "react";
import {ActionType, reducer, StateType, TOGGLE_COLLAPSED} from "./UncAccordionReducer";

export function UncontrolledAccordion() {
    const [collapsed, dispatch] = useReducer(reducer, {isCollapsed: false})

    return (
        <div>
            <AccordionTitle title={'Menu'} onClick={dispatch} collapsed={collapsed}/>
            {!collapsed.isCollapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: (action: ActionType) => void
    collapsed: StateType
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onClick({type: TOGGLE_COLLAPSED})}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
