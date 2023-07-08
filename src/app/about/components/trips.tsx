import { prisma } from "@/lib/primas";
import React from "react";

const getTrips = async () => {
  const trips = await prisma.trip.findMany({});
  return trips;
};
const Trip = async () => {
  const data = await getTrips();

  console.log({ data });

  return <div>Trip</div>;
};
export default Trip;
