import Image from "next/image";

interface Hipcamp {
    img1: string,
    alt1: string,
    title: string,
    description: string,
    subTitle: string,
    img2: string,
    alt2: string,
    img3: string,
    alt3: string,
}

interface ToKnow {
    title: string,
    description1: string,
    description2: string,
    description3: string,
    description4: string,
    description5: string,
}

interface PlayUs {
    title: string,
    description1: string,
    description2: string,
    description3: string,
    description4: string,
}

interface HelpYou {
    title: string,
    description1: string,
    description2: string,
    description3: string,
    description4: string,
}

interface FooterItem {
    hipcamp?: Hipcamp,
    toKnow?: ToKnow,
    playUs?: PlayUs,
    helpYou?: HelpYou,
    footer: string,
}
function Footer({ props }: { props: FooterItem }) {
    return (
        <footer className="bg-pink-100 rounded-t-20xl mt-40 py-24 px-44 relative">
            {props.hipcamp?.img1 && props.hipcamp?.alt1 && (
                <Image
                    src={`/assets/img/${props.hipcamp?.img1}`}
                    alt={props.hipcamp?.alt1}
                    width={150}
                    height={150}
                    className="absolute -top-16 right-40"
                />
            )}

            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6">
                    <h3 className="font-semibold mb-5">{props.hipcamp?.title}</h3>
                    <p>{props.hipcamp?.description}</p>
                    <h3 className="mt-10 mb-5 font-semibold">
                        {props.hipcamp?.subTitle}
                    </h3>
                    <div className="flex">
                        {
                            props.hipcamp?.img2 && props.hipcamp?.alt2 && (
                                <Image
                                    src={`/assets/img/${props.hipcamp?.img2}`}
                                    alt={props.hipcamp?.alt2}
                                    width={147}
                                    height={44}
                                    className="mr-1"
                                />
                            )
                        }
                        {
                            props.hipcamp?.img3 && props.hipcamp?.alt3 && (
                                <Image
                                    src={`/assets/img/${props.hipcamp?.img3}`}
                                    alt={props.hipcamp?.alt3}
                                    width={147}
                                    height={44}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="col-span-2">
                    <h3 className="font-semibold mb-5">{props.toKnow?.title}</h3>
                    <p>{props.toKnow?.description1}</p>
                    <p>{props.toKnow?.description2}</p>
                    <p>{props.toKnow?.description3}</p>
                    <p>{props.toKnow?.description4}</p>
                    <p>{props.toKnow?.description5}</p>
                </div>
                <div className="col-span-2">
                    <h3 className="font-semibold mb-5">{props.playUs?.title}</h3>
                    <p>{props.playUs?.description1}</p>
                    <p>{props.playUs?.description2}</p>
                    <p>{props.playUs?.description3}</p>
                    <p>{props.playUs?.description4}</p>
                </div>
                <div className="col-span-2">
                    <h3 className="font-semibold mb-5">{props.helpYou?.title}</h3>
                    <p>{props.helpYou?.description1}</p>
                    <p>{props.helpYou?.description2}</p>
                    <p>{props.helpYou?.description3}</p>
                    <p>{props.helpYou?.description4}</p>
                </div>
            </div>
            <p className="mt-10 text-center">{props.footer}</p>
        </footer>
    );
}

export default Footer;
