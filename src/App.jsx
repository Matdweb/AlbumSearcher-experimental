import './input.css'
import MusicCard from './MusicCard'

function App() {

  const array = [1,2,3,4,5,6];

  return (
    <>
      <div className='bg-gray-950 w-full h-full'>

        <div className='p-5'>
          <input type="text" name='singer' placeholder="Type some singer here" className="input input-bordered input-primary w-full max-w-xs" />
          <button className='btn'>Search</button>
        </div>

        <div className='flex flex-row flex-wrap gap-4 p-5'>
          {array.map((element) => {
            return <MusicCard/>
          })}
        </div>
      </div>
    </>
  )
}

export default App
