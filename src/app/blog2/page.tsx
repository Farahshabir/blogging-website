import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"
import pic2 from "../images/pic2.jpg";
export default function blog2(){
    return(
        <div>
            <Header />
        <div className="container">
        <div className="">
        <h1 className="font-medium italic text-2xl text-indigo-800 py-12">A Wide Range of Subjects</h1>
        <Image src={pic2} alt="pic" className="w-[400px] h-[300px]" />
        <div className="">
            <p className="font-medium italic">Online learning platforms allow you to study at your own pace and schedule. 
                Whether you're balancing work, family, or other commitments, online courses offer the 
                flexibility to access learning materials anytime, anywhere. </p>
        </div>
        </div>
       
            
        </div>
        <Footer />
        </div>
    );
    
 }