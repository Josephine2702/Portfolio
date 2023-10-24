import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {About} from "./layout/sections/about/About";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {BackWrapper, Wrapper} from "./components/Container";
import {BADNAME} from "dns";


function App() {
    return (
        <div className="App">
            <BackWrapper>
                <Wrapper/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
                <Wrapper/>
            <About/>
            <Contact/>
            <Footer/>
            </BackWrapper>
        </div>
    );
}

export default App;

