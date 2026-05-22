export interface ParentReview {
  id: number;
  url: string;
  student: string;
  videoHeadline: string;
  reviewTitle: string;
  reviewText: string;
  rating: number;
  author: string;
  sub: string;
}

export const parentVideos = [
  {
    id: 1,
    url: "https://player.vimeo.com/video/1143056003",
    title: "parent testimonial",
    student: "Mrityunjai Malik"
  },
  {
    id: 2,
    url: "https://player.vimeo.com/video/1146488669",
    title: "parent testimonial",
    student: "Kashvi"
  }
];

export const parentReviews: ParentReview[] = [
  {
    id: 1,
    url: "https://player.vimeo.com/video/1143056003",
    student: "Mrityunjai Malik",
    videoHeadline: "My son is very happy to join this course",
    reviewTitle: "My child built her own study buddy agent",
    reviewText: "My child's learning style has changed. She now uses NotebookLM and other AI tools confidently to study better. She even built her own study buddy agent during the program – and now looks forward to reading emails from her AI buddy every day.",
    rating: 5,
    author: "Sunita R.",
    sub: "Mother of Mrityunjai Malik, Grade 11 · Chennai"
  },
  {
    id: 2,
    url: "https://player.vimeo.com/video/1146488669",
    student: "Kashvi",
    videoHeadline: "It's a proud moment",
    reviewTitle: "Very reassuring as a parent.",
    reviewText: "I was skeptical my daughter has zero coding background and is not a 'tech kid.' By week 3, she had created her own AI-powered news briefing tool and was explaining it to me with full confidence. The instructors are incredibly patient and the batch size is small enough that she got real attention.",
    rating: 5,
    author: "Vikram M.",
    sub: "Father of Kashvi, Grade 9 · Pune"
  },
  
];