import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text bio */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Asep Solahudin</span>
            </h1>
            <p>
              I excel in web development, have strong skills in several
              programming languages, and a deep interest in security and
              artificial intelligence. I'm eager to keep learning and growing in
              the evolving world of technology.
            </p>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
