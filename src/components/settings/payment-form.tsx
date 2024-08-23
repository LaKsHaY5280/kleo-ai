"use client";
import { CardDescription } from "../ui/card";
import { Loader } from "../loader";
import { PaymentElement } from "@stripe/react-stripe-js";
import { Button } from "../ui/button";
import { useCompletePayment } from "@/hooks/billing/use-billing";

type PaymentFormProps = {
  plan: "STANDARD" | "PRO" | "ULTIMATE";
};

export const PaymentForm = ({ plan }: PaymentFormProps) => {
  const { processing, onMakePayment } = useCompletePayment(plan);
  return (
    <form onSubmit={onMakePayment} className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-semibold text-black">Payment Method</h2>
        <CardDescription>Enter your card details</CardDescription>
      </div>
      <PaymentElement />
      <Button type="submit">
        <Loader loading={processing}>Pay</Loader>
      </Button>
    </form>
  );
};
