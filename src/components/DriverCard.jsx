import React from "react"

const DriverCard = ({name, rating, img, car: {model, licensePlate}}) => {
	return (
		<div className="DriverCar"
            style={{   
                  display: 'flex',
                  border: '1px solid black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'lightblue',
                  padding: '10px',
                  margin: '5px',
                  color: 'white',
                  width: '500px'
              }}
            >
                  <picture style={{display: 'inline-block', position: 'relative', width: '100px', height: '100px', overflow: 'hidden', borderRadius: '50%'}}>
                  <img src={img} alt="image" style={{ width: 'auto', height: '100%'}} /></picture>
                  <ul style={{listStyle:"none", margin:"0", paddingLeft:"15px"}}>
                  <li style={{fontWeight:'bold', fontSize:'18px' }}>{name}</li>
                  <li>{rating}</li>
                  <li>{model}</li>
                  <li>{licensePlate}</li>
                  </ul>
		</div>
		)
}
export default DriverCard
