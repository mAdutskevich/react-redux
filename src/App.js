import './App.scss';
// import helloIcon from 'images/hello.svg';

// import Button from 'components/atoms/Button/index.js';
import Counter from 'components/molecules/Counter';

function App() {
  return (
    <div className="app">
      <div className="counerWrapper">
        <Counter />
      </div>
      {/* <div>
        <Button 
          label="Almost before"
        />
      </div>
      
      <div>
        <img src={helloIcon}/>
      </div>

      <div className='imageBg' /> */}
    </div>
  );
}

export default App;
