// components/pages/NewPage.tsx
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Search, FileText } from "lucide-react";
import PDFNotesPage from "@/components/pages/PDFNotesPage";

const NewPage = () => {
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
      
      <PDFNotesPage />
    </>
  );
};

export default NewPage;
