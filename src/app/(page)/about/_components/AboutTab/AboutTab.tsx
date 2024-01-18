import aboutMe from "@/assets/json/aboutMe";

export default async function AboutTab() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-foreground">
        {aboutMe.h1}
      </h1>
      <h4 className="text-xl text-center text-foreground">{aboutMe.h2}</h4>
      <hr className="w-1/2 h-[2px] mx-auto my-4 bg-muted-foreground" />
      <h3 className="text-2xl font-semibold text-foreground mb-2">
        {aboutMe.aboutMe.title}
      </h3>
      <p className="text-lg text-muted-foreground">{aboutMe.aboutMe.desc.p1}</p>
      <p className="text-lg text-muted-foreground mt-4">
        {aboutMe.aboutMe.desc.p2}
      </p>
      <ul className="text-lg  text-muted-foreground mt-6 list-disc ml-6">
        {aboutMe.more.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
