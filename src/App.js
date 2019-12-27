import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Container from './components/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   faces
    // }
  }
  render(){
    return (
      <div>
        <Navbar />
        <Header />
        <Container />

        {/* {this.state.faces.map(face => (
          <Facecard 
          id= {face.id}
          image={face.image}
        
        />) */}
        )}
      </div>
    )
  }
}
export default App;