import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { countChange } from './store';

function App() {
  let dispatch = useDispatch();
  let a = useSelector((state)=>state.state1)

  return (
    <div >
      
        <h1>{a.count}</h1>
        <button onClick={(e)=>{
          dispatch(countChange())
          console.log(a.count)
        }}>clink</button>
    </div>
  );
}

export default App;
