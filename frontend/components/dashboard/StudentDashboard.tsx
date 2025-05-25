"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, Video, FileText, Award,
  Clock, CheckCircle
} from "lucide-react";

export default function StudentDashboard() {
  const enrolledCourses = [
    {
      id: "c001",
      title: "Advanced Mathematics",
      progress: 65,
      nextLesson: "Integration Methods",
      instructor: "Dr. Sarah Johnson"
    },
    {
      id: "c002",
      title: "Quantum Physics",
      progress: 30,
      nextLesson: "Wave Functions",
      instructor: "Prof. Michael Chen"
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome back, Student!</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Enrolled Courses</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Watched Videos</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Downloaded Notes</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Certificates</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Continue Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{course.title}</h3>
                    <span className="text-sm text-muted-foreground">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Next: {course.nextLesson}</span>
                    <Button variant="link" className="h-auto p-0">
                      Continue
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Advanced Mathematics</p>
                  <p className="text-sm text-muted-foreground">
                    Live Session with Dr. Sarah Johnson
                  </p>
                  <p className="text-sm text-primary">Today, 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Quantum Physics</p>
                  <p className="text-sm text-muted-foreground">
                    Assignment Due
                  </p>
                  <p className="text-sm text-primary">Tomorrow, 11:59 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="videos">Saved Videos</TabsTrigger>
          <TabsTrigger value="notes">Downloaded Notes</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          {/* Course content */}
        </TabsContent>

        <TabsContent value="videos">
          {/* Saved videos */}
        </TabsContent>

        <TabsContent value="notes">
          {/* Downloaded notes */}
        </TabsContent>

        <TabsContent value="certificates">
          {/* Certificates */}
        </TabsContent>
      </Tabs>
    </div>
  );
}