import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, GithubIcon, GlobeIcon } from "lucide-react";

interface FacultyMember {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export default function FacultySection() {
  const faculty: FacultyMember[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Mathematics Professor",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Ph.D. in Mathematics with 15+ years of teaching experience. Specializes in calculus and differential equations.",
      social: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      title: "Physics Department Head",
      image: "https://images.pexels.com/photos/8133252/pexels-photo-8133252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Acclaimed physicist with research publications in quantum mechanics. Previously taught at MIT for 10 years.",
      social: {
        linkedin: "#",
        github: "#",
        website: "#"
      }
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Chemistry Specialist",
      image: "https://images.pexels.com/photos/5212692/pexels-photo-5212692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Organic chemistry expert with industrial and academic experience. Published author of chemistry textbooks.",
      social: {
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Prof. David Wilson",
      title: "Computer Science Lead",
      image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Former tech industry executive with expertise in AI and machine learning. Passionate about educating future developers.",
      social: {
        github: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Faculty</h2>
          <p className="text-lg text-muted-foreground">
            Learn from industry experts and experienced educators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member) => (
            <Card key={member.id} className="overflow-hidden transition-all hover:shadow-md">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.title}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.bio}</p>
                <div className="flex space-x-2">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                      <LinkedinIcon className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <GithubIcon className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  )}
                  {member.social.website && (
                    <a href={member.social.website} className="text-muted-foreground hover:text-primary transition-colors">
                      <GlobeIcon className="h-4 w-4" />
                      <span className="sr-only">Website</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline">View All Faculty Members</Button>
        </div>
      </div>
    </section>
  );
}