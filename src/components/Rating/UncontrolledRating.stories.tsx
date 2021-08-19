import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: 'Uncontrolled Rating',
    component: UncontrolledRating
}

export const ChangeOnOff = () => <UncontrolledRating defaultValue={1} />
