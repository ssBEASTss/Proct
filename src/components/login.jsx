import React from 'react';
import "./index.scss";
import logImage from "../images/login.svg";
 
export class Login extends React.Component{
  constructor(props){ 
    super(props);
  }

render() {
 return (
  <center>


  <div className="base-container" ref={this.props.containerRef}>
  <div className="login">
  <div className="loginto1">
 
 </div>
  <div  className="header">Login</div>
  <div className="content">
  <div className="form">
  <div className="logImg">
    <img src={logImage} />
  </div>
  <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" placeholder="email" />
      </div>
      <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="password" />
      </div>
      <div className="form-group">
      <label htmlFor="password">Exam Key</label>
      <input type="password" name="exam_key" placeholder="exam key" />
      </div>
      <div className="form-group"  >
      <input type="submit"  className="btnR" value='Submit'/>
      </div>
      </div>
      </div>
  
  </div>

 </div>
</center>
 );
}
}