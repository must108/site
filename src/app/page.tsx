import Title from "./components/Title";
import ShowStatus from "./components/ShowStatus";
import Buttons from "./components/Buttons";
import About from "./components/About";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

export default function Home() {
    return (
    <>
        <div className="mx-1 sm:mx-0 h-[100svh] 
            flex items-center 
			justify-center flex-col 
            overflow-scroll
            whitespace-normal mt-10 sm:mt-0">
            <div className="h-[90%] max-w-1/2 px-4 mt-10 sm:mt-0">
                <Title />
                <ShowStatus />
                <Buttons />
                <About />
                <Projects />
                <Tech />
            </div>
		</div>
    </>
    );
}
