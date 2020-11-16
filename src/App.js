import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import StarRating from './components/StarRating.js';

class App extends React.Component {
  state = {
    trips: [],
    showCreate: false,
    showUpdate: false
  }

  componentDidMount = () => {
    axios.get('https://destination-ratr-backend.herokuapp.com/destination').then(
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
        'https://destination-ratr-backend.herokuapp.com/destination',
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
  axios.delete('https://destination-ratr-backend.herokuapp.com/destination/' + event.target.value).then(
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
        'https://destination-ratr-backend.herokuapp.com/destination/' + id,
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
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navigation">
        <div className="container-fluid">
          <a className="navbar-brand nav-link" target="_blank" href="#">
              <strong>Destination Ratr</strong>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navExample01"
            aria-controls="navExample01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navExample011">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#"><strong>Register</strong></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><strong>Log In</strong></a>
                </li>
            </ul>
        </div>
      </div>
    </nav>

    <div id="introCarousel" className="carousel slide carousel-fade shadow-2-strong" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#introCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#introCarousel" data-slide-to="1"></li>
        <li data-target="#introCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="view">
            <img className="d-block w-100 vh-75 h-100" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"alt="Waialua Beach"/>
            <div className="d-flex justify-content-center align-items-center h-100 ">
          </div>
          <div className="carousel-caption text-center">
            <h4 className="mx-5 mb-5 text-white text-center">
                <strong>
                    Welcome to Destination Ratr!
                </strong>
            </h4>
            <h5>
            Create your trip now
            </h5>
            <button data-toggle="modal" data-target="#exampleModal" onClick={this.toggleCreate} className="btn btn-outline-white btn-md" ><i className="fas fa-clone left"></i>
            Create
            </button>
          </div>
        </div>
</div>
        <div className="carousel-item">
          <div className="view">

            <img className="d-block w-100 vh-75 h-100" src="https://images.unsplash.com/photo-1500759285222-a95626b934cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

              alt="Cuba"/>
            
          </div>
          <div className="carousel-caption">
            <h4 className="mx-5 mb-5 text-white text-center"><strong>Welcome to Destination Ratr!</strong>
            </h4>
            <h5>
            Create your trip now
            </h5>
            <button data-toggle="modal" data-target="#exampleModal" onClick={this.toggleCreate} className="btn btn-outline-white btn-md" ><i className="fas fa-clone left"></i>
            Create
            </button>
            
          </div>
        </div>
        <div className="carousel-item">
          <div className="view">

            <img className="d-block w-100 vh-75 h-100" src="https://images.unsplash.com/photo-1461681922067-669418071e5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

              alt="Machu Picchu"/>
            
          </div>
          <div className="carousel-caption">
          <h4 className="mx-5 mb-5 text-white text-center"><strong>Welcome to Destination Ratr!</strong>
          </h4>
          <h5>
          Create your trip now
          </h5>
          <button data-toggle="modal" data-target="#exampleModal" onClick={this.toggleCreate} className="btn btn-outline-white btn-md" ><i className="fas fa-clone left"></i>
          Create
          </button>
          </div>
        </div>
      </div>
          <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
      </div>



                {/* ======= CREATE FORM ======= */}
      <div className="modal-body">
        {this.state.showCreate ? <form className="text-center border border-light p-5" action="#!" onSubmit={this.createDestination}>
            <label className="formLeft"><strong>Location: </strong></label><input className="form-control mb-4" onKeyUp={this.changeNewDestinationLocation} type="text" placeholder="Where"/>
            <label className="formLeft" className="formLeft" className="formLeft"><strong>Image: </strong></label><input className="form-control mb-4" onKeyUp={this.changeNewDestinationImg} type="text" placeholder="<img>"/>
            <label className="formLeft" className="formLeft"><strong>Rating: </strong></label><input  className="form-control mb-4" onKeyUp={this.changeNewDestinationRating} type="number" max="5" min="1" placeholder="Rating"/>
            <label className="formLeft"><strong>Cost: </strong></label><input className="form-control mb-4" onKeyUp={this.changeNewDestinationCost} type="number" max="5" min="1" placeholder="Cost ($)"/>
            <label className="formLeft" className="formLeft"><strong>Title: </strong></label><input className="form-control mb-4" onKeyUp={this.changeNewDestinationTitle} type="text" placeholder="Title"/>
            <label className="formLeft"><strong>Date: </strong></label><input className="form-control mb-4" onKeyUp={this.changeNewDestinationDated} type="text" placeholder="mm/dd/yyyy"/>
            <label className="formLeft"><strong>Description: </strong></label><textarea className="form-control rounded-0" id="exampleFormControlTextarea2" onKeyUp={this.changeNewDestinationDescription}  placeholder="Description"/>
            <button className="btn btn-info btn-block" type="submit">Create</button>
        </form> : null}
      </div>
      {/* <div className="ratingOfStars">
                            <StarRating/>
                    </div> */}

                    {/* ======= DESTINATIONS LIST & CARDS ======= */}
      <h2 className="card-header info-color white-text text-center py-4" id="list">Destinations</h2>
      <div className="row row-cols-1 row-cols-md-3" id="card-container">
          {
              this.state.trips.map(
                  (destination) => {
                      return <div className="col mb-4">
                              <div className="card">
                                <div className="view overlay">
                                  <img src={destination.img} className="card-img-top card-img" />
                                </div>
                                <div className="card-body text-center">
                                  <h5 className="pink-text"><i className="fas fa-plane-departure"></i> {destination.location}</h5> <br/>
                                  <h4 className="card-title">{destination.title}</h4>
                                  <strong>Rating</strong>: {destination.rating} <br/>
                                  <strong>Cost</strong>: {destination.cost===5? '$$$$$' :null }
                                  {destination.cost===4? '$$$$' :null }
                                  {destination.cost===3? '$$$' :null }
                                  {destination.cost===2? '$$' :null }
                                  {destination.cost===1? '$' :null }
                                  <br/>
                                  <p className="card-text"><strong>Date</strong>: {destination.dated}
                                  <br/>
                                  </p>
                                  <p className="card-text"><strong>Review</strong>:<br/> {destination.description} <br/>
                                  </p>
                                  <button className="btn btn-info btn-block btn-danger" value={destination.id} onClick={this.deleteDestination}>
                                  DELETE
                                  </button>
                                  <button className="btn btn-info btn-block" onClick={this.toggleUpdate}>
                                  Update
                                  </button>
                                  {/* ======= UPDATE FORM ======= */}
                                  {this.state.showUpdate ? <form id={destination.id} onSubmit={this.updateDestination}>
                                  <label className="formLeft"><strong>Location: </strong></label>
                                  <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationLocation} type="text" placeholder={destination.location}/>
                                  <label className="formLeft"><strong>Image: </strong></label>
                                  <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationImg} type="text" placeholder={destination.img}/>
                                  <label className="formLeft"><strong>Rating: </strong></label>
                                  <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationRating} type="number" max="5" min="1" placeholder={destination.rating}/>
                                  <label className="formLeft"><strong>Cost: </strong></label>
                                  <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationCost} type="number" min="1" max="5" placeholder={destination.cost}/>
                                  <label className="formLeft"><strong>Title: </strong></label>
                                  <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationTitle} type="text" placeholder={destination.title}/>
                                  <label className="formLeft"><strong>Date: </strong></label>
                                  <input className="form-control mb-4" onKeyUp={this.changeUpdateDestinationDated} type="text" name="begin" min="1997-01-01" max="2030-12-31" placeholder={destination.dated}/>
                                  <label className="formLeft"><strong>Description: </strong></label>
                                  <textarea className="form-control mb-4" onKeyUp={this.changeUpdateDestinationDescription} placeholder={destination.description}/>
                                  <button className="btn btn-block btn-success" type="submit">Save Changes</button>
                                  </form>: null}
                          </div>
                        </div>
                      </div>


                  }
              )
          }

          </div>
<footer className="page-footer font-small">
    <hr className="clearfix rgba-white-light" id="secondFooterHR" />
<div className="row pb-3">
      <div className="col-md-12">
        <div className="mb-5 flex-center text-center" id="footerSocials">
          <p>Sammy Schneider:  
              &nbsp;
          {/* <!-- Linkedin 1 --> */}
          <a className="li-ic" href="https://linkedin.com/in/sammy-schneider/" target="_blank">
            <i className="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
          </a>
          {/* <!--Github--> */}
            <a className="git-ic" href="https://github.com/sammyschneider/Destination_Ratr" target="_blank">
            <i className="fab fa-github fa-lg white-text"></i>
            </a>
            {/* <!--Portfolio--> */}
          <a className="portfolio" href="https://sammyschneider.dev/" target="_blank">
            <i className="fas fa-code fa-lg white-text mr-4"></i>
            </a>
          </p>
          |
          <p>Alby Batista: 
             &nbsp;
          {/* <!--Linkedin 2 --> */}
          <a className="li-ic" href="https://linkedin.com/in/albybatista/" target="_blank">
            <i className="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
          </a>
          {/* <!--Github--> */}
            <a className="git-ic" href="https://github.com/Albybatista" target="_blank">
            <i className="fab fa-github fa-lg white-text"></i>
            </a>
          {/* <!--Portfolio--> */}
          <a className="portfolio" href="https://albybatista.com/" target="_blank">
            <i className="fas fa-code fa-lg white-text mr-4"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  <div className="footer-copyright text-center py-3"><strong>© 2020 Copyright:</strong>
    <a href="https://destination-ratr.netlify.app"> <strong>Destination Ratr</strong></a>
  </div>
</footer>
    </div>
  }
}


export default App;