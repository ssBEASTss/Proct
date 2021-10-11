import React from 'react';
import "./index.scss";
import regImage from "../images/register.svg";
 
export class Register extends React.Component{
  constructor(props){ 
    super(props);
  }


render() {
 return(  
      <center>

  <div className="base-container" ref={this.props.containerRef}>
  <div className="register">  
  <div  className="header">Register</div>
  <div className="content">
  <form onSubmit={this.onSubmit}>
  <div className="regImg">
    <img src={regImage} />
  </div>
  <div className="form-group">
      <label htmlFor="first">First Name</label>
      <input type="text" name="first" placeholder="first name" 
      onChange={this.changeFirstname}
      value={this.props.fullName}
      />
      </div>
      <div className="form-group">
      <label htmlFor="last">Last Name</label>
      <input type="text" name="last" placeholder="last name" 
      onChange={this.changeLastname} 
      value={this.props.username}
      />
      </div>
  <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" placeholder="email" 
      onChange={this.changeEmail} 
      value={this.props.email}
      />
      </div>
      <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="password" 
      onChange={this.changePassword} 
      value={this.props.password}
      />
      </div>
     <div className="form-group">
      <label htmlFor="retype">Confirm Password</label>
      <input type="password" name="confirm" placeholder="confirm" />
      </div>
      <div className="form-group"  >
      <input type='submit'  className="btnR" value='Register'/>
      </div>

      </form>
      </div>
      
  </div>
  </div>
 </center>
 );
}
}
 