import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const profile = {
  id: String,
  fname: String,
  lname: String,
  //timeProfileCreated: Time,
  category1Interest: Number,
  category2Interest: Number,
  category3Interest: Number,
  category4Interest: Number,
  category5Interest: Number
};

const post = {
  id: String,
  //timePostCreated: Time,
  //tags: tagList
};

export default App;
