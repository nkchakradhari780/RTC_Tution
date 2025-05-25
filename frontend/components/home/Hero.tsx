"use client";

import { motion } from "react-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, GraduationCap as Graduation } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a simple version during SSR to avoid hydration errors
  if (!mounted) {
    return (
      <section className="relative bg-gradient-to-r from-muted/50 to-background py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering Education for a Brighter Future
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Join RTC for quality education with experienced faculty, interactive learning, and personalized attention.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">Explore Courses</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-r from-muted/50 to-background py-20 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[60%] -left-[5%] w-[30%] h-[40%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              Excellence in Education
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Empowering Education for a{" "}
              <span className="text-primary">Brighter Future</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join RTC for quality education with experienced faculty, interactive learning, and personalized attention.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/courses">
                <Button size="lg" className="rounded-full">
                  Explore Courses
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#about">
                <Button variant="outline" size="lg" className="rounded-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-xl">
              <img
                src="https://images.pexels.com/photos/8473228/pexels-photo-8473228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students in classroom"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-card p-4 rounded-lg shadow-lg z-20 border">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Graduation className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">Trusted by</div>
                  <div className="text-2xl font-bold">5000+ Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}