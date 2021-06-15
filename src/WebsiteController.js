import React from 'react';
import HomePage from './HomePage';
import Kraber from '../src/Weapon/Kraber';
import Prowler from '../src/Weapon/Prowler';
import TripleTake from '../src/Weapon/TripleTake';
import ReactGA from 'react-ga'; 

class WebsiteController extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            home: true,
            kraber: false,
            prowler: false,
            tripletake:false,
            items:[],
            isLoaded:false,
        }
        this.stateAllFalse = this.stateAllFalse.bind(this);
        this.toHome=this.toHome.bind(this);
        this.toKraber=this.toKraber.bind(this);
        this.toProwler=this.toProwler.bind(this);
        this.toTripletake=this.toTripletake.bind(this);
    }

    componentDidMount(){
        fetch('http://127.0.0.1:4000/users/signin')
        .then(res => res.json())
        .then(json => { 
            this.setState({ 
                isLoaded:true,
                items:json,
            })
        });
    }
    // componentWillUnmount(){};

    stateAllFalse() {
        this.setState({
            home: false,
            kraber: false,
            prowler: false,
            tripletake:false,
        })
    };

    toHome() {
        this.stateAllFalse();
        this.setState({ home: true });
    }

    toKraber() {
        this.stateAllFalse();
        this.setState({ kraber: true })
    }

    toProwler(){
        this.stateAllFalse();
        this.setState({prowler: true })    
    }

    toTripletake(){
        this.stateAllFalse();
        this.setState({ tripletake: true })    
    }



    setRenderItem(){
        if (this.state.home === true&&(this.state.kraber===false)&&(this.state.prowler===false)&&(this.state.tripletake===false))
            return (< HomePage toKraber={this.toKraber} toProwler={this.toProwler} toTripletake={this.toTripletake} stateAllFalse={this.stateAllFalse}/>);
        else if(this.state.kraber===true)
            return(< Kraber items={this.state.items} toHome={this.toHome}/>);
        else if(this.state.prowler===true)
            return(< Prowler items={this.state.items} toHome={this.toHome}/>);
        else if(this.state.tripletake===true)
            return(< TripleTake items={this.state.items} toHome={this.toHome}/>);
        
    }
    
    render(){
        var {isLoaded,items}=this.state;
        if(!isLoaded){
          return <div>Loading</div>;
        }
        else{
          return(
            <div>
                {this.setRenderItem()}             
            </div>
          );
          }
        }
    
    

    // render(){
    //     var items=this.state.items;
    //     return (
            // <div>
            //     {/* {this.setRenderItem()} */}
                
            // </div>
    //     )
    // }
}
export default WebsiteController;