import blogIcon from './blog-icon.jpg'
import id1 from './lifeStyle1.jpeg'
import id2 from './productivity2.jpeg'
import id3 from './healthy3.jpeg'
import id4 from './work4.jpeg'
import profile from './profile.jpeg'
import blogI from './blogi.jpeg'
import profileIcon from './profileIcon.png'
import upload from './upload.jpeg'

export const assets = {
    blogIcon,
    blogI,
    profileIcon,
    upload
}
export const blog_data = [
    {
      id: 1,
      title: "A detailed step by step guide to manage your lifestyle",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: id1,
      date: Date.now(),
      category: "Lifestyle",
      author: "Alex Bennett",
      author_img: profile
    },
    {
      id: 2,
      title: "Top 5 productivity hacks to get more done in less time",
      description: "Boost your daily output with these tried-and-tested techniques.",
      image: id2,
      date: Date.now(),
      category: "Productivity",
      author: "Rachel Moore",
      author_img: profile
    },
    {
      id: 3,
      title: "A beginner’s guide to healthy eating habits",
      description: "Understand the fundamentals of nutrition and start your wellness journey today.",
      image: id3,
      date: Date.now(),
      category: "Health",
      author: "John Lee",
      author_img: profile
    },
    {
      id: 4,
      title: "The essentials of remote work success",
      description: "Master the art of working from home effectively and stay productive.",
      image: id4,
      date: Date.now(),
      category: "Career",
      author: "Samantha Ray",
      author_img: profile
    }
  ];
  