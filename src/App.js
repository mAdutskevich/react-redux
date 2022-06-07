import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addClient, removeLastClient, fetchClients } from 'redux/actions/clientActions';
import { increment, decrement } from 'redux/actions/counterActions';

import Button from 'components/atoms/Button/index.js';

function App() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.counter.value);
  const clients = useSelector(state => state.clients.clients);
  const fetchedClients = useSelector(state => state.clients.users);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAdd = () => {
    const newClient = prompt('Add new client');

    if (newClient) {
      dispatch(addClient(newClient));
    }
  };

  const handleRemoveLast = () => {
    dispatch(removeLastClient());
  };

  const handleAddManyClients = () => {
    dispatch(fetchClients());
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

      <div className="clients">
        <div className="instance">
          <Button 
            label="Add Client"
            onClick={handleAdd}
          />
        </div>

        <div>
          {clients.join('-')}
        </div>

        <div className="instance">
          <Button 
            label="Remove last"
            onClick={handleRemoveLast}
          />
        </div>
      </div>

      <div className="users">
        <div className="instance">
          <Button 
            label="Add many clients"
            onClick={handleAddManyClients}
          />
        </div>

        <div className="instance">
          {fetchedClients.map((client, index) => (
            <span key={index}>{`${client.name} - `}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
