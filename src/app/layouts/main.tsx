import Image from "next/image";
import Card1 from "../components/card/card1";
import Card2 from "../components/card/card2";
import Card3 from "../components/card/card3";

import { card1, card2, card3 } from "@/app/data";

function Main() {
    return(
        <main>
            <div className="custom_container mx-auto">
                <div className="grid grid-cols-4 gap-x-5 -mt-24">
                {
                        card1?.map((card, key) => (
                            <Card1 key={key} props={{ img: card.img, alt: card.alt, title: card.title, description: card.description }}/>
                        ))
                    }
                </div>
                <div className="pt-36">
                    <div className="mx-auto w-2/5 text-center">
                        <Image
                            src='/assets/img/explore.png'
                            alt="Explore"
                            width={90}
                            height={90}
                            quality={100}
                            priority
                            className="mx-auto mb-16"
                        />
                        <h2 className="text-4xl">Explore Destinations &amp; Activities</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-5 mt-20">
                        {
                            card2.map((card, key) => (
                                <Card2 props={{ img1: card.img1, alt1: card.alt1, img2: card.img2, alt2: card.alt2, price: card.price, title: card.title, description: card.description, button: card.button }} key={key} />
                            ))
                        }
                    </div>
                    <a href="#" className="py-2.5 border-2 border-orange-600 rounded-2xl block mx-auto w-52 text-center mt-10" >View all</a>
                </div>
                {
                    card3.map((card, index) => (
                        <Card3 key={index} props={{ bgImg: card.bgImg, title: card.title, description: card.description, img1: card.img1, alt1: card.alt1, img1Name: card.img1Name, img2: card.img2, alt2: card.alt2, img3: card.img3, alt3: card.alt3 }} />
                    ))
                }
            </div>
        </main>
    )
}

export default Main;