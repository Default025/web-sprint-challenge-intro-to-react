import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Details(props) {
  const { CharName, close } = props;
  const [details, setDetails] = useState(null);

  // 👉 TASK 7 - Create a side effect 📲 that runs when a particular variable changes:
  // Whenever props.friendId updates we should trigger a fetch for details of the friend.
  // The URL should end up looking like `http://localhost:4000/friends/1?api_key=xyz`
  // On success, shove the details of the friend in `details` slice of state
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setDetails(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [CharName])

  return (
    <div className='container'>
      <h2>Details of {CharName}):</h2>
      {
        details &&
        <>
          <p>Gender:{details.gender}</p>
          <p>Height:{details.height}</p>
          <p>Mass:{details.mass}</p>
          <p>Birth Year:{details.birth_year}</p>
          <p>Eye Color:{details.eye_color}</p>
          <p>Hair Color:{details.hair_color}</p>
          <p>Skin Color:{details.skin_color}</p>
          
        </>
      }
      <button onClick={close}>Close</button>
    </div>
  )
}