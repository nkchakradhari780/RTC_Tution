import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, CardContent, CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search, BookOpen, Clock, Calendar, Users,
  GraduationCap
} from "lucide-react";
import { courses } from "@/lib/data";

export const metadata = {
  title: 'RTC - Courses',
  description: 'Browse our comprehensive catalog of courses.',
};

export default function CoursesPage() {
  return (
    <>
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Course Catalog</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Explore our comprehensive catalog of courses designed to help you excel in your academic journey.
            </p>
            
            <div className="w-full max-w-2xl relative">
              <Input 
                placeholder="Search for courses..." 
                className="pl-10 py-6 text-base"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3 space-y-6">
              <div className="bg-card rounded-lg p-6 border shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Filter Courses</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Categories</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input id="cat-math" type="checkbox" className="mr-2" />
                        <label htmlFor="cat-math">Mathematics</label>
                      </div>
                      <div className="flex items-center">
                        <input id="cat-physics" type="checkbox" className="mr-2" />
                        <label htmlFor="cat-physics">Physics</label>
                      </div>
                      <div className="flex items-center">
                        <input id="cat-chemistry" type="checkbox" className="mr-2" />
                        <label htmlFor="cat-chemistry">Chemistry</label>
                      </div>
                      <div className="flex items-center">
                        <input id="cat-cs" type="checkbox" className="mr-2" />
                        <label htmlFor="cat-cs">Computer Science</label>
                      </div>
                      <div className="flex items-center">
                        <input id="cat-biology" type="checkbox" className="mr-2" />
                        <label htmlFor="cat-biology">Biology</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Skill Level</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input id="level-beginner" type="checkbox" className="mr-2" />
                        <label htmlFor="level-beginner">Beginner</label>
                      </div>
                      <div className="flex items-center">
                        <input id="level-intermediate" type="checkbox" className="mr-2" />
                        <label htmlFor="level-intermediate">Intermediate</label>
                      </div>
                      <div className="flex items-center">
                        <input id="level-advanced" type="checkbox" className="mr-2" />
                        <label htmlFor="level-advanced">Advanced</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <div className="flex space-x-4">
                      <Input
                        type="number"
                        placeholder="Min"
                        className="w-full"
                      />
                      <Input
                        type="number"
                        placeholder="Max"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-9">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-muted-foreground">Showing <span className="font-medium text-foreground">{courses.length}</span> courses</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select className="bg-background border rounded-md p-1.5 text-sm">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}