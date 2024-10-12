import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
export default function Blogs() {
  return (
    <div>
      <Header />
      <div className="parentContainer">
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <Image src={pic1} alt="pic" className="w-[900px] h-[200px]" />
          </div>

          <h1 className="title">Flexibility and Convenience</h1>
          <p className="description">
            Online learning platforms allow you to study at your own pace and
            schedule.{" "}
          </p>
          <Link href={"/blog1"}>
            <button className="readMore">Read More</button>
          </Link>
        </div>

        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <Image src={pic2} alt="pic" className="w-[900px] h-[200px]" />
          </div>

          <h1 className="title">A Wide Range of Subjects</h1>
          <p className="description">
            From coding to creative writing, online platforms offer courses in
            virtually every subject.{" "}
          </p>
          <Link href={"/blog2"}>
            <button className="readMore">Read More</button>
          </Link>
        </div>

        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <Image src={pic3} alt="pic" className="w-[900px] h-[200px]" />
          </div>

          <h1 className="title">Cost-Effective Learning</h1>
          <p className="description">
          Many online courses are affordable or even free, providing access to high-quality education.{" "}
          </p>
          <Link href={"/blog3"}>
            <button className="readMore">Read More</button>
          </Link>
        </div>

        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <Image src={pic4} alt="pic" className="w-[900px] h-[200px]" />
          </div>

          <h1 className="title">Dedicated Study Space</h1>
          <p className="description">
          Having a comfortable, quiet space dedicated to studying can help you focus better and maintain discipline.{" "}
          </p>
          <Link href={"/blog4"}>
            <button className="readMore">Read More</button>
          </Link>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <Image src={pic5} alt="pic" className="w-[900px] h-[200px]" />
          </div>

          <h1 className="title">Set Clear Learning Goals</h1>
          <p className="description">
          Before starting a course, outline what you want to achieve.{" "}
          </p>
          <Link href={"/blog5"}>
            <button className="readMore">Read More</button>
          </Link>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <Image src={pic6} alt="pic" className="w-[900px] h-[200px]" />
          </div>

          <h1 className="title">Cost-Effective Learning</h1>
          <p className="description">
          Many online courses are affordable or even free, providing access to high-quality education.{" "}
          </p>
          <Link href={"/blog6"}>
            <button className="readMore">Read More</button>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
