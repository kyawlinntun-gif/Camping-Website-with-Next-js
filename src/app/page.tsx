import Header from "./layouts/header";
import Footer from './layouts/footer';
import Main from './layouts/main';

import { header, footer } from '@/app/data';

function Home() {
    return (
        <div className="bg-slate-50 text-black">
            {
                header.map((header, index) => (
                    <Header key={index} props={{ title: header.title, description: header.description }} />
                ))
            }
            <Main/>
            {
                footer.map((footer, index) => (
                    <Footer key={index}
                        props=
                        {{ hipcamp: {
                            img1: footer.hipcamp.img1,
                            alt1: footer.hipcamp.alt1,
                            title: footer.hipcamp.title,
                            description: footer.hipcamp.description,
                            subTitle: footer.hipcamp.subTitle,
                            img2: footer.hipcamp.img2,
                            alt2: footer.hipcamp.alt2,
                            img3: footer.hipcamp.img3,
                            alt3: footer.hipcamp.alt3
                        },
                        toKnow: {
                            title: footer.toKnow.title,
                            description1: footer.toKnow.description1,
                            description2: footer.toKnow.description2,
                            description3: footer.toKnow.description3,
                            description4: footer.toKnow.description4,
                            description5: footer.toKnow.description5
                        },
                        playUs: {
                            title: footer.playUs.title,
                            description1: footer.playUs.description1,
                            description2: footer.playUs.description2,
                            description3: footer.playUs.description3,
                            description4: footer.playUs.description4
                        },
                        helpYou: {
                            title: footer.helpYou.title,
                            description1: footer.helpYou.description1,
                            description2: footer.helpYou.description2,
                            description3: footer.helpYou.description3,
                            description4: footer.helpYou.description4,
                        },
                        footer: footer.footer     
                        }}
                    />
                ))
            }
        </div>
    )
}

export default Home;