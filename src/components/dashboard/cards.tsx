type Props = {
  title: string;
  value: number;
  icon: JSX.Element;
  sales?: boolean;
};

const DashboardCard = ({ icon, title, value, sales }: Props) => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-lg border-[1px] border-border bg-cream py-10 pl-10 pr-10 dark:bg-muted md:w-fit md:pl-10 md:pr-20">
      <div className="flex gap-3">
        {icon}
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-4xl font-bold">
        {sales && "$"}
        {value}
      </p>
    </div>
  );
};

export default DashboardCard;
