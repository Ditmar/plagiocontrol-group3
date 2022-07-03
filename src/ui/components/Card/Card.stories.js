import React from "react";
import { Cards } from "./Cards";
export default {
    title: 'ui/components/card',
    component: Cards,
}
const Template = args => <Cards  {...args}/>
export const Card = Template.bind({});