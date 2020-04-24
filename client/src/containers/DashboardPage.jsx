import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import { json } from 'body-parser';


class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {},
      allUsers: []
    };

    this.giveCoins = this.giveCoins.bind(this);
  }

  /**
   * This method will be executed after initial rendering.
   */
  
  componentDidMount() {
    
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
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

  giveCoins(user) {
    console.log('fireZ');
    
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/api/coin-approve");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      console.log(xhr.response);
      if (xhr.status === 200) {
        let Usermemory = this.state.allUsers;
        Usermemory.forEach((Stus,i) => {
           if(Stus._id === user._id){

             Stus.Coin = xhr.response.Coin;
             Usermemory[i] = Stus;
             console.log(Stus)
           }
        });  
        this.setState({
          allUsers: Usermemory,
          
        });
      }
    });
    xhr.send('_id='+user._id+"&Coin="+user.Coin);
  }
  

  

  getSingleUser() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/user');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      console.log(xhr.response); 
      if (xhr.status === 200) {
        this.setState({
          loggedInUser: xhr.response
        });
      }

    });
    xhr.send();

  }

  /**
   * Render the component.
   */
  render() {
    return (<Dashboard secretData={this.state.secretData} giveCoins={this.giveCoins} user={this.state.user} allUsers={this.state.allUsers} />);
  }

}

export default DashboardPage;
