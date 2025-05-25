"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import StudentDashboard from "@/components/dashboard/StudentDashboard";
export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // router.push("/login");
    }
  }, [user, router]);

  if (user === undefined) {
    // While loading, show a loading state
    return <div>Loading...</div>;
  }

  // if (!user) {
  //   // If after loading, user is not logged in, you might redirect
  //   return <div>User not found</div>;
  // }

  return (
    <>
      <AdminDashboard />
      <div className="container mx-auto px-4 py-8"></div>
    </>
  );
}
