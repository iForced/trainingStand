import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
}

export const EnabledOnOff = () => <OnOff on={true} setOn={action('try to off')} />
export const DisabledOnOff = () => <OnOff on={false} setOn={action('try to on')} />
export const SwitchableOnOff = () => {
    const [on, setOn] = useState<boolean>(false)
    return <OnOff on={on} setOn={setOn} />
}
