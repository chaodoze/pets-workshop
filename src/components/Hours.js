import React from "react";
const Hours = () => {
    // add logic
    const shelterHours = [
        {day:"Monday", open:"10:00", close:"16:00"},
        {day:"Tuesday", open:"10:00", close:"16:00"},
        {day:"Wednesday", open:"10:00", close:"16:00"},
        {day:"Thursday", open:"10:00", close:"16:00"},
        {day:"Friday", open:"10:00", close:"16:00"},
        {day:"Saturday", open:"09:00", close:"20:00"},
        {day:"Sunday", open:"09:00", close:"20:00"},
    ];
    // get the long day name and store it in a variable named today
    const today = new Date().toLocaleDateString("en-US", {weekday:"long"});
    // get today's hours
    const todayHours = shelterHours.find((day) => day.day === today);
    // display today and the hours in a div with an id of hours
    return (
        <div id="hours">
            <h2>Today's Hours</h2>
            <h3>{today}'s hours are {todayHours.open} - {todayHours.close}</h3>
        </div>
    );
}

export default Hours;