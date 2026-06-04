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
    reviewTitle: "My child built his own study buddy agent",
    reviewText: "He was always interested in AI and computer-related learning, so joining this course has made him very happy and motivated. He enjoys learning new things and even explores topics like Python on his own through YouTube. Now he keeps sharing exciting things he learns about AI every day. I can see a positive change in his interest towards studies and learning overall",
    rating: 5,
    author: "Reena Malik",
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
    author: "Ankita Gupta",
    sub: "Mother of Kashvi, Grade 9 · Pune"
  },
  
];