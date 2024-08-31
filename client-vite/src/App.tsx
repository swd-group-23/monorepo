import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DetailsCardComponent from './components/DetailsCardComponent';
import axios from 'axios';
import './App.css'
import { UserInfo } from '../types';

function App() {
  const [recordData, setRecordData] = useState<UserInfo[]>([]);
  const base_url = import.meta.env.VITE_REACT_APP_NODE_ENV === 'development' ? import.meta.env.VITE_REACT_APP_LOCAL_BASE_URL : import.meta.env.VITE_REACT_APP_SERVER_BASE_URL;
  console.log(base_url);
  useEffect(() => {
    axios.get<UserInfo[]>(`${base_url}/getUsers`).then(res => { setRecordData(res.data);}).catch(err => alert(`Some error occured ==>${err}`));
  
   }, []);
 

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="col">
            <h3 className="text-center">Users List</h3>
            <ul>
              {recordData.map((r, i) => <li key={i}><DetailsCardComponent userInfo={{
                name:r.name,
                email: r.email,
                date: r.date
              }} /></li>)}
            </ul>
          </div>
    </>
  )
}

export default App
