import './App.scss';
import helloIcon from 'images/hello.svg';

import Button from 'components/atoms/Button/index.js';

function App() {
  return (
    <div className="App">
      <div>
        <Button 
          label="Almost before"
        />
      </div>
      
      <div>
        <img src={helloIcon}/>
      </div>

      <div className='ImageBg'>

      </div>
    </div>
  );
}

export default App;
