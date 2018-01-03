import React, {Component} from 'react';
import Header from './pages/header'
import Footer from './pages/footer'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}

                <Footer/>
            </div>
        );
    }
}

export default App;
