import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { NumberField } from "./form/NumberField";
import { ExpiryDateField } from "./form/ExpiryDateField";
import { CvvField } from "./form/CvvField";
import CvvHelp from "./form/CvvInfo";

// Definición del esquema de validación del formulario
const formSchema = z.object({
  cardNumber: z.string().nonempty("Número de tarjeta es obligatorio."),
  expiryDate: z.string().nonempty("Fecha de expiración es obligatoria."),
  cvv: z.string().nonempty("CVV es obligatorio."),
});

type FormData = z.infer<typeof formSchema>;

export function PaymentForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const { errors } = form.formState;

  const onSubmit = (values: FormData) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="font-primary space-y-8"
      >
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <NumberField
                  {...field}
                  placeholder="Número de tarjeta"
                  className={errors.cardNumber ? "border-red-600" : ""}
                />
              </FormControl>
              <FormMessage className="text-red-600">
                {errors.cardNumber?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="expiryDate"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <ExpiryDateField
                    {...field}
                    placeholder="MM/AA"
                    className={errors.expiryDate ? "border-red-600" : ""}
                  />
                </FormControl>
                <FormMessage className="text-red-600">
                  {errors.expiryDate?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <CvvField
                    {...field}
                    placeholder="CVV"
                    className={errors.cvv ? "border-red-600" : ""}
                  />
                </FormControl>
                <FormMessage className="text-red-600">
                  {errors.cvv?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <div className="flex items-center">
            <CvvHelp />
          </div>
        </div>
        <Button
          variant="ripple"
          type="submit"
          className="w-full bg-primary text-white py-2 rounded"
        >
          Pagar
        </Button>
      </form>
    </Form>
  );
}
