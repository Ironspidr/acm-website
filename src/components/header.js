import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";
import backdrop from "../assets/img/backdrop_1.jpg";


export default function Header() {
    return (
        <header className="App-header pt-5 justify-center">
        <ComplexNavbar />
        <div className="flex items-center justify-center w-full pt-10">
          <Banner
            title="About Eastvale Innovators"
            caption="Gearing up for the future!"
            Banner={backdrop}
          />
        </div>
      </header>
    );
}