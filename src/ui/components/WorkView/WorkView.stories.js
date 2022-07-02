import React from "react";
import { WorkView } from "./WorkView";
export default {
    title: 'ui/components/workview',
    component: WorkView,
    
}

const Template = args => <WorkView  {...args}/>
export const DefaultButton = Template.bind({});