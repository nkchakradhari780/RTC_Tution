"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { UploadCloud } from "lucide-react";
import axios from "axios";

type FormDataType = {
  courseId: string;
  title: string;
  description: string;
  subject: string;
  course: string;
  instructor: string;
  isPremium: boolean;
  previewAvailable: boolean;
  downloadUrl: string;
  thumbnail: string;
};

export default function UploadNotePage() {
  const [formData, setFormData] = useState<FormDataType>({
    courseId: "other",
    title: "",
    description: "",
    subject: "",
    course: "",
    instructor: "",
    isPremium: false,
    previewAvailable: false,
    downloadUrl: "",
    thumbnail: "",
  });

  const [pdf, setPdf] = useState<File | null>(null);
  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" && "checked" in e.target
        ? (e.target as HTMLInputElement).checked
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setPdf(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!pdf) {
      alert("Please upload a PDF");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, String(value));
    });
    data.append("note", pdf);

    try {
      const res = await axios.post("http://localhost:3001/notes/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (res.status === 200) {
        const noteId = res.data.note._id;

        try {
          const thumbRes = await axios.post(
            `http://localhost:3001/notes/${noteId}/thumbnail`
          );
          console.log("Thumbnail generated:", thumbRes.data.thumbnail);
        } catch (thumbErr) {
          console.error("Thumbnail generation failed:", thumbErr);
          alert("Note uploaded but thumbnail generation failed");
        }

        alert("Note uploaded successfully");
        router.push("/dashboard/admin");
      } else {
        alert(`Upload failed: ${res.data.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardContent className="space-y-6 p-6">
          <h2 className="text-2xl font-semibold flex items-center">
            <UploadCloud className="mr-2" /> Upload PDF Note
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Course ID</Label>
              <select
                name="courseId"
                value={formData.courseId}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              >
                <option value="c001">Maths</option>
                <option value="c002">Chemistry</option>
                <option value="c003">Physics</option>
                <option value="c004">Bio</option>
                <option value="other">Other</option>
              </select>
            </div>

            {[
              { name: "title", label: "Title" },
              { name: "subject", label: "Subject" },
              { name: "course", label: "Course (ObjectId)" },
              { name: "instructor", label: "Instructor" },
              { name: "downloadUrl", label: "Download URL" },
              { name: "thumbnail", label: "Thumbnail URL" },
            ].map(({ name, label }) => (
              <div key={name}>
                <Label>{label}</Label>
                <Input
                  name={name}
                  value={String(formData[name as keyof FormDataType])}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <div>
              <Label>Description</Label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex space-x-4">
              <div>
                <Label>
                  <Input
                    type="checkbox"
                    name="isPremium"
                    checked={formData.isPremium}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Is Premium?</span>
                </Label>
              </div>
              <div>
                <Label>
                  <Input
                    type="checkbox"
                    name="previewAvailable"
                    checked={formData.previewAvailable}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Preview Available?</span>
                </Label>
              </div>
            </div>

            <div>
              <Label>Select PDF File</Label>
              <Input
                type="file"
                name="note"
                accept=".pdf"
                onChange={handleFileChange}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Upload Note
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
