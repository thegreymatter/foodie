import React, {Component} from 'react';
import Header from './pages/header'
import Footer from './pages/footer'

class App extends Component {
    render() {
        const style={
            //backgroundColor:"#febc1d"
        };

        return (
            <div>
                <Header/>
                <div style={style}>
                {this.props.children}
                </div>

                <Footer/>

            </div>
        );
    }
}

export default App;
