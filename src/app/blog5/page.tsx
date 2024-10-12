import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"
import pic5 from "../images/pic5.jpg";
export default function blog5(){
    return(
        <div>
            <Header />
        <div className="container">
        <div className="">
        <h1 className="font-medium italic text-2xl text-indigo-800 py-12">Set Clear Learning Goals</h1>
        <Image src={pic5} alt="pic" className="w-[400px] h-[300px]" />
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