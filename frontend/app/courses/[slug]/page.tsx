"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Users, Calendar } from "lucide-react";
import { courses } from "@/lib/data";
import { useAuth } from "@/lib/auth";
import { useToast } from "@/components/ui/use-toast";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useAuth();
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    const foundCourse = courses.find(c => c.slug === params.slug);
    if (foundCourse) {
      setCourse(foundCourse);
    }
  }, [params.slug]);

  if (!course) {
    return <div>Loading...</div>;
  }

  const handleEnroll = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please login to enroll in this course",
        variant: "destructive"
      });
      router.push("/login");
      return;
    }

    toast({
      title: "Enrollment Successful",
      description: `You have been enrolled in ${course.title}`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-muted-foreground">{course.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="flex items-center space-x-4 p-6">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">{course.duration}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center space-x-4 p-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Lectures</p>
                    <p className="font-medium">{course.lectures} Lectures</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center space-x-4 p-6">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Instructor</p>
                    <p className="font-medium">{course.instructor}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center space-x-4 p-6">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Level</p>
                    <p className="font-medium">{course.level}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {course.syllabus && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Course Syllabus</h2>
              <div className="space-y-4">
                {course.syllabus.map((section: any, index: number) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.lessons.map((lesson: any, lessonIndex: number) => (
                          <li key={lessonIndex} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span>{lesson.title}</span>
                              {lesson.preview && (
                                <Badge variant="secondary">Preview</Badge>
                              )}
                            </div>
                            <span className="text-muted-foreground">{lesson.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-3xl font-bold mb-6">${course.price}</div>
              <Button className="w-full mb-4" size="lg" onClick={handleEnroll}>
                Enroll Now
              </Button>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Full course access
                </li>
                <li className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Expert instruction
                </li>
                <li className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Lifetime access
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}