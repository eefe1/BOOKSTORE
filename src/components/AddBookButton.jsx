import React from "react";


class AddBookButton extends React.Component {


    render() {

        return (
            <div className="container"id="savebutton">

            <button type="button"  className="btn btn-outline-danger btn-lg" data-mdb-ripple-color="dark">
                SAVE
              </button>
            </div>
     
       
    
        )
    }
}

export default AddBookButton;