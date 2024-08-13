import Image from "next/image";

interface Card3 {
    bgImg: string,
    title: string,
    description: string,
    img1: string,
    alt1: string,
    img1Name: string,
    img2: string,
    alt2: string,
    img3: string,
    alt3: string
}



function Card3({props}: {props: Card3}) {
    return(
        <div className={`bg-[url('/assets/img/${props.bgImg}')] h-96 mt-36 grid grid-cols-2 gap-x-52 px-24 items-center`}>
            <div className="">
                <h2 className="font-bold text-4xl">{ props.title }</h2>
                <p className="mt-4 mb-7">
                    { props.description }
                </p>
                <div className="flex h-20 items-center bg-white p-5 rounded-3xl">
                    <Image
                        src={`/assets/img/${props.img1}`}
                        alt={props.alt1}
                        width={25}
                        height={18}
                        quality={100}
                        priority
                        className="flex-none mr-2.5"
                    />
                    <p className="flex-1">
                        { props.img1Name }
                    </p>
                    <div className="flex-1">
                        <Image
                            src={`/assets/img/${props.img2}`}
                            alt={props.alt2}
                            width={48}
                            height={48}
                            quality={100}
                            priority
                            className="w-12 float-end"
                        />
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src={`/assets/img/${props.img3}`}
                    alt={props.alt3}
                    width={440}
                    height={330}
                    quality={100}
                    priority
                />
            </div>
        </div>
    )
}

export default Card3;