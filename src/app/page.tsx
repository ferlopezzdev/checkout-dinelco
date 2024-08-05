"use client";

import BackgroundImage from "./ui/BackgroundImage";
import BackgroundImages from "./ui/BackgroundImages";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PaymentForm } from "./ui/PaymentForm";

export default function Page() {
  const price = "12.725.600";

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden">
      <BackgroundImages />
      <Card className="w-full max-w-lg min-h-[500px] p-6 z-10 bg-white shadow-lg rounded-lg flex flex-col">
        <div className="flex justify-end mb-12">
          <BackgroundImage
            src="/images/logo-dinelco.svg"
            alt="logo dinelco"
            className="bg-no-repeat bg-contain"
          />
        </div>

        <CardHeader className="flex flex-col flex-none">
          <div className="flex justify-between items-start mt-4">
            <CardTitle className="text-lg text-primary">
              Pagá con tu tarjeta
            </CardTitle>
            <CardDescription className="flex flex-col text-gray-600">
              <span>Monto a pagar</span>
              <span className="text-primary text-lg font-semibold">{`Gs.${price}`}</span>
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col justify-center">
          <PaymentForm />
        </CardContent>
      </Card>
    </div>
  );
}
