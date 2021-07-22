import { shallow } from "enzyme";
import React from "react";

import Bullet from "../src/components/bullet"

describe("Bullet component unit testing", () => {
  it('Component shows "John Smith"', () => {
    const bullet = shallow(<Bullet>John Smith</Bullet>)

    expect(bullet.find("div").text()).toEqual("John Smith")
  })
})
