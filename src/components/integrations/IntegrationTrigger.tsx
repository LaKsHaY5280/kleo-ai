import { Card } from "../ui/card";
import { CloudIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import Modal from "../mondal";
import { IntegrationModalBody } from "./integration-modal-body";
import { StaticImageData } from "next/image";

type Props = {
  name: "stripe";
  logo: StaticImageData | string;
  title: string;
  descrioption: string;
  connections: {
    [key in "stripe"]: boolean;
  };
};

const IntegrationTrigger = ({
  name,
  logo,
  title,
  descrioption,
  connections,
}: Props) => {
  return (
    <Modal
      title={title}
      type="Integration"
      logo={logo}
      description={descrioption}
      trigger={
        <Card className="flex cursor-pointer gap-2 px-3 py-2">
          <CloudIcon />
          {connections[name] ? "connected" : "connect"}
        </Card>
      }
    >
      <Separator orientation="horizontal" />
      <IntegrationModalBody connections={connections} type={name} />
    </Modal>
  );
};

export default IntegrationTrigger;
