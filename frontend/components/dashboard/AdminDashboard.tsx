"use client";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import PDFNotesPage from "@/components/pages/PDFNotesPage";


import {
  Users,
  BookOpen,
  Video,
  FileText,
  Plus,
  Search,
  UploadCloud,
} from "lucide-react";

// ✅ Replace this with your actual import later
const courses = [
  {
    id: 1,
    title: "React Basics",
    instructor: "John Doe",
    duration: "3h",
    image: "https://via.placeholder.com/64",
  },
];


const videoLectures = [{ id: 1, title: "Intro to React" }];

const pdfNotes = [{ id: 1, title: "React Cheat Sheet" }];

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="space-y-8 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Course
        </Button>
      </div>

      {/* Dashboard Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Courses</p>
                <p className="text-2xl font-bold">{courses.length}</p>
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
                <p className="text-sm text-muted-foreground">Video Lectures</p>
                <p className="text-2xl font-bold">{videoLectures.length}</p>
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
                <p className="text-sm text-muted-foreground">PDF Notes</p>
                <p className="text-2xl font-bold">{pdfNotes.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <Tabs
        defaultValue="courses"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="pdf-notes">PDF Notes</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
        </TabsList>


        <div className="flex items-center space-x-2 mb-4">
          <Input placeholder="Search..." className="max-w-sm" />
          <Button onClick={() => router.push(`/${activeTab}/upload`)}>
              <UploadCloud className="mr-2 h-4 w-4" />
              Upload
            </Button>
        </div>
        
        <TabsContent value="courses" className="space-y-4">
          {courses.map((course) => (
            <Card key={course.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {course.instructor} • {course.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline">Edit</Button>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="videos">
          <div>No videos available yet.</div>
        </TabsContent>

        <TabsContent value="pdf-notes">
          <PDFNotesPage />
        </TabsContent>

        <TabsContent value="students">
          <div>Student list will appear here.</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
