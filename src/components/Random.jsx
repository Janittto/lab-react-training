import React from "react"

const Random = ({ min, max}) => {
	return (
		<div className="Random"
		style={{display:"flex", border:"1px solid black", alignItems:"center", padding:"5px", margin:"5px"}}>
			Random value between {min} and {max} => {Math.floor(min + Math.random() * (max - min))}
		</div>
		)
}
export default Random
