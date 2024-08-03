import React, { useState } from "react";
import styled from "styled-components";

export type DatePickerProps = {
  placeholder?: string;
  value?: string;
  onChange?: (date: string) => void;
  minDate?: string;
  maxDate?: string;
};

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`;

// Date picker component
const DatePicker: React.FC<DatePickerProps> = ({
  placeholder = "Select a date",
  value = "",
  onChange = () => {},
  minDate,
  maxDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setSelectedDate(date);
    onChange(date);
  };

  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Input
        type="date"
        placeholder={placeholder}
        value={selectedDate}
        onChange={handleInputChange}
        onClick={handleToggleCalendar}
        min={minDate}
        max={maxDate}
      />
      {isOpen}
    </Container>
  );
};

export default DatePicker;
