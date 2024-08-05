import React from 'react';
import { useController, Control } from 'react-hook-form';
import { InputMask } from './InputMask';

const handleExpiryDateChange = (value: string) => {
  const unmask = (value: string) => value.replace(/[^\d]/g, '');
  const mask = (value: string, limit: number, separator: string): string => {
    const output: string[] = [];
    for (let i = 0; i < value.length; i++) {
      if (i !== 0 && i % limit === 0) {
        output.push(separator);
      }
      output.push(value[i]);
    }
    return output.join('');
  };

  const unmaskedValue = unmask(value);
  if (unmaskedValue.length <= 4) {
    return mask(unmaskedValue, 2, '/');
  }
  return value;
};

interface ExpiryDateFieldProps {
  control?: Control<any>;
  placeholder: string;
  className?: string;
}

export const ExpiryDateField: React.FC<ExpiryDateFieldProps> = ({ control, className }) => {
  const { field, fieldState } = useController({
    name: 'expiryDate',
    control,
  });

  return (
    <div className="mb-4 flex flex-col">
      <span className="block mb-2  text-sm">Fecha de expiración</span>
      <InputMask
        value={field.value}
        onChange={(value) => field.onChange(value)}
        placeholder="MM/AA"
        maxLength={5}
        maskFunction={handleExpiryDateChange}
        className={`${className} ${fieldState.error ? 'border-red-600' : ''}`}
      />
    </div>
  );
};
