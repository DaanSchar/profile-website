import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import FadeIn from 'react-fade-in';

function App() {
    return (
        <div>
            <div className={"flex-col justify-around px-8 h-screen"}>
                <FadeIn className="h-1/3 grid content-end">
                    <div>
                        <h1 className="text-center md:text-7xl sm:text-5xl text-3xl font-opensans font-bold text-teal-700">Daan Schar</h1>
                        <h2 className="text-center md:text-5xl sm:text-3xl text-xl font-opensans md:p-6 sm:p-4 p-2">Developer</h2>
                    </div>
                </FadeIn>

                <FadeIn delay={400} className="h-1/3 grid content-start">
                    <div>
                        <p className="text-center md:text-lg sm:text-sm text-xs md:pt-8 sm:pt-6 pt-4 px-2">Data Science & AI student seeking the next new thing to
                            learn.</p>
                        <p className="text-center md:text-lg sm:text-sm text-xs pb-6 pt-1 px-5">Check out my other pages below and let's talk!</p>
                    </div>
                </FadeIn>

                <FadeIn delay={800}>
                    <Socials/>
                </FadeIn>

                <Location/>

            </div>


        </div>
    );
}

const Socials = () => {
    return (
        <div className={"grid content-center"}>
            <div className="flex justify-center gap-16 p-3">
                <a href="https://github.com/DaanSchar" target="_blank" rel="noreferrer">
                    <button>
                        <AiFillGithub size={"40"} className={"text-teal-900 hover:text-teal-500 transition-all"}/>
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/daan-schar-437844215/" target="_blank" rel="noreferrer">
                    <button className="">
                        <AiFillLinkedin size={"40"} className={"text-teal-800 hover:text-teal-500 transition-all"}/>
                    </button>
                </a>

                <a href="https://google.com" target="_blank" rel="noreferrer">
                    <button>
                        <MdEmail size={"40"} className={"text-teal-700 hover:text-teal-500 transition-all"}/>
                    </button>
                </a>
            </div>
        </div>
    )
}

const Location = () => {
    return (
        <a
            href="https://www.google.com/maps/place/Maastricht/@50.8577007,5.4303014,11z/data=!3m1!4b1!4m5!3m4!1s0x47c0e9ec5841069f:0x53eb957bccbea86e!8m2!3d50.8513682!4d5.6909725"
            target="_blank"
            rel="noreferrer"
        >
            <p className={"absolute bottom-5 left-5 md:text-base sm:text-sm xs:text-xs text-teal-900 font-semibold hover:text-teal-500 transition-all"}>Maastricht, Netherlands</p>
        </a>
    )
}

export default App;
