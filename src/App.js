import { useState, useEffect } from 'react';

import Footer from './components/Footer';
import Card from './components/Card';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const section = [];
  useEffect(()=>{
    fetch('https://ipo-cp.ru/api/v1/courses?limit=12')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setData(data.data);
    });
  }, [])
  data.forEach(el => 
    section[el.title] 
    ? section[el.title].push(el) 
    : section[el.title] = [el]
  )
  const programms = Object.keys(section)
  
  return (
    <div className="App">
      <div className="layout">
        <div className="title">Специализированные дисциплины</div>
        {programms&&programms.map((i,index)=>
          <div key={index}>
            <div className="title_programm">{i}</div>
            <div className="programms">{section[i].map((el,index)=>
                <Card key={el._id} el={el} index={index}/>
              )}
              </div>
          </div>
        )}
      <Footer/>
      </div>
    </div>
  );
}

export default App;