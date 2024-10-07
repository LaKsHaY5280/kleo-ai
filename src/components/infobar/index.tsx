"use client";
import BreadCrumb from "./bread-crumb";
import { Card } from "../ui/card";
import { Headphones, Star, Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useUser } from "@clerk/nextjs";
import { Spinner } from "../spinner";

const InfoBar = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    // Display a loading indicator or a message if the user is not signed in
    return <Spinner />;
  }

  return (
    <div className="mb-8 flex w-full items-center justify-between py-1 pr-3">
      <BreadCrumb />
    </div>
  );
};

export default InfoBar;
