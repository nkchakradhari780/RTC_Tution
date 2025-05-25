import Link from "next/link";
import { GraduationCap as Graduation, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Graduation className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl tracking-tight">RTC</span>
            </div>
            <p className="text-muted-foreground">
              Empowering students with quality education and personalized learning experiences since 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Video Lectures
                </Link>
              </li>
              <li>
                <Link href="/pdf-notes" className="text-muted-foreground hover:text-foreground transition-colors">
                  PDF Notes
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/mathematics" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mathematics
                </Link>
              </li>
              <li>
                <Link href="/courses/physics" className="text-muted-foreground hover:text-foreground transition-colors">
                  Physics
                </Link>
              </li>
              <li>
                <Link href="/courses/chemistry" className="text-muted-foreground hover:text-foreground transition-colors">
                  Chemistry
                </Link>
              </li>
              <li>
                <Link href="/courses/biology" className="text-muted-foreground hover:text-foreground transition-colors">
                  Biology
                </Link>
              </li>
              <li>
                <Link href="/courses/computer-science" className="text-muted-foreground hover:text-foreground transition-colors">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
                  View All Courses
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">123 Education Street, Learning City, 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">info@rtceducation.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>&copy; {currentYear} RTC Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}