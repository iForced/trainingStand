import React, {useState} from "react";

export function UncontrolledAccordion() {
        let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={'Menu'} setCollapsed={setCollapsed} collapsed={collapsed} />
            {!collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h3>
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
