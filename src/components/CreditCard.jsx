import React from "react"

const CreditCard = (
    { 
        type, 
        number, 
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color
    }) => {
	return (
        <table 
        style =
        {{
        backgroundColor : `${bgColor}`,
        color : `${color}`,
        width: '350px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        margin: '5px',
         }}>
        <tbody>
            <tr style=
            {{    
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
            }}>
                <td style={{fontSize:"20px"}}>{type}</td>
                </tr>
            <tr style=
            {{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "25px",
                padding: "15px",
            }}
            >
                <td>{number}</td>
            </tr>
            <tr style={{fontSize: "14px"}}>
                <td>Expire {expirationMonth} / {expirationYear}</td>
                <td style={{paddingLeft:'15px', fontWeight: "bold"}}>{bank}</td>
            </tr>
            <tr style={{fontSize: "14px"}}>
                <td>{owner}</td>
            </tr>
            </tbody>
        </table>
    )
}
export default CreditCard
