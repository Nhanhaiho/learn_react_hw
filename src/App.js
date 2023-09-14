import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import SmallTitle from './components/SmallTitle';
import NavBar from './components/NavBar';
import Box from './components/Box';
import Footer from './components/Footer';

function App() {
  return (
    <div class="app">
      <Header></Header>
      <div class="body">
        <div class="information">
          <Title></Title>
          <div class="list_titles">
            <SmallTitle></SmallTitle>
            <SmallTitle></SmallTitle>
            <SmallTitle></SmallTitle>
          </div>
        </div>
        <NavBar></NavBar>
      </div>
      <divv class="boxes">
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </divv>
      <Footer></Footer>
    </div>
  );
}

export default App;
