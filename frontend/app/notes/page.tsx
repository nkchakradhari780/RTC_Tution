"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FileText, Download, Lock, BookOpen } from "lucide-react";

const PDFNotesPage = () => {
  const [pdfNotes, setPdfNotes] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:3001/notes/check/notelist");
        const data = Array.isArray(res.data) ? res.data : [];
        setPdfNotes(res.data.notes);
      } catch (error) {
        console.error("Error fetching PDF notes:", error);
        setPdfNotes([]);
      }
    };

    fetchNotes();
  }, []);

  const notesByCategory: Record<string, any[]> = {};
  pdfNotes.forEach((note) => {
    const courseId = note.courseId;
    if (!notesByCategory[courseId]) {
      notesByCategory[courseId] = [];
    }
    notesByCategory[courseId].push(note);
  });

  const previewNotes = (id: string) => {
    router.push(`http://localhost:3001/notes/preview/notes/${id}`);
  };

  return (
    <>
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">PDF Notes</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Download comprehensive study notes to supplement your learning experience.
            </p>
            <div className="w-full max-w-2xl relative">
              <Input
                placeholder="Search for notes..."
                className="pl-10 py-6 text-base"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="all">All Notes</TabsTrigger>
                <TabsTrigger value="free">Free</TabsTrigger>
                <TabsTrigger value="premium">Premium</TabsTrigger>
              </TabsList>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="bg-background border rounded-md p-1.5 text-sm">
                  <option>Newest First</option>
                  <option>Oldest First</option>
                  <option>A-Z</option>
                </select>
              </div>
            </div>

            <TabsContent value="all">
              <div className="grid gap-8">
                {Object.entries(notesByCategory).map(([courseId, notes]) => {
                  const courseName =
                    courseId === "c001"
                      ? "Mathematics"
                      : courseId === "c002"
                      ? "Physics"
                      : courseId === "c003"
                      ? "Chemistry"
                      : courseId === "c004"
                      ? "Computer Science"
                      : "Other";

                  return (
                    <div key={courseId}>
                      <h2 className="text-2xl font-bold mb-4">{courseName}</h2>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notes.map((note) => (
                          <PDFCard key={note._id} note={note} onPreview={previewNotes} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="free">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pdfNotes
                  .filter((n) => !n.isPremium)
                  .map((note) => (
                    <PDFCard key={note._id} note={note} onPreview={previewNotes} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="premium">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pdfNotes
                  .filter((n) => n.isPremium)
                  .map((note) => (
                    <PDFCard key={note._id} note={note} onPreview={previewNotes} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

function PDFCard({ note, onPreview }: { note: any; onPreview: (id: string) => void }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={note.thumbnail}
          alt={note.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />

        <div className="absolute top-2 right-2">
          {note.isPremium ? (
            <Badge variant="secondary" className="font-medium bg-primary text-primary-foreground">
              <Lock className="h-3 w-3 mr-1" /> Premium
            </Badge>
          ) : (
            <Badge variant="secondary" className="font-medium">
              Free
            </Badge>
          )}
        </div>

        <div className="absolute bottom-2 right-2">
          <Badge variant="outline" className="bg-black/70 text-white border-none">
            <BookOpen className="h-3 w-3 mr-1" /> {note.pageCount} pages
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1">{note.title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {note.description}
        </p>

        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="text-muted-foreground">Author: </span>
            <span>{note.instructor}</span>
          </div>

          <div className="flex space-x-2">
            {note.previewAvailable && (
            <Button variant="outline" size="sm" onClick={() => onPreview(note._id)}>
              Preview
            </Button>
            )}

            <Button size="sm" asChild>
              <a href={note.downloadUrl} download>
                <Download className="h-4 w-4 mr-1" /> Download
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default PDFNotesPage;
