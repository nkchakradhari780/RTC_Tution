import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import Features from "@/components/home/Features";
import FacultySection from "@/components/home/FacultySection";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import StudentDashboard from "@/components/dashboard/StudentDashboard";
import AdminDashboard from "@/components/dashboard/AdminDashboard";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <FeaturedCourses />
      <FacultySection />
      <Testimonials />
      <ContactSection />
    </>
  );
}