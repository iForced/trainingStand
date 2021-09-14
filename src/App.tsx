import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {Accordion} from "./components/Accordion/Accordion";
import {RatingType, Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";
import {ReactMemoDemo} from "./components/ReactMemoDemo/ReactMemoDemo";
import {CounterUseMemo} from "./components/SelectUseMemo/CounterUseMemo";

export type SelectItemType = {
    title: string
    value: string
}

function App() {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [ratingValue, setRatingValue] = useState<RatingType>(0)
    const [on, setOn] = useState(false)

    const selectItems: Array<SelectItemType> = [
        {title: 'Minsk', value: '1'},
        {title: 'Moscow', value: '2'},
        {title: 'Kyiv', value: '3'},
        {title: 'Baranovichi', value: '4'},
    ]

    const [value, setValue] = useState<string>('1')

    const onSelect = (value: string) => {
        setValue(value)
    }

    return (
        <div>
            <>Uncontrolled</>
            <UncontrolledAccordion />
            <UncontrolledRating />
            <UncontrolledOnOff onChange={setOn} />
            {on.toString()}
            <div>=========================================================================================</div>
            <>Controlled</>
            <Accordion title={"Menu"} collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)} />
            <Rating ratingValue={ratingValue} setRatingValue={setRatingValue} />
            <OnOff on={on} setOn={setOn} />
            <Select items={selectItems} onSelect={onSelect} value={value}/>
            <div>==========================================================================================</div>
            <ReactMemoDemo />
            <div>==========================================================================================</div>
            <CounterUseMemo />
        </div>
    );
}

export default App;
