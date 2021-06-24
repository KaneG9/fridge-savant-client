import Meal from '.'
import { render } from "@testing-library/react"
import * as StringUtils from "../../lib/string-utils"


jest.mock("../../lib/string-utils")



let mockMeal 

describe("<Meal/>", () => {
  beforeEach(() => {
    mockMeal = {
      id: 1,
      image: "http://fun.pics/123",
      sourceUrl: "http://fun.world/hello",
      title: "fun world",
      readyInMinutes: 5,
      extendedIngredients: ['pear']
    }

    StringUtils.capitalizeFirstLetter.mockImplementation(() => "Test ingredient")
  })

  it("renders a meal correctly", () => {
    const rendered = render(<Meal meal={mockMeal}/>)

    expect(rendered.getByAltText("your meal")).toHaveAttribute("src", mockMeal.image)
    expect(rendered.getByText("fun world")).toBeInTheDocument()
    expect(rendered.getByText("Test ingredient")).toBeInTheDocument()
    expect(rendered.getByText(`Ready in 5 minutes`)).toBeTruthy()
  })
})