import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Meta, Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion
} as Meta

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const CollapsedAccordion = () => Template.bind({})
CollapsedAccordion.args = {
    title: 'Menu',
    collapsed: true,
    setCollapsed: action('try to unCollapse'),
    alo: 1
}
// export const UnCollapsedAccordion = () => Template.bind({})
// UnCollapsedAccordion.args = {
//     title: 'Menu',
//     collapsed: false,
//     setCollapsed: action('try to collapse')
// }

// export const CollapsedAccordion = () => <Accordion title={"Menu"} collapsed={true} setCollapsed={action('try to unCollapse')} />
// export const UnCollapsedAccordion = () => <Accordion title={"Menu"} collapsed={false} setCollapsed={action('try to collapse')} />
// export const ControlledAccordion = () => {
//     const [collapsed, setCollapsed] = useState<boolean>(true)
//
//     return <Accordion title={"Menu"} collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)} />
// }


