
import './App.css';
import { Plans } from './Plans';

function App() {
  return (
    <div>
      <div className='container'>
      <div>
        <h1 className='header'>Plans for today</h1>
        </div>

        <div>
          <Plans />
        </div>
      </div>

      <div></div>
      <div></div>

    </div>
  );
}

export default App;
