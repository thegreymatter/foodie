import React, {Component} from 'react';
import Header from './pages/header'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>

                {this.props.children}
            </div>
        );
    }
}

export default App;
