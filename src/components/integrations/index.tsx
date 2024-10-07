"use client";
import { INTEGRATION_LIST_ITEMS } from "@/assets/constants/integrations";
import { Card, CardContent, CardDescription } from "../ui/card";
import Image from "next/image";
import IntegrationTrigger from "./IntegrationTrigger";

type Props = {
  connections: {
    stripe: boolean;
  };
};

const IntegrationsList = ({ connections }: Props) => {
  return (
    <div className="grid h-0 flex-1 grid-cols-1 content-start gap-3 lg:grid-cols-3 xl:grid-cols-4">
      {INTEGRATION_LIST_ITEMS.map((item) => (
        <Card key={item.id}>
          <CardContent className="flex flex-col gap-2 p-5">
            <div className="flex w-full items-start justify-between gap-x-20">
              <div className="">
                <div className="relative h-10 w-10">
                  <Image sizes="100vw" src={item.logo} alt="Logo" fill />
                </div>
                <h2 className="font-bold capitalize">{item.name}</h2>
              </div>
              <IntegrationTrigger
                connections={connections}
                title={item.title}
                descrioption={item.modalDescription}
                logo={item.logo}
                name={item.name}
              />
            </div>
            <CardDescription>{item.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default IntegrationsList;
