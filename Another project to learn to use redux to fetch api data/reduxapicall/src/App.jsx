import { useDispatch,useSelector } from 'react-redux'
import './App.css'
import { fetchTodos } from './store/slice/todo'

function App() {
  const dispatch=useDispatch()
  const state=useSelector((state)=>state.todo)
  // console.log("State",state)
  if(state.isLoading){
   return <h1>LOading...</h1>
  }
  return (
    <div className="app">
      <button onClick={e=>dispatch(fetchTodos())}>click me</button>
      {
        state.data && state.data.map((e)=>(
          <li>{e.title}</li>
        ))}
    </div>
  )
}

export default App
