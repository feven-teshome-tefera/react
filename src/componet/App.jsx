import { Component, StrictMode } from 'react'
import Cardlist from '../contanier/Cardlist'
import Scroll from '../contanier/Scroll'
import { robots } from '../robots'
import SearchBox from '../contanier/SearchBox'
import './App.css'
class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield : ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=>{this.setState({robots:users})})
    }
    onSearchChange = (event)=>{
        this.setState({searchfield:event.target.value})
    }
    render(){
        const{robots,searchfield} = this.state
        const filterdRobots=robots.filter(
            robots=>{
                return robots.name.toLowerCase().includes(searchfield.toLowerCase())           
             }
        )
        return (!robots.length )?
             <h1>Loading</h1>:
        (
            <div className='tc'>
                <h1 className='f1' >RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}></SearchBox>
                <Scroll>

                <Cardlist robots = {filterdRobots}></Cardlist>
                </Scroll>
            </div>
        )
}}
export default App