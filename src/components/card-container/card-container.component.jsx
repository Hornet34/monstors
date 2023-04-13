import { Component } from "react";
import './card-container.styles.css'

const CardContainer = (props)=>{
    const {name, id, email} = props.monster;

    return(
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt=""/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}


// class CardContainer extends Component{
//     render(){
//         const {name, id, email} = this.props.monster;

//         return(
//             <div className="card-container">
//                 <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt=""/>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         );
//     }
// }

export default CardContainer;