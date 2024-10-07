import {
  getUserBalance,
  getUserClients,
  getUserPlanInfo,
  getUserTotalProductPrices,
  getUserTransactions,
} from "@/lib/actions/dashboard";
import DashboardCard from "@/components/dashboard/cards";
import { PlanUsage } from "@/components/dashboard/plan-usage";
import InfoBar from "@/components/infobar";
import { Separator } from "@/components/ui/separator";
import CalIcon from "@/assets/icons/cal-icon";
import EmailIcon from "@/assets/icons/email-icon";
import PersonIcon from "@/assets/icons/person-icon";
import { TransactionsIcon } from "@/assets/icons/transactions-icon";
import { DollarSign } from "lucide-react";
import { getUserAppointments } from "@/lib/actions/appointment";

type Props = {};

const Page = async (props: Props) => {
  const clients = await getUserClients();
  const sales = await getUserBalance();
  const bookings = await getUserAppointments();
  const plan = await getUserPlanInfo();
  const transactions = await getUserTransactions();
  const products = await getUserTotalProductPrices();

  return (
    <>
      <InfoBar />
      <div className="chat-window h-0 w-full flex-1 overflow-y-auto">
        <div className="flex flex-wrap gap-5">
          <DashboardCard
            value={clients || 0}
            title="Potential Clients"
            icon={<PersonIcon />}
          />
          <DashboardCard
            value={products! * clients! || 0}
            sales
            title="Pipline Value"
            icon={<DollarSign />}
          />
          <DashboardCard
            value={bookings || 0}
            title="Appointments"
            icon={<CalIcon />}
          />
          <DashboardCard
            value={sales || 0}
            sales
            title="Total Sales"
            icon={<DollarSign />}
          />
        </div>
        <div className="grid w-full grid-cols-1 py-10 lg:grid-cols-2">
          <div>
            <div>
              <h2 className="text-2xl font-bold">Plan Usage</h2>
              <p className="text-sm font-light">
                A detailed overview of your metrics, usage, customers and more
              </p>
            </div>
            <PlanUsage
              plan={plan?.plan!}
              credits={plan?.credits || 0}
              domains={plan?.domains || 0}
              clients={clients || 0}
            />
          </div>
          <div className="flex flex-col">
            <div className="mb-5 flex w-full items-start justify-between">
              <div className="flex items-center gap-3">
                <TransactionsIcon />
                <p className="font-bold">Recent Transactions</p>
              </div>
              {/* <p className="text-sm">See more</p> */}
            </div>
            <Separator orientation="horizontal" />
            {transactions &&
              transactions.data.map((transaction) => (
                <div
                  className="flex w-full items-center justify-between gap-3 border-b-2 py-5"
                  key={transaction.id}
                >
                  <p className="font-bold">
                    {transaction.calculated_statement_descriptor}
                  </p>
                  <p className="text-xl font-bold">
                    ${transaction.amount / 100}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
