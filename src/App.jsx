import { Link, useNavigate } from "react-router-dom"
function App() {
  const navigate = useNavigate();
  return (
    <> 
      <p>
        Click on the Vite and React logos to learn more
      </p>
      <h1 className="text-3xl font-bold underline mb-10">
      Hello world!
    </h1>
    <button type="submit" onClick={() => navigate('/users')} className="border border-black px-4 py-2 rounded-md text-lg bg-lime-400">Viwe Users</button>
    </>
  )
}

export default App
