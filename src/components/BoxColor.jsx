import React from "react"


const BoxColor = ({ r, g, b}) => {
	return <div className="BoxColor"
        style={{
            backgroundColor : `rgb(${r},${g},${b})`,
            display:"flex", border:"1px solid black", alignItems:"center", padding:"5px", margin:"5px", justifyContent:"center"
            }}>
        <p>rgb({r},{g},{b})</p>
    </div>
}

export default BoxColor
