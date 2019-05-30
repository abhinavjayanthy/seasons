/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

// Below is function based component 
// const App = () => {

//     // Cannot update the div here with the location as this is a function based componet so should move to class based componets 
//     return <div>Hi there!!</div>
// };


//Below is a class based component 
class App extends React.Component {
    // Do not do data loading in a contructor for more clear code 
    constructor(props){
        super(props);
        // Not best practise 
        // this.state = {lat:null, errorMessage : ''};
    }

    //Same as writing in construtor babel will do the constructor initiliazing  
    state = {
        lat: null, 
        errorMessage : ''
    }
    // Beast practise 
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) =>this.setState({lat : position.coords.latitude}),
                // DO NOT DO :
                // this.state.lat = position.coords.latitude,
            (err) => this.setState({errorMessage : err.message})
        )
    }
    //Have to define a render method its only about returing jsx nothing else 
    render () {
        if(this.state.errorMessage  && !this.state.lat){
            return <div>Error : { this.state.errorMessage }</div>
        }else if (!this.state.errorMessage  && this.state.lat){
            // State is going as a prop here 
            return <SeasonDisplay withLat = {this.state.lat}/>
        }
        return <i class="massive spinner loading icon"></i>
        
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);  