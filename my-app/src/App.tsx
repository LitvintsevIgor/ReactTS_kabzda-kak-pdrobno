import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/UncontrolledRating/Rating";

function App() {
    console.log("App rendering");

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    return (
        <div className={"app"}>
            {/*<Accordion titleValue={"Menu"} collapsed={true} />*/}
            {/*<Accordion titleValue={"Users"} collapsed={true} />*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff />*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
            <UncontrolledRating />
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle (props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{ props.title }</h1>
    )
}


export default App;
