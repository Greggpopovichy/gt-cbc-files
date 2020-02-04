import React from "react";

export class HelloDiv extends React.Component {
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };
    }
    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
    }
    render(){
        return (
            <div>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <button onClick={this.onMakeOlder.bind(this)} className = "btn btn-primary">Make me Older</button>
            </div>
        );
    }
}

export default HelloDiv;