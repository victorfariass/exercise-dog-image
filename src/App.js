import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:'',
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem("dogURL", this.state.data.message);
    const dogBreed = this.state.data.message.split("/")[4];
    alert(dogBreed);
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => this.setState({
        data: result,
      }));
  }

  render() {
    if (this.state.data === "") return "loading..."
    return (
      <div>
        <p>Doguinhos</p>
        <button onClick={this.fetchDog}>Novo Doguinho</button>
        <div>
          <img src={this.state.data.message} alt="Imagem Doguinho" />
        </div>
      </div>
    );
  }
}

export default App;
