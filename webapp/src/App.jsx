import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [records, setRecords] = useState([])
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/weapons/skins')
      .then(res => {
        setData(res.data.data)
        setRecords(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  const Filter = (e) => {
    setRecords(data.filter(f => f.displayName.toLowerCase().includes(e.target.value)))
  }

  const addToWishlist = (item) => {
    // Check if the item already exists in the wishlist
    if (!wishlist.find(wishlistItem => wishlistItem.uuid === item.uuid)) {
      setWishlist([...wishlist, item])
    } else {
      alert("Item is already in the wishlist!")
    }
  }

  return (
    <>
      <div>
        <div>
          <input type="text" className='form-control' onChange={Filter} placeholder='Search for skins by weapon name or bundle name' />
          <table className='table'>
            <thead>
              <tr>
                <th>Weapon Name</th>
                <th>Weapon Image</th>
                <th>Add to Wishlist</th>
              </tr>
            </thead>
            <tbody>
              {records.map((d) => (
                <tr key={d.uuid}>
                  <td>{d.displayName}</td>
                  <td><img src={d.displayIcon} alt="Weapon Image" /></td>
                  <td><button onClick={() => addToWishlist(d)}>Add to Wishlist</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2>Wishlist</h2>
        <ul>
          {wishlist.map((item, i) => (
            <li key={i}>{item.displayName}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
