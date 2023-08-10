import React from "react";

interface FormBoxProps {
  labelText: React.ReactNode;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  placeholder: string;
}

export default function FormBox({ labelText, value, onChange, placeholder }: FormBoxProps) {
  return (
    <div className="form-box">
      <label htmlFor="search">{labelText}</label>
      <input placeholder={placeholder} id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
}
