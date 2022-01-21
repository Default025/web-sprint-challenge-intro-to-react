// Write your Character component here
import React from 'react'
import axios from 'axios'
import Details from './Details';

const Characters = () => {
    const [character,setCharacter] = useState([]);
    const [currentCharName, setCurrentCharName] = useState(null);

  const openDetails = name => {
    setCurrentCharName(name)
  }

  const closeDetails = () => {
    setCurrentCharName(null)
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        console.log(res.data);
        setCharacter(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])


    return (
        <div className='container'>
          <h1>Star Wars Character list</h1>
          {character.map(info => (
            <character 
              info={info} 
              key={info.id} 
              openDetails={openDetails} 
            />)
          )}
          {
            currentCharName && <Details friendId={currentCharName} close={closeDetails} />
          }
        </div>
      )
}