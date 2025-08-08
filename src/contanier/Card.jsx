import { StrictMode } from 'react'
const Card = ({name,email,id}) =>{
    return(
        <div className='bg-light-green dib  pa3 ma2 grow'>
            <img src= {`https://robohash.org/${id}`} width="200" height="200"/>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}
export default Card