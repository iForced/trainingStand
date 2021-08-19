import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {RatingType, Rating} from "./Rating";

export default {
    title: 'Rating',
    component: Rating
}

export const Rating0 = () => <Rating ratingValue={0} setRatingValue={action('clicked')} />
export const Rating1 = () => <Rating ratingValue={1} setRatingValue={action('clicked')} />
export const Rating2 = () => <Rating ratingValue={2} setRatingValue={action('clicked')} />
export const Rating3 = () => <Rating ratingValue={3} setRatingValue={action('clicked')} />
export const Rating4 = () => <Rating ratingValue={4} setRatingValue={action('clicked')} />
export const Rating5 = () => <Rating ratingValue={5} setRatingValue={action('clicked')} />
export const ChangeRating = () => {
    const [value, setValue] = useState<RatingType>(0)
    return <Rating ratingValue={value} setRatingValue={setValue}/>
}
