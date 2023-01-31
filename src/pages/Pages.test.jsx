import { render,screen } from "@testing-library/react"
import Cuisine from "./Cuisine.jsx";
import Home from "./Home.jsx";
import Recipe from "./Recipe.jsx";
import Results from "./Results.jsx";

describe('Home Component', ()=> {
  it('should render Home Component', async() => {
    render(<Home/>);
  })
})

describe('Cuisine Component', ()=> {
  it('should render Cuisine Component', async() => {
    render(<Cuisine/>);
  })
})

describe('Results Component', ()=> {
  it('should render Results Component', async() => {
    render(<Results/>);
  })
})

describe('Recipe Component', ()=> {
  it('should render Recipe Component', async() => {
    render(<Recipe/>)
    expect(screen.getByText("Details")).toBeInTheDocument()
    expect(screen.getByText("Ingredient")).toBeInTheDocument()
  })
})