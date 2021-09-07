import React, {useReducer} from 'react';
import s from './Select.module.css'
import {SelectItemType} from "../../App";
import {selectReducer, TOGGLE_OPENED} from "./SelectReducer";

type SelectPropsType = {
    items: Array<SelectItemType>
    onSelect: (value: string) => void
    value: string
}

export function Select(props: SelectPropsType) {
    const [opened, dispatch] = useReducer(selectReducer, {isOpened: false})
    const onCLickHandler = () => {
        dispatch({type: TOGGLE_OPENED})
    }

    const selectedItem = props.items.find(item => item.value === props.value)
    const itemsList = props.items.map(item => {
        const onSelectHandler = () => {
            if (item.value !== props.value) {
                props.onSelect(item.value)
                onCLickHandler()
            }
        }
        return <div
            key={item.value}
            onClick={onSelectHandler}
            className={s.item + ' ' + (item.value === props.value && s.disabled)}>
            {item.title}
        </div>
    })

    return (
        <div className={s.select}>
            <h3
                className={s.title}
                onClick={onCLickHandler}>
                {selectedItem && selectedItem.title}
            </h3>
            <div className={`${s.items} ${!opened.isOpened && s.hide}`}>
                {itemsList}
            </div>
        </div>
    );
}
