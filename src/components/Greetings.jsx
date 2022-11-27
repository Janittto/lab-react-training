import React from "react"

const Greetings = ({ lang, children}) => {
          if (lang === 'de') {
            return ( 
            <div className="Greetings"
            style={{display:"flex", border:"1px solid black", alignItems:"center", padding:"5px", margin:"5px"}}>
                  Hallo {children}
            </div>
            )
          } else if (lang === 'fr') {
            return (
            <div className="Greetings"
            style={{display:"flex", border:"1px solid black", alignItems:"center", padding:"5px", margin:"5px"}}>
                  Bonjour {children}
            </div>
            )
          }

}

export default Greetings
