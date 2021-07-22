import { shallow } from "enzyme";
import React from "react";

import Poster from "../src/components/poster"

describe("Poster component unit testing", () => {
  it('Component shows the correct props value', () => {
    const poster = shallow(
      <Poster
        src={'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'}
        alt={'Avengers'}
        width={285}
        height={420}
      />
    )

    expect(poster.find('Image').prop('height')).toEqual(420)
    expect(poster.find('Image').prop('width')).toEqual(285)
    expect(poster.find('Image').prop('alt')).toEqual('Avengers')
    expect(poster.find('Image').prop('src')).toEqual('https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg')
  })

  it('Component shows default image if src props is "N/A"', () => {
    const poster = shallow(
      <Poster
        src={'N/A'}
        alt={'Avengers'}
        width={285}
        height={420}
      />
    )

    expect(poster.find('Image').prop('src')).toEqual('https://via.placeholder.com/285x420')
  })
})
