import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, CalendarDays, Users } from "lucide-react";
import { courses } from "@/lib/data";

export default function FeaturedCourses() {
  const featuredCourses = courses.filter(course => course.featured);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Courses</h2>
          <p className="text-lg text-muted-foreground">
            Explore our highly-rated courses taught by expert instructors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden transition-all hover:shadow-md flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="font-medium">
                    {course.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-5 flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                  <span className="text-lg font-bold text-primary">${course.price}</span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{course.lectures} Lectures</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Badge variant="outline" className="font-normal text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.instructor}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-5 pt-0 flex gap-4">
                <Button variant="outline" className="flex-1">
                  <Link href={`/courses/${course.slug}`} className="w-full">
                    Details
                  </Link>
                </Button>
                <Button className="flex-1">Enroll Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/courses">
            <Button size="lg">View All Courses</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}