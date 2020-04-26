import { LabeledInput } from "./LabeledInput";
import React from "react";
import { mount } from "enzyme";

describe("LabeledInput", () => {
  it("should call valueUpdated on update", () => {
    const onUpdate = jest.fn();
    const updatedValue = "testValue2";
    const el = mount(
      <LabeledInput
        label={"testLabelInput"}
        inputType="text"
        value="testValue"
        valueUpdated={(e) => onUpdate(e)}
      />
    );
    el.find("input").simulate("change", {
      target: { value: updatedValue },
    });

    expect(onUpdate).toHaveBeenCalled();
    expect(onUpdate.mock.calls[0][0]).toEqual(updatedValue);
  });
});
