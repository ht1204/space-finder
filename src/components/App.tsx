import React from 'react';
import { ChildComponent } from '../components/ChildComponent';
interface AppState {
  appCounter: number;
}
export class App extends React.Component<{}, AppState>{

  state: AppState = {
    appCounter: 0
  }

    private incrementCounter(){
        this.setState({
            appCounter: this.state.appCounter + 1,
        })
    }
    handleSubmit = () =>{
        this.incrementCounter();
    }

    render() {
        console.log('rendering parent component');
        return(
            <section className="parentComponent">
                This is a parent component
                <br/>
                <button onClick={this.handleSubmit}>
                    Increment parent counter
                </button>
                <br/>
                <ChildComponent appCounter={this.state.appCounter}/>
            </section>
        );
    }

}


export default App;
