import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, BookOpen, Download } from "lucide-react";

interface PDFCardProps {
  note: any;
  onPreview: (id: string) => void;
}

const PDFCard: React.FC<PDFCardProps> = ({ note, onPreview }) => {
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
};

export default PDFCard;
