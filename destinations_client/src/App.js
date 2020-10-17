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

  render = () => {
      return <div>
      <h2 className="card-header info-color white-text text-center py-4">
          <strong>
              Create Destination
          </strong>
           </h2>
      <form className="text-center border border-light p-5" action="#!" onSubmit={this.createDestination}>
          <input className="form-control mb-4" onKeyUp={this.changeNewDestinationLocation} type="text" placeholder="Where"/><br/>
          <input className="form-control mb-4" onKeyUp={this.changeNewDestinationImg} type="text" placeholder="<img>"/><br/>
          <input  className="form-control mb-4" onKeyUp={this.changeNewDestinationRating} type="number" max="5" min="1" placeholder="Rating"/><br/>
          <input className="form-control mb-4" onKeyUp={this.changeNewDestinationCost} type="number" placeholder="Cost"/><br/>
          <input className="form-control mb-4" onKeyUp={this.changeNewDestinationTitle} type="text" placeholder="Title"/><br/>
          <input className="form-control mb-4" onKeyUp={this.changeNewDestinationDated} type="date" placeholder="Date"/><br/>
          <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" onKeyUp={this.changeNewDestinationDescription}  placeholder="Description"/><br/>
          <button className="btn btn-info btn-block" type="submit">Create</button>
      </form>
      <h2>List of Destinations</h2>
      <div class="list card">
          {
              this.state.trips.map(
                  (destination) => {
                      return (
                      <div className="col-lg-4 col-md-6 mb-4" style="margin-top: 28px">
                          <div className="view view-cascade">
                          {destination.location} <br/>
                          {destination.img} <br/>
                          {destination.rating} <br/>
                          {destination.cost} <br/>
                          {destination.title} <br/>
                          {destination.dated} <br/>
                          {destination.description} <br/>
                          <button className="btn btn-info btn-block" value={destination.id} onClick={this.deleteDestination}>
                              DELETE
                          </button>
                          </div>
                        
                          
                          <form id={destination.id} onSubmit={this.updateDestination}>
                          <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationLocation} type="text" placeholder="Where"/><br/>
                          <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationImg} type="text" placeholder="<img>"/><br/>
                          <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationRating} type="number" max="5" min="1" placeholder="Rating"/><br/>
                          <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationCost} type="number" placeholder="Cost"/><br/>
                          <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationTitle} type="text" placeholder="Title"/><br/>
                          <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationDated} type="date" placeholder="Date"/><br/>
                          <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationDescription} type="textarea" placeholder="Description"/><br/>
                              <button className="btn btn-info btn-block" type="submit">Update</button>
                          </form>
                      </div>
                      )
                  }
              )
          }
      
      </div>
      </div>
  }
}






export default App;
