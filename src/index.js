import React from 'react';
import ReactDOM from 'react-dom';


// Below is function based component 
// const App = () => {

//     // Cannot update the div here with the location as this is a function based componet so should move to class based componets 
//     return <div>Hi there!!</div>
// };


//Below is a class based component 
class App extends React.Component {
    constructor(props){
        super(props);
        // THIS IS THE ONLY TIME WE DO THAT IS WHEN WE INITALIZE THE STATE
        this.state = {lat:null};
        window.navigator.geolocation.getCurrentPosition(
            (position) =>{
                console.log(position)
                this.setState({lat : position.coords.latitude})
                // DO NOT DO :
                // this.state.lat = position.coords.latitude
            },
            (err) => console.log(err)
        )
    }
    //Have to define a render method 
    render () {
        return <div> Lattitude : { this.state.lat }</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);  