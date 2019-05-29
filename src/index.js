import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    )
    // Cannot update the div here as this is a function based componet so should move to class based componets 
    return <div>Hi there!!</div>
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);  