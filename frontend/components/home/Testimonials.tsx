"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  course: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Ramirez",
      role: "Engineering Student",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The physics course at RTC transformed my understanding of the subject. The interactive approach and detailed explanations made complex concepts easy to grasp.",
      course: "Advanced Physics"
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "Medical Student",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "As a pre-med student, the biology course at RTC was exactly what I needed. The comprehensive curriculum and attentive faculty prepared me perfectly for my exams.",
      course: "Human Biology"
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Data Scientist",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The computer science program is outstanding. I went from basic coding knowledge to landing a job as a junior developer within months of completing my course.",
      course: "Data Structures & Algorithms"
    },
    {
      id: 4,
      name: "Sophia Chen",
      role: "High School Student",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The mathematics course helped me excel in my AP exams. The teachers made even the most difficult concepts accessible and were always available to clear my doubts.",
      course: "Advanced Mathematics"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-lg text-muted-foreground">
            Hear from students who have transformed their learning journey with RTC
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-background">
            <CardContent className="p-8 md:p-12">
              <div className="text-primary mb-6">
                <Quote className="h-12 w-12 opacity-20" />
              </div>
              
              <div className="grid md:grid-cols-[1fr_3fr] gap-6 items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-muted mb-4">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold">{testimonials[activeIndex].name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{testimonials[activeIndex].role}</p>
                  <p className="text-xs text-primary">{testimonials[activeIndex].course}</p>
                </div>
                
                <div>
                  <blockquote className="text-lg md:text-xl italic">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
                )}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none">
            <Button
              size="icon"
              variant="ghost"
              onClick={prevTestimonial}
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-sm pointer-events-auto"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={nextTestimonial}
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-sm pointer-events-auto"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}