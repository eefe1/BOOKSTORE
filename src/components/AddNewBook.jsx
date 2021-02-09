import React from "react";


class AddNewBook extends React.Component {


    render() {

        return (
            <div className="container">
        <h3>Add New Book</h3>
        <div className="row">
    <div className="col-sm-12" >
        <div className="card">
            <div className="card-body">
            <div className="container text-left">
              <h5 className="card-text"> Title:</h5>
              <p className="card-text">Description:</p>  
              <p className="card-text">Categories:</p>
              <p className="card-text">Author Name:</p>
              <p className="card-text">Publisher:</p>
              <p className="card-text">Year:</p>
              <p className="card-text">Page Numbers:</p>
            </div>
            <div className="container text-center">
              <p className="card-text">Options:</p>
              <p className="card-text">Ratings:</p>
              <p className="card-text">ISBN-10:</p>
              <p className="card-text">ISBN-13:</p>
            </div>
           
             </div>
            </div>
          </div>
        </div>
    

  
        )
    }
}

export default AddNewBook;