import React, { useState, useEffect } from 'react';
import { getMenuData } from '../services/menuData';

const Users = () => {

//   const [info, setInfo] = useState([]);
//   useEffect(() => {
//     fetch('http://localhost:8090/api/discapTrainingUser/users')
//     .then(response => response.json()).then(data => setInfo(data.results))
//   },[])

  const [info, setInfo] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await getMenuData();
      setInfo(result);
    }
    fetchData();
  }, []);
  
  return (
    <>
    {info ? (
    <div>
        {info.map(item =>(
          <>
            <h2>{item.name} {item.surname}</h2>
            <p>{item.registerType}</p>
            <p>{item.id}</p>
          </>
          
        ))}
      </div>
    ) : (<></>)}
    </>
  )
}

export default Users