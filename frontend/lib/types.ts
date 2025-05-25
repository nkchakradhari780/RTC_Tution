export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  duration: string;
  lectures: number;
  price: number;
  image: string;
  instructor: string;
  featured?: boolean;
  syllabus?: SyllabusItem[];
}

export interface SyllabusItem {
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  title: string;
  duration: string;
  preview?: boolean;
}

export interface Faculty {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  subjects: string[];
  education: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  course: string;
}

export interface VideoLecture {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  courseId: string;
  instructor: string;
  date: string;
  isPremium: boolean;
  previewAvailable: boolean;
}

export interface PDFNote {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  fileUrl: string;
  pageCount: number;
  courseId: string;
  instructor: string;
  date: string;
  isPremium: boolean;
  previewAvailable: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
  enrolledCourses: string[];
}