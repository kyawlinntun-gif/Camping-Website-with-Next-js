import Button1 from "../components/button/button1";
import Button2 from '../components/button/button2';
import Image from "next/image";

interface textImage {
    title: string,
    description: string
}

function Header({ props }: { props: textImage }) {
    return(
        <header className="bg-[url('/assets/img/bg1.png')] h-screen bg-cover bg-center rounded-b-12xl">
            <div className="custom_container mx-auto">
                <nav className="flex justify-between items-center text-white pt-12">
                    <div className="flex items-center gap-x-5">
                        <Image
                            src="/assets/img/logo1.png"
                            alt="Logo"
                            width={32}
                            height={32}
                            quality={100}
                            priority
                        />
                        <ul className="flex gap-x-7">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Destination</a></li>
                            <li><a href="#">Near me</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <ul className="flex gap-x-10">
                        <li><a href="#">Sign up</a></li>
                        <li><Button1 props={{ name: "Sign Up" }}/></li>
                    </ul>
                </nav>
                <div className="w-1/3 text-center text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <h1 className="text-7xl font-bold">{ props.title }</h1>
                    <p className="m-8">{ props.description }</p>
                    <Button2 props={{ name: "Discover" }} />
                </div>
            </div>
        </header>
    )
}

export default Header;