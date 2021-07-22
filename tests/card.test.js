import { shallow } from "enzyme";
import React from "react";

import Card from "../src/components/card"

describe("Card component unit testing", () => {
  it('Component shows the texts from the names props', () => {
    const card = shallow(
      <Card
        movie={{
          imdbID: 'test123',
          Title: 'Black Panther',
          Year: '2018',
          Poster: 'http://urlimage.com'
        }}
      />
    )

    expect(card.find('Link').prop('href')).toEqual('/movie/test123')
    expect(card.find('h2').text()).toEqual('Black Panther (2018)')
  })
})
