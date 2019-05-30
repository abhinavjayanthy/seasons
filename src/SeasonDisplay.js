/* eslint-disable */
import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer :{
        iconName:'sun',
        text:'Let\'s hit the beach'
    },
    winter :{
        iconName:'snowflake',
        text:'Burr, it is chilly'
    }
}


const getSeason = (lat,month) =>{
    if(month > 2 && month < 9 ){
        return lat > 0  ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.withLat,new Date().getMonth())
    return (
        <div className={`season-display ${season}`}>
            <i className = {`icon-left massive ${seasonConfig[season].iconName} icon`} />
            <h1>{seasonConfig[season].text}</h1>
            <i className = {`icon-right massive ${seasonConfig[season].iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;