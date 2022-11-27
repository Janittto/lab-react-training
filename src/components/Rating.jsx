import React from "react"

const Rating = ({children}) => {
    if (children >= '4.9') {
        return (
            <div className="Rating" style={{margin: '5px'}}>★★★★★</div>
        )
    }
    else if (children >= '3.9') {
        return (
            <div className="Rating" style={{margin: '5px'}}>★★★★☆</div>
        )
    }
    else if (children >= '2.9') {
        return (
            <div className="Rating" style={{margin: '5px'}}>★★★☆☆</div>
        )
    }
    else if (children >= '1.9') {
        return (
            <div className="Rating" style={{margin: '5px'}}>★★☆☆☆</div>
        )
    }
    else if (children >= '0.9') {
        return (
            <div className="Rating" style={{margin: '5px'}}>★☆☆☆☆</div>
        )
    }
    else if ( children === '0') {
         return (
            <div className="Rating" style={{margin: '5px'}}>☆☆☆☆☆</div>
        )
    }
}

export default Rating
