import React from "react";
import Auth from "../modules/Auth";
import Student from "../components/Student.jsx";


class StudentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secretData: "",
      user: {},
      allUsers: [],
      hasOpenRequest: false
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  /**
   * This method will be executed after initial rendering.
   */

  componentDidMount() {
    var allUsers = this.getAllUsers()
    this.checkForOpenRequest();
    const xhr = new XMLHttpRequest();
    xhr.open("get", "/api/student");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          user: xhr.response.user,
          allUsers: xhr.response.students,
        });
      }
    });
    xhr.send();
  }

  getAllUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "/api/users");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
       
      if (xhr.status === 200) {
        this.setState({
          allUsers: xhr.response,
        });
      }
    });
    xhr.send();
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }

  handleTouchTap() {
    console.log('fired');
    const xhr = new XMLHttpRequest();
    xhr.open("get", "/api/coin-subtraction");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      console.log(xhr.response);
      if (xhr.status === 200) {
        this.setState({
          success: xhr.response,
        });
      }
    });
    xhr.send('test=test');
  }
  checkForOpenRequest(){
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/coin-request');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
       
      if (xhr.status === 200) {
        this.setState({
          hasOpenRequest: xhr.response.lenght > 0
        });
      }

    });
    xhr.send();
  } 

  /**
   * Render the component.
   */
  render() {
    return (
      
      <Student
        secretData={this.state.secretData}
        user={this.state.user}
        handleTouchTap={this.handleTouchTap}
      />
    );
  }
}

export default StudentPage;
