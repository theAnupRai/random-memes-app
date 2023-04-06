import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background overflow-x-hidden">

      <h1 className="bg-white w-full text-center mt-[40px] items-center rounded-lg text-5xl">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}