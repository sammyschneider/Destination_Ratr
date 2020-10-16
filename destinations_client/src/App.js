import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    trips: []
  }

  componentDidMount = () => {
    axios.get('/destination').then(
        (response) => {
            this.setState({
                trips: response.data
            }
        )
    })
  }
  // CREATING NEW STATE VALUES BASED ON INPUT
  changeNewDestinationLocation = (event) => {
    this.setState({
        newLocation:event.target.value
    })
  }

  changeNewDestinationImg = (event) => {
    this.setState({
        newImg:event.target.value
    })
  }

  changeNewDestinationRating = (event) => {
    this.setState({
        newRating:event.target.value
    })
  }

  changeNewDestinationCost = (event) => {
    this.setState({
        newCost:event.target.value
    })
  }

  changeNewDestinationTitle = (event) => {
    this.setState({
        newTitle:event.target.value
    })
  }

  changeNewDestinationDated = (event) => {
    this.setState({
        newDated:event.target.value
    })
  }

  changeNewDestinationDescription = (event) => {
    this.setState({
        newDescription:event.target.value
    })
  }
  // CREATE DESTINATION
  createDestination = (event) => {
    event.preventDefault();
    axios.post(
        '/destination',
        {
            location: this.state.newLocation,
            img: this.state.newImg,
            rating: this.state.newRating,
            cost: this.state.newCost,
            title: this.state.newTitle,
            dated: this.state.newDated,
            description: this.state.newDescription
        }
    ).then(
        (response) => {
            this.setState({
              trips: response.data
            });
        }
    )
  }
  // DELETE DESTINATION
  deleteDestination = (event) => {
  axios.delete('/destination/' + event.target.value).then(
      (response) => {
          this.setState(
              {
                  trips: response.data
              }
          )
      }
    )
  }
  // UPDATE CHANGES FUNCTIONS
  changeUpdateLocation = (event) => {
    this.setState({
        updateLocation:event.target.value
        })
    }

    changeUpdateImg = (event) => {
        this.setState({
            updateImg:event.target.value
        })
    }

    changeUpdateRating = (event) => {
        this.setState({
            updateRating:event.target.value
        })
    }

    changeUpdateCost = (event) => {
        this.setState({
            updateCost:event.target.value
        })
    }

    changeUpdateTitle = (event) => {
        this.setState({
            updateTitle:event.target.value
        })
    }

    changeUpdateDated = (event) => {
        this.setState({
            updateDated:event.target.value
        })
    }

    changeUpdateDescription = (event) => {
        this.setState({
            updateDescription:event.target.value
        })
    }
  //UPDATE ROUTE
  updateDestination = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('id');
    axios.put(
        '/destination/' + id,
        {
          location: this.state.updateLocation,
          img: this.state.updateImg,
          rating: this.state.updateRating,
          cost: this.state.updateCost,
          title: this.state.updateTitle,
          dated: this.state.updateDated,
          description: this.state.updateDescription
        }
    )
    .then((response) => {
        this.setState({
            trips: response.data
        })
    })
  }

  render = ()=> {
      return <div>
      <h2>Create Destination </h2>
      <form onSubmit={this.createDestination}>
          <input onKeyUp={this.changeNewDestinationLocation} type="text" placeholder="Where"/><br/>
          <input onKeyUp={this.changeNewDestinationImg} type="text" placeholder="<img>"/><br/>
          <input onKeyUp={this.changeNewDestinationRating} type="number" max="5" min="1" placeholder="Rating"/><br/>
          <input onKeyUp={this.changeNewDestinationCost} type="number" placeholder="Cost"/><br/>
          <input onKeyUp={this.changeNewDestinationTitle} type="text" placeholder="Title"/><br/>
          <input onKeyUp={this.changeNewDestinationDated} type="date" placeholder="Date"/><br/>
          <input onKeyUp={this.changeNewDestinationDescription} type="textarea" placeholder="Description"/><br/>
          <input type="submit" value="Create Destination"/>
      </form>
      <h2>List of Destinations</h2>
      <ul>
          {
              this.state.trips.map(
                  (destination) => {
                      return <li>
                      Id: {destination.id}<br/>
                          {destination.location} <br/>
                          {destination.img} <br/>
                          {destination.rating} <br/>
                          {destination.cost} <br/>
                          {destination.title} <br/>
                          {destination.dated} <br/>
                          {destination.description} <br/>
                          <button value={destination.id} onClick={this.deleteDestination}>
                              DELETE
                          </button>
                          <form id={destination.id} onSubmit={this.updateDestination}>
                          <input onKeyUp={this.changeUpdateDestinationLocation} type="text" placeholder="Where"/><br/>
                          <input onKeyUp={this.changeUpdateDestinationImg} type="text" placeholder="<img>"/><br/>
                          <input onKeyUp={this.changeUpdateDestinationRating} type="number" max="5" min="1" placeholder="Rating"/><br/>
                          <input onKeyUp={this.changeUpdateDestinationCost} type="number" placeholder="Cost"/><br/>
                          <input onKeyUp={this.changeUpdateDestinationTitle} type="text" placeholder="Title"/><br/>
                          <input onKeyUp={this.changeUpdateDestinationDated} type="date" placeholder="Date"/><br/>
                          <input onKeyUp={this.changeUpdateDestinationDescription} type="textarea" placeholder="Description"/><br/>
                              <input type="submit" value="Update Destination"/>
                          </form>
                      </li>
                  }
              )
          }
      </ul>
      </div>
  }
}



export default App;
