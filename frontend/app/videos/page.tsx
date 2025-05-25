import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, PlayCircle, Clock, Lock, Video } from "lucide-react";
import { videoLectures } from "@/lib/data";

export const metadata = {
  title: 'RTC - Video Lectures',
  description: 'Access our library of educational video lectures.',
};

export default function VideosPage() {
  // Group videos by course
  const videosByCategory: Record<string, typeof videoLectures> = {};
  
  videoLectures.forEach(video => {
    const courseId = video.courseId;
    if (!videosByCategory[courseId]) {
      videosByCategory[courseId] = [];
    }
    videosByCategory[courseId].push(video);
  });

  return (
    <>
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-2 mb-4">
              <Video className="h-6 w-6 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Video Lectures</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Enhance your learning with our comprehensive collection of video lectures on various subjects.
            </p>
            
            <div className="w-full max-w-2xl relative">
              <Input 
                placeholder="Search for videos..." 
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
                <TabsTrigger value="all">All Videos</TabsTrigger>
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
                {Object.entries(videosByCategory).map(([courseId, videos]) => {
                  const courseName = videos[0]?.courseId === "c001" ? "Mathematics" :
                                     videos[0]?.courseId === "c002" ? "Physics" :
                                     videos[0]?.courseId === "c003" ? "Chemistry" :
                                     videos[0]?.courseId === "c004" ? "Computer Science" : "Other";
                  
                  return (
                    <div key={courseId}>
                      <h2 className="text-2xl font-bold mb-4">{courseName}</h2>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((video) => (
                          <VideoCard key={video.id} video={video} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="free">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoLectures.filter(v => !v.isPremium).map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="premium">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoLectures.filter(v => v.isPremium).map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}

function VideoCard({ video }: { video: any }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <PlayCircle className="h-16 w-16 text-white" />
        </div>
        
        <div className="absolute top-2 right-2">
          {video.isPremium ? (
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
            <Clock className="h-3 w-3 mr-1" /> {video.duration}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1">{video.title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{video.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="text-muted-foreground">Instructor: </span>
            <span>{video.instructor}</span>
          </div>
          
          <Button variant="outline" size="sm" asChild>
            <Link href={`/videos/${video.id}`}>
              {video.previewAvailable ? "Watch Preview" : "Details"}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}