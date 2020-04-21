import React from 'react';
import Auth from '../modules/Auth';
import Student from '../components/Student.jsx';


class StudentPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {},
      allUsers: [],
      hasOpenRequest: false
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  
  componentDidMount() {
    var allUsers = this.getAllUsers()
    this.checkForOpenRequest();
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/student');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          user: xhr.response.user,
          allUsers: xhr.response.students
        });
      }
    });
    xhr.send();
  }

  getAllUsers() {
    
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/users');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
       
      if (xhr.status === 200) {
        this.setState({
          allUsers: xhr.response
        });
      }

    });
    xhr.send();
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
    return (<Student secretData={this.state.secretData} user={this.state.user} allUsers={this.state.allUsers} />);
  }

}

export default StudentPage;
