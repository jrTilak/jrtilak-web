const TESTIMONIALS: Testimonial[] = [
  {
    name: "Hemanta Bhandari",
    review: `I've had the pleasure of working with Tilak on a private project, and I can't say enough good things about him. His ability to take Figma designs and turn them into beautifully functional code is truly something special. It's like watching an artist at work.<br/>
    Tilak pays incredible attention to detail and always strives for the highest quality in his work. What really sets him apart is his creativity. He doesn't just follow the design; he brings it to life in a way that feels seamless and intuitive for users.<br/>
    Beyond his technical skills, Tilak is a fantastic collaborator. He's always open to feedback, quick to solve problems, and great at communicating with the team. Working with him has been a fantastic experience, and any team would be lucky to have him.<br/>
    If you need someone who can bridge the gap between design and code with a touch of artistry, Tilak is your go-to person.`,
    profileLink: "https://www.linkedin.com/in/hems-bhandari/",
    sourceIcon: "https://www.svgrepo.com/show/475661/linkedin-color.svg",
    shortReview:
      "I've had the pleasure of working with Tilak on a private project, and I can't say enough good things about him. His ability to take Figma designs and turn them into beautifully functional code is truly something special. It's like watching an artist at work.",
  },
  {
    img: "https://media.licdn.com/dms/image/D4D03AQErezuiUVVUfg/profile-displayphoto-shrink_800_800/0/1713901442457?e=1722470400&v=beta&t=TU_edHWmOOxQ29GyOFbxIhauJDRHO9yGdkwMzU1JXVU",
    name: "Mustafa Can Güzlük",
    review:
      "He is really a good person, he responds very quickly and he really helped me a lot, the projects he has done are very nice, especially the <a href='https://bumblebee.thapatilak.com.np/' class='link' target='_blank'>Bumblebee - AI Powered Chatbot project.</>",
    profileLink: "https://www.linkedin.com/in/mustafa-can-guzluk/",
    sourceIcon: "https://www.svgrepo.com/show/475661/linkedin-color.svg",
  },
];
type Testimonial = {
  img?: string;
  name: string;
  title?: string;
  profileLink: string;
  review: string;
  shortReview?: string;
  reviewLink?: string;
  sourceIcon: string;
};

export default TESTIMONIALS;
