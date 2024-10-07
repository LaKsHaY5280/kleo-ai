import AllAppointments from "@/components/appointment/all-appointments";
import InfoBar from "@/components/infobar";
import Section from "@/components/section-label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { onGetAllBookingsForCurrentUser } from "@/lib/actions/appointment";
import { currentUser } from "@clerk/nextjs";

type Props = {};

const Page = async (props: Props) => {
  try {
    const user = await currentUser();

    if (!user) return null;
    const domainBookings = await onGetAllBookingsForCurrentUser(user.id);
    const today = new Date();

    if (!domainBookings)
      return (
        <div className="flex w-full justify-center">
          <p>No Appointments</p>
        </div>
      );

    const bookingsExistToday = domainBookings.bookings.filter(
      (booking: { date: { getDate: () => number } }) =>
        booking.date.getDate() === today.getDate(),
    );

    return (
      <>
        <InfoBar />
        <div className="grid h-0 flex-1 grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="overflow-y-auto lg:col-span-2">
            <AllAppointments bookings={domainBookings?.bookings} />
          </div>
          <div className="col-span-1">
            <Section
              label="Bookings For Today"
              message="All your bookings for today are mentioned below."
            />
            {bookingsExistToday.length ? (
              bookingsExistToday.map((booking) => (
                <Card
                  key={booking.id}
                  className="mt-4 overflow-hidden rounded-xl"
                >
                  <CardContent className="flex p-0">
                    <div className="flex w-4/12 items-center justify-center bg-peach py-10 text-xl font-bold">
                      {booking.slot}
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex w-full justify-between p-3">
                        <p className="text-sm">
                          created
                          <br />
                          {booking.createdAt.getHours()}{" "}
                          {booking.createdAt.getMinutes()}{" "}
                          {booking.createdAt.getHours() > 12 ? "PM" : "AM"}
                        </p>
                        <p className="text-sm">
                          Domain <br />
                          {booking.Customer?.Domain?.name}
                        </p>
                      </div>
                      <Separator orientation="horizontal" />
                      <div className="flex w-full items-center gap-2 p-3">
                        <Avatar>
                          <AvatarFallback>{booking.email[0]}</AvatarFallback>
                        </Avatar>
                        <p className="text-sm">{booking.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="flex w-full justify-center">
                <p>No Appointments For Today</p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error in appointment page:", error);
    return (
      <div className="flex w-full justify-center">
        <p>
          An error occurred while loading appointments. Please try again later.
        </p>
      </div>
    );
  }
};

export default Page;
