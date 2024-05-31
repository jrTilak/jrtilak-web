import javaSportsImg from "@/assets/project-img/java-sports.png";
import Image from "next/image";

const JavaSports = () => {
  return (
    <div className="flex flex-col mt-4 gap-4">
      <Image
        src={javaSportsImg}
        alt="C Games"
        width={500}
        height={500}
        quality={100}
        className=" rounded-md"
        placeholder="blur"
      />
      <div className="flex flex-col gap-2">
        <h3 className="xl:text-xl font-bold">More</h3>
        <p className="text-sm text-muted-foreground">
          It was a organizational project where I was responsible for the
          front-end development of the website with my team, where I was
          involved in the completion of more than 70% of the front-end
          development with an admin panel and api integration.
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground">
          {[
            "E-commerce platform for sports products",
            "Admin panel for managing products",
            "User authentication and user profile",
            "Payment gateway integration",
            "Order management, product management, and many more!",
            "Used by many sports enthusiasts in India...",
          ].map((item, index) => (
            <li key={index} className="ml-4">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JavaSports;
