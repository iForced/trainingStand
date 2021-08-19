import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {Accordion} from "./components/Accordion/Accordion";
import {RatingType, Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";


function App() {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [ratingValue, setRatingValue] = useState<RatingType>(0)
    const [on, setOn] = useState(false)

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
        </div>
    );
}

export default App;
