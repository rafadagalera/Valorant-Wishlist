import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data,setData] = useState([])
  const [records,setRecords] = useState([]) 
   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
          setData(res.data)
          setRecords(res.data)
        })
    .catch(err => console.log(err))
  },[])
  const Filter = (e) =>{
    setRecords(data.filter(f => f.name.toLowerCase().includes(e.target.value)))
  }
  return (
    <>
    <div>
      <div>
        <input type="text" className='form-control' onChange={Filter} placeholder='Search' />
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {records.map((d,i) =>(
              <tr key = {i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default App
