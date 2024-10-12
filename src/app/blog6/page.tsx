import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"
import pic6 from "../images/pic6.jpg";
export default function blog6(){
    return(
        <div>
            <Header />
        <div className="container">
        <div className="">
        <h1 className="font-medium italic text-2xl text-indigo-800 py-12">Stay Organized with a Study Schedule</h1>
        <Image src={pic6} alt="pic" className="w-[400px] h-[300px]" />
        <div className="">
            <p className="font-medium italic">Before starting a course, outline 
                what you want to achieve. Setting SMART goals (Specific, Measurable, 
                Achievable, Relevant, and Time-bound) 
                can keep you on track throughout your learning journey. </p>
        </div>
        </div>
       
            
        </div>
        <Footer />
        </div>
    );
    
 }