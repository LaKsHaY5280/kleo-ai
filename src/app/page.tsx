import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/assets/constants/landing-page";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="bg-white">
      <NavBar />
      <section>
        <div className="mt-[80px] flex flex-col items-center justify-center gap-4">
          <span className="rounded-full bg-orange/20 px-4 py-2 text-sm text-orange">
            An AI powered sales assistant chatbot
          </span>
          <Image
            src="/images/corinna-ai-logo.png"
            width={500}
            height={100}
            alt="Logo"
            className="max-w-lg object-contain"
          />
          <p className="max-w-[500px] text-center">
            Your AI powered sales assistant! Embed Corinna AI into any website
            with just a snippet of code!
          </p>
          <Button className="bg-orange px-4 font-bold text-white">
            Start For Free
          </Button>
          <Image
            src="/images/iphonecorinna.png"
            width={400}
            height={100}
            alt="Logo"
            className="max-w-lg object-contain"
          />
        </div>
      </section>
      <section className="mt-10 flex flex-col items-center justify-center gap-4">
        <h2 className="text-center text-4xl"> Choose what fits you right</h2>
        <p className="max-w-lg text-center text-muted-foreground">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not ready to commit you can get started for free.
        </p>
      </section>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx(
              "flex w-[300px] flex-col justify-between bg-stone-300",
              {
                "border-2 border-primary": card.title === "Unlimited",
              },
            )}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div key={feature} className="flex gap-2">
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashbord?plan=${card.title}`}
                className="w-full rounded-md border-2 border-orange bg-[#f3d299] p-2 text-center font-bold"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="mt-28 flex flex-col items-center justify-center gap-4">
        <h2 className="text-center text-4xl">News Room</h2>
        <p className="max-w-lg text-center text-muted-foreground">
          Explore our insights on AI, technology, and optimizing your business.
        </p>
      </section>
    </main>
  );
}
