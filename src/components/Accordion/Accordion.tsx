import React from "react";

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: () => void
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={'Menu'}
                setCollapsed={props.setCollapsed}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
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
