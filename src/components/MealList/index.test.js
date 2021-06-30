import MealList from ".";
import { render } from "@testing-library/react";
import * as StringUtils from "../../lib/string-utils"


let defaultProps;

jest.mock("../../lib/string-utils")

describe("<MealList/>", () => {
  beforeEach(() => {
    defaultProps = {
      mealData: [
      {
        id: 1,
        image: 'http://fun.pics/123',
        title: 'test1',
        extendedIngredients: ['apple'],
        readyInMinutes: 5
      },
      {
        id: 2,
        image: 'http://fun.pics/456',
        title: 'test2',
        extendedIngredients: ['pear'],
        readyInMinutes: 5
      }
      ]
    }

    StringUtils.capitalizeFirstLetter.mockImplementation(() => "Test ingredient")
  })

  it('Creates a meal component for each meal', () => {
    const rendered = render(<MealList mealData={defaultProps.mealData}/>)


    expect(rendered.getByText(/test1/i)).toBeInTheDocument();
    expect(rendered.getByText(/test2/i)).toBeInTheDocument();
    expect(StringUtils.capitalizeFirstLetter).toHaveBeenCalledTimes(2); //this should be in meal component test

  })
  

  })

