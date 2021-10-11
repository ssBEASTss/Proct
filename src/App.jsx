import React from 'react';
import axios from 'axios';
import { Register, Login } from "./components/index.jsx";
import "./components/index.scss";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName:'',
            username:'',
            email:'',
            password:'',
            isRegisterActive: true,
        }
        this.changeFirstname = this.changeFirstname.bind(this)
        this.changeLastname = this.changeLastname.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFirstname(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeLastname(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))

         this.setState({
            fullName:'',
            username:'',
            email:'',
            password:'',
        })
    }

    changeState() {
        const { isRegisterActive } = this.state;
        if (isRegisterActive){
            this.switchBtn.classList.remove("right");
            this.switchBtn.classList.add("left");
            
        }
        else{
            this.switchBtn.classList.remove("left");
            this.switchBtn.classList.add("right");
        }
        this.setState((prevState) => ({isRegisterActive: !prevState.isRegisterActive}));

    }
    
    render() {
        const { isRegisterActive } = this.state;
        const current = isRegisterActive ? "Login" : "Register";
        const currentActive = isRegisterActive ? "register" : "login";
        return (
           <div className="App">
               <div className="Register">
               <div className="container">
                    {isRegisterActive && <Register containerRef={(ref) => this.current = ref}/> }
                    {!isRegisterActive && <Login containerRef={(ref) => this.current = ref}/> }
                </div>  

                    <SwitchBtn 
                    current={current} 
                    containerRef={ref => this.switchBtn = ref } 
                    onClick={this.changeState.bind(this)}
                    />
                </div> 
             </div>
        );
    }   
}

const SwitchBtn = props => {
    return <div className="switch" ref={props.containerRef} onClick={props.onClick}>
        <div className="inner-container">
            <div className="text">
                {props.current}
                 </div>
            </div>
        </div>
} 

export default App;