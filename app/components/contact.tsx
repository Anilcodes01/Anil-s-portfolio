import { useRouter } from "next/navigation"


export default function Contact() {
    

    return <div className="flex justify-center">
        
        <div className=" w-full text-center">

        <div className="text-4xl text-center font-bold">
            Get in Touch
        </div>

            <div className="text-md mt-1 text-center flex w-full justify-center" >
            <p>Wanna contact with me? Just shoot me a dm on </p>
            <a href="https://x.com/Anilcodes01">
            <span   className="text-blue-400 hover:underline cursor-pointer">Twitter</span>
            </a>
            </div>
        </div>
    </div>
}