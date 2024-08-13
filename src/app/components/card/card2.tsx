import Image from "next/image";
import Button3 from "../button/button3";
import Badge1 from "../badge/badge1";

interface Card2 {
    img1: string,
    alt1: string,
    img2: string,
    alt2: string,
    price: string,
    title: string,
    description: string,
    button: string
}

function Card2({props}: {props: Card2}) {
    return(
        <div className="py-8 px-5 text-center shadow-lg bg-white rounded-2xl">
            <div className="relative">
                <Image
                    src={`/assets/img/${props.img1}`}
                    alt={props.alt1}
                    width={40}
                    height={40}
                    quality={100}
                    priority
                    className="w-10 h-10 absolute top-2.5 right-2.5"
                />
                <Image
                    src={`/assets/img/${props.img2}`}
                    alt={props.alt2}
                    width={265}
                    height={173}
                    quality={100}
                    className="w-full"
                />
                <Badge1 props={{ price: props.price }} />
            </div>
            <div className="mt-10">
                <h3 className="font-semibold">{ props.title }</h3>
                <p className="explore__body__card1__body__para">{ props.description }</p>
                <Button3 props={{ name: props.button }} />
            </div>
        </div>
    )
}

export default Card2;