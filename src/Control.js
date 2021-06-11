import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Sign_in from './sign_in'
import App from "./App"
function Weapon1Button(props) {
    return <Button onClick={props.onClick}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
    >
        <Link color="inherit" >
            Kraber .50-Cal Sniper
    </Link>
    </Button>;
}
function Weapon2Button(props) {
    return <Button onClick={props.onClick}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
    >
        <Link color="inherit" >
            Prowler Burst PDW
    </Link>
    </Button>;
}
function Weapon3Button(props) {
    return <Button onClick={props.onClick}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
    >
        <Link color="inherit" >
            Triple Take
    </Link>
    </Button>;
}

function BackButton(props) {
    return <Button onClick={props.onClick}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
    >Back
            </Button>;
}
class control extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin1Click = this.handleLogin1Click.bind(this);
        this.handleLogin2Click = this.handleLogin2Click.bind(this);
        this.handleLogin3Click = this.handleLogin3Click.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { weapondata: false };
    }

    handleLogin1Click() {
        this.setState({ isLoggedIn1: true });
    }

    handleLogin2Click() {
        this.setState({ isLoggedIn2: true });
    }
    handleLogin3Click() {
        this.setState({ isLoggedIn3: true });
    }
    handleLogoutClick() {
        this.setState({ isLoggedIn1: false });
        this.setState({ isLoggedIn2: false });
        this.setState({ isLoggedIn3: false });
    }

    render() {
        const a = this.state.isLoggedIn1;
        const b = this.state.isLoggedIn2;
        const c = this.state.isLoggedIn3;
        let button = null;
        if (a) {
            button = <BackButton onClick={this.handleLogoutClick} />;
        } else {
            button = <Weapon1Button onClick={this.handleLogin1Click} />;
            button = <Weapon2Button onClick={this.handleLogin2Click} />;
            button = <Weapon3Button onClick={this.handleLogin3Click} />;
        }
        return (
            <div>
                <Greeting isLoggedIn1={a} />
                <Greeting isLoggedIn2={b} />
                <Greeting isLoggedIn3={c} />
                {button}
            </div>
        );
    }
}
function Greeting(props) {
    const isLoggedIn1 = props.isLoggedIn1;
    const isLoggedIn2 = props.isLoggedIn2;
    const isLoggedIn3 = props.isLoggedIn3;
    if (isLoggedIn1) {
        return <App />;//jump to weapon1
    }
    else if (isLoggedIn2) {
        return <App />;//jump to weapon2
    }
    else if (isLoggedIn3) {
        return <App />;//jump to weapon3
    }
    return <Sign_in />; //jump back table
}
ReactDOM.render(
    <Greeting isLoggedIn1={false} />, <Greeting isLoggedIn2={false} />,<Greeting isLoggedIn3={false} />,document.getElementById('root')
);
export default control;