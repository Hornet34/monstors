import './App.css';
import { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// Functional

const App = ()=>{
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await data.json();
      setMonsters(users);
    }
    try {fetchData()}
    catch{console.log('Fetch Failed')};

  },[])

  useEffect(()=>{
    var filtered = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    setFilteredMonsters(filtered);
  },[searchField, monsters]);

  

  const onSearch = (event)=>{
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  }

  return(
    <div className="App">
        <h1 className='app-title'> Monsters Rolodex</h1>
        <SearchBox className='monster-search-box' onSearchHandler = {onSearch}/>
        <CardList monsters = {filteredMonsters}/>
    </div>
  );
}

// Class

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       Monsters:[],
//       searchField: ''
//     };
//   }
  
//   async componentDidMount(){
//     try{
//     const data = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await data.json();
//     this.setState(()=>{
//       return {Monsters: users}
//     }, ()=>{
//       console.log(this.state);
//     })
//     }
//     catch(err){
//       console.log('fetch failed');
//     }
//   }
  
//   onSearch = (event)=>{
//     const searchField = event.target.value;

//     this.setState(()=>{
//       return {searchField}
//     })
//   }

//   render(){

//     const { Monsters, searchField } = this.state;
//     const {onSearch} = this;

//     var filtered = Monsters.filter((monster)=>{
//       return monster.name.toLowerCase().includes(searchField.toLowerCase());
//     })

//     return (
      
//       <div className="App">
//       <h1 className='app-title'> Monsters Rolodex</h1>
//        <SearchBox className='monster-search-box' onSearchHandler = {onSearch}/>
//         <CardList monsters = {filtered}/>
//       </div>
//     );
//   }
  
// }

export default App;
