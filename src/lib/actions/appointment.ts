import { prisma } from "@/lib/prisma";

export const onGetAllBookingsForCurrentUser = async (userId: string) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: {
        userId: userId,
      },
      include: {
        Customer: {
          include: {
            Domain: true,
          },
        },
      },
    });

    return { bookings };
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};
