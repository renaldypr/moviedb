import { shallow } from "enzyme";
import React from "react";

import Footer from "../src/components/footer"

describe("Footer component unit testing", () => {
  it('Component shows the predetermined value', () => {
    const footer = shallow(<Footer />)

    expect(footer.find('a').prop('href')).toBe("https://github.com/renaldypr")
    expect(footer.find('span').text()).toBe(`Renaldy Pratama © ${new Date().getFullYear()}`)
  })
})
