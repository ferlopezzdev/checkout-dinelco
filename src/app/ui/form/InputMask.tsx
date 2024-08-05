
import { Input } from '@/components/ui/input';
import React from 'react';

interface InputMaskProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  maxLength: number;
  className?: string;
  maskFunction: (value: string) => string;
}

export const InputMask: React.FC<InputMaskProps> = ({
  value,
  onChange,
  placeholder,
  maxLength,
  maskFunction,
  className = ''  // Default to an empty string if className is undefined
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = maskFunction(e.target.value);
    onChange(maskedValue);
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className={`border p-2 rounded ${className}`}
    />
  );
};
