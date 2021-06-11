import React from 'react';
import HomePage from './HomePage';
import Kraber from '../src/Weapon/Kraber';
class WebsiteController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: true,
            kraber: false,
            prowler: false,
        }
        this.stateAllFalse = this.stateAllFalse.bind(this);
    }

    componentDidMount(){};
    componentWillUnmount(){};

    stateAllFalse() {
        this.setState({
            home: false,
            kraber: false,
            prowler: false,
        })
    };

    toHome() {
        this.stateAllFalse();
        this.setState({ home: true });
    }

    toKraber() {
        this.setState({ kraber: true })
    }

    toProwler(){
        this.setState({prowler: true })    
    }



    setRenderItem(){
    if (this.state.home == true)
        return (< HomePage />);
    }

    render(){
        return (
            <div>
                {this.setRenderItem()}
            </div>
        )
    }
}
export default WebsiteController