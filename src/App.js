import './App.scss';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/atoms/Button/index.js';

function App() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.value);

  const handleIncrement = () => {
    dispatch({type: 'INCREMENT'})
  };

  const handleDecrement = () => {
    dispatch({type: 'DECREMENT'})
  };

  return (
    <div className="App">
      <div className="counter">
        <div className="instance">
          <Button 
            label="Increment"
            onClick={handleIncrement}
          />
        </div>

        <div>
          {value}
        </div>

        <div>
          <Button 
            label="Decrement"
            onClick={handleDecrement}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
