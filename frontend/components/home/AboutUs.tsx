import { Clock, UsersRound, Trophy, LightbulbIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About RTC</h2>
          <p className="text-lg text-muted-foreground">
            Leading the way in educational excellence since 2010
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-md">
              <img
                src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="RTC Campus"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full -z-10 transform translate-x-6 translate-y-6">
              <div className="w-full h-full rounded-2xl bg-primary/10"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Our Mission & Vision</h3>
            <p className="text-muted-foreground">
              At RTC, we believe in the transformative power of education. Our mission is to provide accessible, quality education that empowers students to reach their full potential and become successful professionals.
            </p>
            <p className="text-muted-foreground">
              Founded in 2010, RTC has grown from a small tutoring center to a comprehensive educational institution serving thousands of students. Our commitment to excellence, innovation, and student success has made us a trusted name in education.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <UsersRound className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Expert Faculty</h4>
                  <p className="text-sm text-muted-foreground">Experienced educators</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Flexible Learning</h4>
                  <p className="text-sm text-muted-foreground">Learn at your own pace</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Success Stories</h4>
                  <p className="text-sm text-muted-foreground">Proven track record</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <LightbulbIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Innovative Methods</h4>
                  <p className="text-sm text-muted-foreground">Modern teaching approaches</p>
                </div>
              </div>
            </div>

            <Button className="mt-2">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}