const TESTIMONIALS: Testimonial[] = [
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
  img: string;
  name: string;
  title?: string;
  profileLink: string;
  review: string;
  reviewLink?: string;
  sourceIcon: string;
};

export default TESTIMONIALS;
