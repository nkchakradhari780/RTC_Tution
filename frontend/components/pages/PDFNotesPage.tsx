// components/pages/PDFNotesPage.tsx

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PDFCard from "@/components/cards/PDFCard";

const PDFNotesPage = () => {
  const [pdfNotes, setPdfNotes] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/notes/check/notelist"
        );
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
                      ? "Bio"
                      : "Other";

                  return (
                    <div key={courseId}>
                      <h2 className="text-2xl font-bold mb-4">{courseName}</h2>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notes.map((note) => (
                          <PDFCard
                            key={note._id}
                            note={note}
                            onPreview={previewNotes}
                          />
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
                    <PDFCard
                      key={note._id}
                      note={note}
                      onPreview={previewNotes}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="premium">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pdfNotes
                  .filter((n) => n.isPremium)
                  .map((note) => (
                    <PDFCard
                      key={note._id}
                      note={note}
                      onPreview={previewNotes}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default PDFNotesPage;
