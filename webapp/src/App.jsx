import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data,setData] = useState([])
  const [records,setRecords] = useState([]) 
   useEffect(()=>{
    axios.get('https://valorant-api.com/v1/weapons/skins')
    .then(res=>{
          setData(res.data.data)
          setRecords(res.data.data)
        })
    .catch(err => console.log(err))
  },[])
  const Filter = (e) =>{
    setRecords(data.filter(f => f.displayName.toLowerCase().includes(e.target.value)))
  }
  console.log(records)
  console.log()
    return (
    <>
    <div>
      <div>
        <input type="text" className='form-control' onChange={Filter} placeholder='Busque a Skin pelo nome da Arma ou do Bundle' />
        <table className='table'>
          <thead>
            <tr>
              <th>Nome da Arma</th>
              <th>Imagem da Arma</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d) =>(
              <tr key = {d.uuid}>
                <td>{d.displayName}</td>
                <td><img src={d.displayIcon} alt="Imagem da arma"/></td>
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
