import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import StarRating from './StarRating';

class App extends React.Component {
  state = {
    trips: [],
    showCreate: false,
    showUpdate: false
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
    event.target.reset();
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
              trips: response.data,
              showCreate: !this.state.showCreate
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

  //CREATE TOGGLE
  toggleCreate = (event) => {
      this.setState({
          showCreate: !this.state.showCreate
        });
  }
  //CREATE TOGGLE
  toggleUpdate = (event) => {
      this.setState({
          showUpdate: !this.state.showUpdate
        });
  }

  render = () => {
      return <div>
      <nav className="navbar navbar-expand-lg navbar-light d-lg-block" id="navigation">
        <div className="container-fluid">
          <a className="navbar-brand nav-link" target="_blank" href="#">
              <strong>Destination Ratr</strong>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navCollapse">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Log In</a>
                </li>
                <ul className="navbar-nav list-inline">
                    {/* ======= ICONS ======= */}
                <li className>
                  <a className="nav-link" href="#"><i className="fab fa-linkedin"></i></a>
                </li>
                <li className>
                  <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
                </li>
                <li className>
                  <a className="nav-link" href="#"><i className="fab fa-youtube"></i></a>
                </li>
                <li className>
                  <a className="nav-link" href="#"><i className="fab fa-github"></i></a>
                </li>
              </ul>
            </ul>
        </div>
      </div>
    </nav>
                                {/* ======= CAROUSEL ======= */}
    <div id="introCarousel"className="carousel slide carousel-fade shadow-2-strong"  data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#introCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#introCarousel" data-slide-to="1"></li>
            <li data-target="#introCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="mask" id="caroMask">
                <img src="https://images.unsplash.com/photo-1494633114655-819eb91fde40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="d-block w-100" alt="Hong Kong Image"/>
                <div className="d-flex justify-content-center align-items-center h-100"/>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1490237014491-822aee911b99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="d-block w-100" alt="Iceland Image"/>
            </div>
            <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="d-block w-100" alt="Canada Image"/>
            </div>
        </div>
                    {/* ======= CAROUSEL CONTROLS ======= */}
        <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>

                        {/* ======= JUMBOTRON ======= */}
    <div className="jumbotron card card-image" id="jumbo">
      <div className="text-white text-center py-5 px-4">
        <div>
        <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Welcome to Destination Ratr</strong></h2>
        <p className="mx-5 mb-5">Where your travel memories and dream destinations collide in order to provide you with a sense of solace and peace. 
        </p>
        <button onClick={this.toggleCreate} className="btn btn-outline-white btn-md" ><i className="fas fa-clone left"></i>
        Create
        </button>
        </div>
      </div>
    </div>


            {/* ======= STAR RATING TEST w/ DIV ======= */}
                    <div class="ratingOfStars">
                            <StarRating/>
                    </div>


                {/* ======= CREATE FORM ======= */}
      <div className="create_form">
        {this.state.showCreate ? <form className="text-center border border-light p-5" action="#!" onSubmit={this.createDestination}>
            <input className="form-control mb-4" onKeyUp={this.changeNewDestinationLocation} type="text" placeholder="Where"/><br/>
            <input className="form-control mb-4" onKeyUp={this.changeNewDestinationImg} type="text" placeholder="<img>"/><br/>
            <input  className="form-control mb-4" onKeyUp={this.changeNewDestinationRating} type="number" max="5" min="1" placeholder="Rating"/><br/>
            <input className="form-control mb-4" onKeyUp={this.changeNewDestinationCost} type="number" placeholder="Cost"/><br/>
            <input className="form-control mb-4" onKeyUp={this.changeNewDestinationTitle} type="text" placeholder="Title"/><br/>
            <input className="form-control mb-4" onKeyUp={this.changeNewDestinationDated} type="date" placeholder="Date"/><br/>
            <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" onKeyUp={this.changeNewDestinationDescription}  placeholder="Description"/><br/>
            <button className="btn btn-info btn-block" type="submit">Create</button>
        </form> : null}
      </div>
                    {/* ======= DESTINATIONS LIST & CARDS ======= */}
      <h2 className="card-header info-color white-text text-center py-4" id="list">List of Destinations</h2>
      <div className="sidez">
          {
              this.state.trips.map(
                  (destination) => {
                                {/* ======= CARDS ======= */}
                      return <div className="list card">
                      <div className="col-lg-4 col-md-6 mb-4" id="cardposts">
                        <div className="card card-cascade narrower">
                          <h4 className="py-lg-4 pb-4 text-center">{destination.location}</h4>
                          <br/>
                            <div className="view view-cascade overlay">
                              <img src={destination.img} className="card-img-top" />
                            <br/>
                            </div>
                          <div className="card-body card-body-cascade">
                          <h5 className="pink-text"><i className="fas fa-plane-departure"></i> {destination.location}</h5> <br/>
                          <h4 className="card-title">{destination.title}</h4>
                          Rating: {destination.rating} <br/>
                          Cost: {destination.cost} <br/>
                          <p className="card-text">Date: {destination.dated} <br/>Description: {destination.description} <br/>
                          </p>
                          <button className="btn btn-info btn-block" value={destination.id} onClick={this.deleteDestination}>
                              DELETE
                          </button>
                          <button className="btn btn-info btn-block" onClick={this.toggleUpdate}>
                              Update
                          </button>
                          {/* ======= UPDATE FORM ======= */}
                          {this.state.showUpdate ? <form id={destination.id} onSubmit={this.updateDestination}>
                          <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationLocation} type="text" placeholder="Where"/><br/>
                          <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationImg} type="text" placeholder="<img>"/><br/>
                          <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationRating} type="number" max="5" min="1" placeholder="Rating"/><br/>
                          <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationCost} type="number" placeholder="Cost"/><br/>
                          <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationTitle} type="text" placeholder="Title"/><br/>
                          <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationDated} type="date" placeholder="Date"/><br/>
                          <textarea className="form-control mb-4" onKeyUp={this.changeUpdateDestinationDescription} placeholder="Description"/><br/>
                              <button className="btn btn-info btn-block" type="submit">Save</button>
                          </form>: null}
                                </div>
                            </div>
                        </div>
                    </div>
                  }
              )
          }
          </div>
    </div> 
  }
}




export default App;
