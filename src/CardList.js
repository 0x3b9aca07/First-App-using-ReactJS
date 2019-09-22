import React from 'react'
 const Cardlist(props) => {
    return (
    <div>
     {prop.Users.map((person, index) => {
         return (
             <div key={index}>
              <h1>{person.name}</h1>
              <p>{person.email}</p>
         )
     }
        )}
    </div>
    )
 }
 export default Cardlist;