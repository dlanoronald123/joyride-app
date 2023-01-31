import Category from "./components/Category";
import Geolocation from "./components/Geolocation";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { ImSpoonKnife } from "react-icons/im";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <ImSpoonKnife></ImSpoonKnife>
        <Logo to={"/"}>RECIPE APP</Logo>
      </Nav>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
      <Geolocation/>
    </div>
  );
}


const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(223, 221, 221);;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(223, 221, 221);;

  svg{
    font-size: 2rem;
  }
`

export default App;

