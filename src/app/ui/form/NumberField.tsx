import React from 'react';
import { useController, Control } from 'react-hook-form';
import { InputMask } from './InputMask';

const handleNumberChange = (value: string) => {
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
  if (unmaskedValue.length <= 16) {
    return mask(unmaskedValue, 4, ' ');
  }
  return value;
};

interface NumberFieldProps {
  control?: Control<any>;
  placeholder: string;
  className?: string;
}

export const NumberField: React.FC<NumberFieldProps> = ({ control, className }) => {
  const { field, fieldState } = useController({
    name: 'cardNumber',
    control,
  });

  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="block mb-2 text-sm">Número de tarjeta</label>
      <InputMask
        value={field.value}
        onChange={(value) => field.onChange(value)}
        placeholder="Número de tarjeta"
        maxLength={19}
        maskFunction={handleNumberChange}
        className={`${className} ${fieldState.error ? 'border-red-600' : ''}`}
      />
    </div>
  );
};
