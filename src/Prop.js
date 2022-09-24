import React from 'react'

function Welcome(Prop){
    return(
        <div>
        <h1>Welcome {Prop.name}</h1>
        <h2>{Prop.email}</h2>
        <h2>{Prop.branch}</h2>
        <h3>{Prop.sem}</h3>
        </div>
    )
}
function Prop() {
  return (
    <div>
        <Welcome name="nayana" email="nayana@gmail.com " branch="cse" sem="7"/>
    </div>
  )
}
export default Prop

