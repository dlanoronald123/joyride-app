import { render,screen } from "@testing-library/react"
import Dessert from "../components/Dessert.jsx";
import Random from "./Random.jsx"

describe('Random Component', ()=> {
  it('should render Featured data list when api responds', async() => {
    render(<Random/>);
    expect(screen.getByText("Featured Recipes")).toBeInTheDocument()
  })
})

describe('Dessert Component', ()=> {
  it('should render Dessert data list when api responds', async() => {
    render(<Dessert/>);
    expect(screen.getByText("Sweet Indulgence")).toBeInTheDocument()
  })
})