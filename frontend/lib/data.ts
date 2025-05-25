import { Course, VideoLecture, PDFNote } from './types';

export const courses: Course[] = [
  {
    id: "c001",
    title: "Advanced Mathematics",
    slug: "advanced-mathematics",
    category: "Mathematics",
    level: "Advanced",
    description: "Master complex mathematical concepts including calculus, linear algebra, and statistics with practical applications and problem-solving techniques.",
    duration: "12 weeks",
    lectures: 36,
    price: 299,
    image: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Dr. Sarah Johnson",
    featured: true,
    syllabus: [
      {
        title: "Calculus Fundamentals",
        lessons: [
          { title: "Limits and Continuity", duration: "45 min", preview: true },
          { title: "Differentiation Techniques", duration: "60 min" },
          { title: "Integration Methods", duration: "55 min" }
        ]
      },
      {
        title: "Linear Algebra",
        lessons: [
          { title: "Matrices and Determinants", duration: "50 min" },
          { title: "Vector Spaces", duration: "45 min" },
          { title: "Eigenvalues and Eigenvectors", duration: "60 min" }
        ]
      }
    ]
  },
  {
    id: "c002",
    title: "Quantum Physics",
    slug: "quantum-physics",
    category: "Physics",
    level: "Advanced",
    description: "Explore the fascinating world of quantum mechanics, including wave-particle duality, quantum states, and the uncertainty principle.",
    duration: "10 weeks",
    lectures: 30,
    price: 349,
    image: "https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Prof. Michael Chen",
    featured: true
  },
  {
    id: "c003",
    title: "Organic Chemistry",
    slug: "organic-chemistry",
    category: "Chemistry",
    level: "Intermediate",
    description: "Learn about carbon compounds, functional groups, reaction mechanisms, and synthesis techniques in this comprehensive organic chemistry course.",
    duration: "8 weeks",
    lectures: 24,
    price: 249,
    image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Dr. Emily Rodriguez",
    featured: false
  },
  {
    id: "c004",
    title: "Data Structures & Algorithms",
    slug: "data-structures-algorithms",
    category: "Computer Science",
    level: "Intermediate",
    description: "Master essential programming concepts including arrays, linked lists, trees, sorting algorithms, and complexity analysis.",
    duration: "14 weeks",
    lectures: 42,
    price: 399,
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Prof. David Wilson",
    featured: true
  },
  {
    id: "c005",
    title: "Human Biology",
    slug: "human-biology",
    category: "Biology",
    level: "Beginner",
    description: "Explore the human body systems, anatomy, physiology, and biological processes in this foundational course.",
    duration: "9 weeks",
    lectures: 27,
    price: 199,
    image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Dr. Natalie Parker",
    featured: false
  },
  {
    id: "c006",
    title: "Introduction to Machine Learning",
    slug: "intro-machine-learning",
    category: "Computer Science",
    level: "Intermediate",
    description: "Learn fundamental machine learning concepts, algorithms, and techniques for data analysis and prediction.",
    duration: "10 weeks",
    lectures: 30,
    price: 299,
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Prof. David Wilson",
    featured: false
  }
];

export const videoLectures: VideoLecture[] = [
  {
    id: "v001",
    title: "Introduction to Calculus",
    description: "Learn the fundamental concepts of calculus including limits, derivatives, and integrals.",
    thumbnail: "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoUrl: "/videos/calculus-intro.mp4",
    duration: "45:30",
    courseId: "c001",
    instructor: "Dr. Sarah Johnson",
    date: "2023-05-15",
    isPremium: false,
    previewAvailable: true
  },
  {
    id: "v002",
    title: "Wave-Particle Duality",
    description: "Explore the fascinating concept of wave-particle duality in quantum physics.",
    thumbnail: "https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoUrl: "/videos/quantum-wave-particle.mp4",
    duration: "38:15",
    courseId: "c002",
    instructor: "Prof. Michael Chen",
    date: "2023-06-02",
    isPremium: true,
    previewAvailable: true
  },
  {
    id: "v003",
    title: "Functional Groups in Organic Chemistry",
    description: "Learn about different functional groups and their properties in organic compounds.",
    thumbnail: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoUrl: "/videos/organic-functional-groups.mp4",
    duration: "52:20",
    courseId: "c003",
    instructor: "Dr. Emily Rodriguez",
    date: "2023-04-18",
    isPremium: true,
    previewAvailable: false
  },
  {
    id: "v004",
    title: "Binary Search Trees",
    description: "Master the implementation and operations of binary search trees in data structures.",
    thumbnail: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoUrl: "/videos/binary-search-trees.mp4",
    duration: "47:55",
    courseId: "c004",
    instructor: "Prof. David Wilson",
    date: "2023-07-10",
    isPremium: false,
    previewAvailable: true
  }
];

export const pdfNotes: PDFNote[] = [
  {
    id: "p001",
    title: "Calculus Formulas and Theorems",
    description: "Comprehensive collection of calculus formulas, theorems, and example problems.",
    thumbnail: "https://images.pexels.com/photos/6238118/pexels-photo-6238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fileUrl: "/notes/calculus-formulas.pdf",
    pageCount: 25,
    courseId: "c001",
    instructor: "Dr. Sarah Johnson",
    date: "2023-05-20",
    isPremium: false,
    previewAvailable: true
  },
  {
    id: "p002",
    title: "Quantum Mechanics Principles",
    description: "Detailed notes on quantum mechanics principles, equations, and applications.",
    thumbnail: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fileUrl: "/notes/quantum-principles.pdf",
    pageCount: 32,
    courseId: "c002",
    instructor: "Prof. Michael Chen",
    date: "2023-06-10",
    isPremium: true,
    previewAvailable: true
  },
  {
    id: "p003",
    title: "Organic Reaction Mechanisms",
    description: "Study guide for common organic reaction mechanisms with step-by-step illustrations.",
    thumbnail: "https://images.pexels.com/photos/8325710/pexels-photo-8325710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fileUrl: "/notes/organic-mechanisms.pdf",
    pageCount: 40,
    courseId: "c003",
    instructor: "Dr. Emily Rodriguez",
    date: "2023-04-25",
    isPremium: true,
    previewAvailable: false
  },
  {
    id: "p004",
    title: "Algorithm Complexity Analysis",
    description: "Guide to analyzing time and space complexity of algorithms with examples.",
    thumbnail: "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fileUrl: "/notes/algorithm-complexity.pdf",
    pageCount: 28,
    courseId: "c004",
    instructor: "Prof. David Wilson",
    date: "2023-07-15",
    isPremium: false,
    previewAvailable: true
  }
];