import { Laptop, Users, BookOpen, MessagesSquare, Clock, Award, FileText, DivideIcon as LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

function Feature({ title, description, icon: Icon, color }: FeatureProps) {
  return (
    <div className="group">
      <div className={cn(
        "relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110",
        color
      )}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function Features() {
  const features: FeatureProps[] = [
    {
      title: "Interactive Learning",
      description: "Engage with interactive content and participate in live discussions for a deeper understanding.",
      icon: Laptop,
      color: "bg-chart-1"
    },
    {
      title: "Personalized Attention",
      description: "Receive individualized guidance and support tailored to your learning style and needs.",
      icon: Users,
      color: "bg-chart-2"
    },
    {
      title: "Comprehensive Curriculum",
      description: "Access a well-structured curriculum designed by education experts to ensure complete coverage.",
      icon: BookOpen,
      color: "bg-chart-3"
    },
    {
      title: "Active Discussion Forums",
      description: "Connect with peers and instructors in moderated forums to resolve doubts and share insights.",
      icon: MessagesSquare,
      color: "bg-chart-4"
    },
    {
      title: "Flexible Schedule",
      description: "Learn at your own pace with flexible timing options that fit your busy schedule.",
      icon: Clock,
      color: "bg-chart-5"
    },
    {
      title: "Certified Courses",
      description: "Earn recognized certifications that enhance your profile and career prospects.",
      icon: Award,
      color: "bg-chart-1"
    },
    {
      title: "Downloadable Materials",
      description: "Access and download course materials, notes, and resources for offline study.",
      icon: FileText,
      color: "bg-chart-2"
    },
    {
      title: "Expert Faculty",
      description: "Learn from industry experts and experienced educators who bring real-world knowledge.",
      icon: Users,
      color: "bg-chart-3"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RTC?</h2>
          <p className="text-lg text-muted-foreground">
            Our unique features designed to maximize your learning experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}