import NavBar from "../../NavBar/index"
import React, { Component } from "react";


class ListUser extends Component {

    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }
  
    componentDidMount() {
        fetch("https://reqres.in/api/users?page=2")
          .then(res => res.json())
          .then(parsedJSON => parsedJSON.data.map(item => (
            {
              id: `${item.id}`,
              email: `${item.email}`,
              firstName: `${item.first_name}`,
              lastName: `${item.last_name}`,
              image: `${item.avatar}`,
  
            }
          )))
          .then(items => this.setState({
            items,
            isLoaded: false
          }))
          .catch(error => console.log('parsing failed', error))
      }
  
      render() {
        const {items } = this.state;
          return (
            <div className="boxWhite">
                <NavBar />
              <h2>List Users</h2>
              {
                items.length > 0 ? items.map(item => {
                const {id,email, firstName, lastName,  image} = item;
                 return (
  
                 <div key={id} className="bgCircle">
                 <img src={image} alt={firstName} className="circle"/> 
                 <div className="ctr">
                    <h5>{firstName} {lastName} </h5>
                    <h7>{email}</h7>
                    
                  </div>
  
                </div>
                );
              }) : null
            }
            </div>
          );
  
      }
    }
  
  export default ListUser;

