import { StrictMode } from 'react'
import Card from './Card'
import './CardList.css'

const Cardlist =({robots}) =>{
    return(
       <div className="grid grid-3 grid-gap pa3 ">
      {robots.map((user) => (
        <Card
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          className="pa3"
        />
      ))}
    </div>
    )
}
export default Cardlist
