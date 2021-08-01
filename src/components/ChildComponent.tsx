import React from 'react';

interface ChildProps {
    appCounter: number;
}

interface ChildState {
    childCounter: number;
}

export class ChildComponent extends React.Component<ChildProps, ChildState>{
    state : ChildState = {
        childCounter: 0,
    }

    private incrementCounter(){
        this.setState({
            childCounter: this.state.childCounter + 1,
        })
    }

    handleSubmit = () =>{
        this.incrementCounter();
    }

    render() {
        console.log('rendering child component');
        return(
            <section className="childComponent">
                This is a child component
                <br/>
                <button onClick={this.handleSubmit}>
                    Increment child counter
                </button>
                <br/>
                <label>Child counter: {this.state.childCounter}</label>
                <br/>
                <label>Parent counter: {this.props.appCounter}</label>
            </section>
        );
    }
}