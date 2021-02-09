import React from "react";
import books from "./api/books.json";

 export default function CardList(props) {


    render() {

        return (
            <div className="row">
            <div className="col-lg-4">
            <div className="card mb-4 shadow-sm">
            
            <img src="https://dummyimage.com/400x200/563d7c/ffffff&text=.card-img-topfff&text=.card-img-top" alt="Card image cap" width="400">
            <div className="card-body">
            <h4 className="card-title">SampleBook</h4>
            </div>
            </div>
            
            </div>
            </div>
        )
    }
}

export default Cardlist;