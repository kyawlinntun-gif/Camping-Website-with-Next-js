import Image from "next/image";

interface Card1 {
    img: string,
    alt: string,
    title: string,
    description: string
}

function Card1({props}: {props: Card1}) {
    return(
        <div className="text-center shadow-lg py-8 px-4 bg-white rounded-2xl">
            <div>

                <Image
                    src={`/assets/img/${props.img}`}
                    alt={props.alt}
                    width={82}
                    height={82}
                    className="mx-auto"
                    quality={100}
                    priority
                />
            </div>
            <h4 className="font-semibold mt-5 mb-2.5">{ props.title }</h4>
            <p>
                { props.description }
            </p>
        </div>
    )
}

export default Card1;