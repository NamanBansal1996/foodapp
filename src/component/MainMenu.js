import React from "react";
import Category from "./Category";

export default function MainMenu() {
    const menu = [
        {
            title: "chinese combo",
            items: [{ 
                name: "manchurain with rice", price: 24
            }, { 
                name: "manchurain with hakka noodles", price: 34
            }, { 
                name: "cheese chilly with hakka noodles", price: 34
            }, { 
                name: "cheese chilly with rice", price: 34
            }]
        }, {
            title:"salads",
            items:[{
                name: "fruit salad", price: 34
            }, {
                name: "veg salad"
            }, {
                name: "protein salad"
            }, {
                name: "carbs salad" 
            }]
        }, {
            title:"Starter",
            items:[{
                name: "spring roll"
            }, {
                name: "hakka Noodles"
            }, {
                name: "Chomein"
            }, {
                name: "singapuri noodles" 
            }]
        },{
            title:"Shakes",
            items:[{
                name: "mango shake"
            }, {
                name: "strawberry shake"
            }, {
                name: "oreo shake"
            }, {
                name: "kitkat shake" 
            }]
        }
    ]

    return (
        <div className="col-md-6">
            { menu.map(category =><Category categoryDetails={category}/>)}
        </div>
    ) 
}

