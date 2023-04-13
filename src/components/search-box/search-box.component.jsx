import { Component } from "react";
import './search-box.styles.css';

const SearchBox = (props)=>{

    const {className, onSearchHandler} = props;

    return(
        <input className= {`search-box ${className}`}
        type='search' 
        placeholder='Search Monsters' 
        onChange={onSearchHandler}></input>
    )
}

// class SearchBox extends Component{
//     render(){
//         const {className, onSearchHandler} = this.props;
//         return(
//             <input className= {`search-box ${className}`}
//             type='search' 
//             placeholder='Search Monsters' 
//             onChange={onSearchHandler}></input>
//         )
//     }
// }

export default SearchBox;