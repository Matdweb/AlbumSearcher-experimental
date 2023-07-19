import { handler } from 'daisyui';
import './input.css'
import MusicCard from './MusicCard'
import { useState } from 'react';

function App() {
  const clientId = process.env
  console.log(clientId);
  console.log(clientSecret);

  const array = [1, 2, 3, 4, 5, 6];

  const [searchInput, setSearchhInput] = useState('');

  const handleChange = ({ target }) => {
    setSearchhInput(target.value);
    console.log(searchInput);
  }

  const handleSearch = () => {
    console.log(searchInput);
    setSearchhInput("");
  }

  return (
    <>
      <div className='bg-gray-950 w-full h-full'>

        <div className='p-5'>
          <input type="text" name='singer' placeholder="Type some singer here" className="input input-bordered input-primary w-full max-w-xs" onChange={handleChange} value={searchInput} />
          <button className='btn' onClick={handleSearch}>Search</button>
        </div>

        <div className='flex flex-row flex-wrap gap-4 p-5'>
          {array.map((element, i) => {
            return <MusicCard key={i} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
