import Image from "next/image";
import Link from "next/link";
import "@/app/blogs/page";
import bg from "../images/bg.png";
export default function Main() {
  return (
    <>
      <div>
        <div className="banner">
          <Image src={bg} alt="pic" className="w-full h-[450px] " />
          <div>
            <div className="center bg-[#bfdfef] h-[full]">
            <p className="text-md md:text-lg font-normal justify-between w-[300px] md:w-[500px] sm:w-[400px] lg:w-[600px] fade-ups fadeUp">
                          In today’s fast-paced world, the way we learn has evolved 
                          dramatically. 
                          Gone are the days when education was limited to 
                          physical classrooms and rigid schedules. 
                          Online education has opened up endless possibilities, 
                          allowing learners from all walks of life to access 
                          knowledge whenever and wherever they want. 
                          Whether you’re looking to gain new skills, 
                          advance your career, or simply explore a passion, 
                          online courses offer the flexibility, affordability, 
                          and convenience to make it happen. In this guide, we’ll take you through the basics of online education, share tips for success, 
                          and show you how to make the most of learning in the digital age.</p>
                          <button className="my-5 bg-pink-300 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg relative overflow-hidden fade-ups fadeUp">
              <Link href={"blogs"}>
                <span className="block transition-transform duration-300 transform translate-x-0 hover:translate-x-1">
                  Read More Blogs
                </span>
              </Link>
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
