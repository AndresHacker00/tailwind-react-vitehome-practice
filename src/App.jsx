import Cards from "./components/cards";
import { textVite } from "./data/textVite";

function App() {
  return (
    <div className="bg-black">
      <div className="h-screen container mx-auto flex items-center px-28 mt-36">
        <div className="text-vite">
          <span className="font-semibold relative  text-purpolcito via-blusito text-transparent bg-clip-text text-6xl">Vite</span>
          <p className="font-medium text-white text-6xl">Next Generation</p>
          <p className="font-medium text-white text-6xl py-5">FrontEnd Tooling</p>
          <p className="text-grey text-3xl">Get ready for a development environment that</p>
          <p className="text-grey text-3xl">can finally catch up with you.</p>
          <div className="buttons py-10">
            <button className="rounded-full bg-grey hover:bg-grey-500 text-white px-4 py-2" style={{ backgroundColor: "#8878FF", marginRight: '10px' }}>Get Started</button>
            <button className="rounded-full bg-grey hover:bg-slate-500 text-white px-4 py-2" style={{ backgroundColor: "#525259ad", marginRight: '10px' }}>Why Vite?</button>
            <button className="rounded-full bg-grey hover:bg-slate-500 text-white px-4 py-2" style={{ backgroundColor: "#525259ad", marginRight: '10px' }}>View on Github</button>
          </div>
        </div>
        <div className="h-54 w-25">
          <img src="src/assets/logo-with-shadow.png" alt ="image-vite"/>
        </div>
      </div>
      <section className="container mx-auto flex items-center px-24 mt-14 flex-wrap">
        {textVite.map((data, index) => (
          <Cards
            key={`feature-card-${index}`}
            icon={data.icon}
            title={data.title}
            content={data.content}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
