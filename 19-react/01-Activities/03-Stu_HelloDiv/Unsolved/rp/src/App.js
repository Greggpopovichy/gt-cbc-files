import React from "react";
import HelloDiv from "./components/HelloDiv";

export class App extends React.Component{

    render(){
        return (
        <HelloDiv name={"Chuck"} initialAge ={27}>

        </HelloDiv>
    )
    };
}
export default App;
