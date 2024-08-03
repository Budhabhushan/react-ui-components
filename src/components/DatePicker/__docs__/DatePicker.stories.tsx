import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import DatePicker, { DatePickerProps } from "./Example";

export default {
  title: "DatePicker",
  component: DatePicker,
} as Meta;

const Template: StoryFn<DatePickerProps> = (args) => {
  const [date, setDate] = useState<string>("");

  return (
    <DatePicker
      {...args}
      value={date}
      onChange={(newDate) => setDate(newDate)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Select a date",
};

export const WithMinMaxDates = Template.bind({});
WithMinMaxDates.args = {
  placeholder: "Select a date",
  minDate: "2023-01-01",
  maxDate: "2023-12-31",
};
