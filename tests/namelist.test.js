import { shallow } from "enzyme";
import React from "react";

import NameList from "../src/components/namelist"

describe("NameList component unit testing", () => {
  it('Component shows the texts from the names props', () => {
    const namelist = shallow(<NameList names={['Hector', 'Tony', 'Chris']} />)

    expect(namelist.find('p').at(0).text()).toBe('Hector')
    expect(namelist.find('p').at(1).text()).toBe('Tony')
    expect(namelist.find('p').at(2).text()).toBe('Chris')
  })
})
