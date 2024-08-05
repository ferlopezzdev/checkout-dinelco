import { Input } from '@/components/ui/input';
import React from 'react';
import { useController, Control } from 'react-hook-form';

interface CvvFieldProps {
  control?: Control<any>;
  placeholder: string;
  className?: string;
}

export const CvvField: React.FC<CvvFieldProps> = ({ control, className }) => {
  const { field, fieldState } = useController({
    name: 'cvv',
    control,
  });

  return (
    <div className="mb-4 flex flex-col">
      <span className="block mb-2 text-sm">Código de seguridad</span>
      <Input
        {...field}
        placeholder="CVV"
        maxLength={3}
        className={`border p-2 rounded max-w-36 ${className} ${fieldState.error ? 'border-red-600' : ''}`}
      />
    </div>
  );
};
