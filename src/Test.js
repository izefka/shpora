import React from 'react';
import {NavLink} from 'react-router-dom'

/* class Test extends React.Component{
    state = {
        count: 0
    }
    render(){
        return <div>
            {
                this.state.count
                
            }
            <button onClick={()=> this.setState((state)=>({count: state.count+1}))}>
                Click
            </button>
            </div>
    } 
}  */

function State() {
  return(
    <NavLink to="/">About</NavLink>
    //<a href='/'>obr</a> 
  )
}
/* function Country(props){  
    return (
      <>
       <h2>{props.name}</h2>   
       <Place part={props.location}/> 
       <Capital inf={props.capital}/> 
       Animals:
       <div style={{display: 'flex', flexDirection: 'row'}}>
       <Animals name={"Bison"} rare /> 
       <Animals name={"Stork"}/> 
       <Animals name={"Fox"}/> 
       <Animals name={"Bear"}/> 
       </div>
      </>
    )
    }
    
    
    class Place extends React.Component {
      render(){
        return <h6> {this.props.part}  </h6>    
      }
    }
    
    
    function Capital(props){
      return (
        <>
         <p>Capital is {props.inf.name} with population - {props.inf.population}</p>
        </>
      )
    }
    
    class Animals extends React.Component {
        render(){
          return <div style={{margin:'10px'}}>
            {this.props.rare && 
            <div style={{border: 'solid red'}}><p> {this.props.name} </p></div>}
             {!this.props.rare && 
            <p> {this.props.name} </p>}
          </div>
          
        }
    }
    
    
    function Author(){
      return (
        <>
         <h6 style={{margin:'200px'}}>Dasha, 2022</h6>
        </>
      )
    } */
    
//const Test1 = (props) => <div>{props.name}</div>
//const Test1 = ({ name }) => <div>{name}</div>

export default State;
// cd my-app
//npm start