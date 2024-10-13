import Link from "next/link"

export default function Header(){
    return(
    <div className="navBar">
        <ul className="header-button">
            <li><Link href={"/"} className="">Home</Link></li>
            <li><Link href={"/blogs"} className="">Blog</Link></li>
            <li><Link href={"/contact"} className="">Contact Us</Link></li> 
        </ul>
    </div>
    )
}