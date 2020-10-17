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
        <div className="jumbotron card card-image" id="jumbo">
  <div className="text-white text-center py-5 px-4">
    <div>
      <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Create your beautiful website with MDBootstrap</strong></h2>
      <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
      </p>
      <a className="btn btn-outline-white btn-md"><i class="fas fa-clone left"></i> View project</a>
    </div>
  </div>
</div>
      <div className="create_form">
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
      </div>
      <h2>List of Destinations</h2>
      <div className="list card">
          {
              this.state.trips.map(
                  (destination) => {
                      return <div className="col-lg-4 col-md-6 mb-4" id="cardposts">

                          {/* Maybe include location here or below around line 200 and then replace this card header with something else or dont include a header above the card at all? */}

                          <h4 className="py-lg-4 pb-4 text-center">{destination.location}</h4>
                          <br/>
                          <div className="view view-cascade">
                          <img src={destination.img} className="card-img-top" /> 
                          <br/>
                           <a>
                                <div className="mask rgba-white-slight">
                                </div>
                            </a>
                          </div>
                          <div className="card-body card-body-cascade">
                          {destination.rating} <br/>
                          {destination.cost} <br/>
                          <h5 className="pink-text"><i className="fas fa-plane-departure"></i> {destination.location}</h5> <br/>
                          <h4 className="card-title">{destination.title}</h4>
                          
                          <p className="card-text">{destination.dated} <br/>{destination.description} <br/>
                          </p>
                          <button className="btn btn-unique" className="btn btn-info btn-block danger" value={destination.id} onClick={this.deleteDestination}>
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
                      
                  }
              )
          }
      
      </div>
      </div>
  }
}






export default App;
