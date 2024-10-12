import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"
import pic4 from "../images/pic4.jpg";
export default function blog4(){
    return(
        <div>
            <Header />
        <div className="container">
        <div className="">
        <h1 className="font-medium italic text-2xl text-indigo-800 py-12">Dedicated Study Space</h1>
        <Image src={pic4} alt="pic" className="w-[400px] h-[300px]" />
        <div className="">
            <p className="font-medium italic">Having a comfortable, quiet space dedicated to 
                studying can help you focus better and maintain discipline. Make sure it's free 
                from distractions and set up for optimal learning, 
                with all necessary tools like a laptop, notebooks, and reliable internet. </p>
        </div>
        </div>
       
            
        </div>
        <Footer />
        </div>
    );
    
 }