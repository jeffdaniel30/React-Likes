import logo from './logo.svg';
import './App.css';
import Likes from './components/Likes';
import { useState } from 'react';

let noMore = 0

function App() {

  let [totalLikes, setTotalLikes] = useState(0)
if (totalLikes<0){
  totalLikes = noMore
} else{
  console.log('only up from here')
}
  const addCount =() =>{
    let sum = totalLikes+1
    setTotalLikes(sum)
  }
  const subtractCount = () =>{
    let sub = totalLikes-=1
    setTotalLikes(sub)
  }
  return (
    <div className="App">
      <h1>hello boiiii</h1>
      <Likes addCount={addCount} subtractCount={subtractCount} totalLikes={totalLikes}/>
    </div>
  );
}

export default App;
