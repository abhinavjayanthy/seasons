import React from 'react';
import ReactDOM from 'react-dom';


// Below is function based component 
// const App = () => {

//     // Cannot update the div here with the location as this is a function based componet so should move to class based componets 
//     return <div>Hi there!!</div>
// };


//Below is a class based component 
class App extends React.Component {
    render () {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        )
        return <div> Lattitude : </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);  