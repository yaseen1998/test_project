import Counter from "./Counter";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-white">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <Counter/>
      </div>
    </main>
  );
}
