import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"
import pic3 from "../images/pic3.jpg";
export default function blog3(){
    return(
        <div>
            <Header />
        <div className="container">
        <div className="">
        <h1 className="font-medium italic text-2xl text-indigo-800 py-12">Cost-Effective Learning</h1>
        <Image src={pic3} alt="pic" className="w-[400px] h-[300px]" />
        <div className="">
            <p className="font-medium italic">Many online courses are affordable or even free, 
                providing access to high-quality education without the hefty price tag of 
                traditional universities. 
                This makes online education an excellent option for individuals seeking to upskill on a budget. </p>
        </div>
        </div>
       
            
        </div>
        <Footer />
        </div>
    );
    
 }