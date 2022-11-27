import React from "react"

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
	return (
		<div className="IdCard" 
            style={{display:"flex", border:"1px solid black", alignItems:"center", padding:"5px", margin:"5px"}}>
            <img src={picture} alt="image" />
            <ul style={{listStyle:"none", margin:"0"}}>
            <li><span>First Name :</span> {firstName}</li>
            <li><span>Last Name :</span> {lastName}</li>
            <li><span>Gender : </span>{gender}</li>
            <li><span>Height : </span>{height}</li>
            <li><span>Birth : </span>{birth}</li>
            </ul>
		</div>
	)
}

export default IdCard
