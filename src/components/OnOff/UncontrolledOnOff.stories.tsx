import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'Uncontrolled OnOff',
    component: UncontrolledOnOff
}

export const ChangeOn = () => <UncontrolledOnOff  onChange={action('lol')} defaultValue={true}/>
export const ChangeOff = () => <UncontrolledOnOff  onChange={action('lol')} defaultValue={false}/>
