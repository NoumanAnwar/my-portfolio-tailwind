import Link from "next/link"
import { FaFacebookF, FaYoutube , FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
export default function Footer () {
    return (
        <div>
        <footer className="bg-white py-8 px-10">
 <div className="container mx-auto grid-cols-3">  </div>
 <div>
    <h3 className="text-4xl font-bold mb-4 mt-20">Social Links</h3>
    <div className="flex space-x-4 mb-4"></div>
    <div className="flex gap-10">
     <Link href={''}><FaFacebookF className=" text-white w-8 h-8 rounded-full bg-blue-800 pt-1 pb-1"/></Link>
     <Link href={''}><FaYoutube className=" text-white w-8 h-8 rounded-full bg-red-600 pt-1 pb-1"/></Link>
     <Link href={''}><FaTwitter className=" text-white w-8 h-8 rounded-full bg-blue-500 pt-1 pb-1"/></Link>
     <Link href={''}><FaInstagram className=" text-white w-8 h-8 rounded-full bg-pink-500 pt-1 pb-1"/></Link>
     <Link href={''}><FaTiktok className=" text-white w-8 h-8 rounded-full bg-black pt-1 pb-1"/></Link>
     </div>
     <div className="mt-5">
<a href="mailto:maan.k_55@yahoo.com" className="text-blue-800 underline flex items-center gap-3"><AiOutlineMail className="size-8"/>
    maan.k_55@yahoo.com</a>
 </div>
 </div>
        </footer>
        </div>
    )
}