import Social from "@/components/Social";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text bio */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I am <br />{" "}
              <span className="text-accent">Asep Solahudin</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel in web development, have strong skills in several
              programming languages, and a deep interest in security and
              artificial intelligence. I am eager to keep learning and growing
              in the evolving world of technology.
            </p>
            {/* button social media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent 
                  rounded-full flex justify-center 
                  items-center text-accent text-base 
                  hover:bg-accent hover:text-primary 
                  hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
