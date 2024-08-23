import { onGetSubscriptionPlan } from "@/lib/actions/settings";
import Section from "../section-label";
import { Card, CardContent, CardDescription } from "../ui/card";
import { CheckCircle2, Plus } from "lucide-react";
import { pricingCards } from "@/assets/constants/landing-page";
import Modal from "../mondal";
import SubscriptionForm from "../forms/settings/subscription-form";
import Image from "next/image";

const BillingSettings = async () => {
  const plan = await onGetSubscriptionPlan();
  const planFeatures = pricingCards.find(
    (card: { title: string; features: string[] }) =>
      card.title.toUpperCase() === plan?.toUpperCase(),
  )?.features;
  if (!planFeatures) return;

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
      <div className="lg:col-span-1">
        <Section
          label="Billing settings"
          message="Add payment information, upgrade and modify your plan."
        />
      </div>
      <div className="flex justify-start lg:col-span-2 lg:justify-center">
        {/* <Modal
          title="Choose A Plan"
          description="Tell us about yourself! What do you do? Let's tailor your experience so it best suits you."
          trigger={
            plan && plan === "STANDARD" ? (
              <Card className="flex h-[270px] w-full cursor-pointer items-center justify-center border-dashed border-gray-400 bg-cream">
                <CardContent className="flex items-center gap-2">
                  <div className="rounded-full border-2 p-1">
                    <Plus className="text-gray-400" />
                  </div>
                  <CardDescription className="font-semibold">
                    Upgrade Plan
                  </CardDescription>
                </CardContent>
              </Card>
            ) : (
              <Image
                src="/images/creditcard.png"
                width={400}
                height={400}
                alt="image"
              />
            )
          }
        >
          <SubscriptionForm plan={plan!} />
        </Modal> */}
      </div>
      <div className="lg:col-span-2">
        <h3 className="mb-2 text-xl font-semibold">Current Plan</h3>
        <p className="text-sm font-semibold">{plan}</p>
        <div className="mt-2 flex flex-col gap-2">
          {planFeatures.map((feature) => (
            <div key={feature} className="flex gap-2">
              <CheckCircle2 className="text-muted-foreground" />
              <p className="text-muted-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillingSettings;
