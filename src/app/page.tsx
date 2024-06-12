import { Button } from "@/components/button";
import Card from "@/components/card";
import { Book } from "@/vectors/book";
import Image from "next/image";

const Summary = [
  { name: "วิชานอน", author: "Sleep Master", semester: "1/2569" },
  {
    name: "วิชานิติตรรกศาสตร์",
    author: "เรียนเด่น เล่นดี",
    semester: "1/2569",
  },
  {
    name: "วิชานิติตรรกศาสตร์",
    author: "เรียนเด่น เล่นดี",
    semester: "1/2569",
  },
  {
    name: "วิชานิติตรรกศาสตร์",
    author: "เรียนเด่น เล่นดี",
    semester: "1/2569",
  },
  { name: "วิชานอน", author: "Sleep Master", semester: "1/2569" },
  { name: "วิชานอน", author: "Sleep Master", semester: "1/2569" },
  { name: "วิชานอน", author: "Sleep Master", semester: "1/2569" },
  {
    name: "วิชานิติตรรกศาสตร์",
    author: "เรียนเด่น เล่นดี",
    semester: "1/2569",
  },
  {
    name: "วิชานิติตรรกศาสตร์",
    author: "เรียนเด่น เล่นดี",
    semester: "1/2569",
  },
  {
    name: "วิชานิติตรรกศาสตร์",
    author: "เรียนเด่น เล่นดี",
    semester: "1/2569",
  },
  { name: "วิชานอน", author: "Sleep Master", semester: "1/2569" },
  { name: "วิชานอน", author: "Sleep Master", semester: "1/2569" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-8">
      <section className="flex flex-col items-center">
        <div className="flex flex-col text-center gap-6">
          <h1 className="flex flex-row text-3xl items-center justify-center">
            Law <span className="text-[#D95F8C]">Chula</span>
          </h1>
          <h2 className="text-2xl pb-4">Subject Summary Database</h2>
          <Book className="w-auto md:max-h-64 max-h-32" />
        </div>
      </section>
      <div className="hidden md:flex flex-col justify-center items-center pt-10">
        <Button
          href="#"
          className="mb-4 rounded-full text-white px-12 py-3 text-xl font-bold bg-[#D95F8C] shadow-lg lg:px-[4.5rem] lg:py-3.5 lg:text-2xl"
        >
          <span>Upload Your Summary</span>
        </Button>
      </div>
      <div className="flex flex-row justify-center items-center md:hidden pt-8">
        <Button
          href="#"
          className="mb-4 rounded-full text-white px-[4.5rem] py-3.5 text-xl font-bold bg-[#D95F8C] shadow-lg"
        >
          <span>Upload Your Summary</span>
        </Button>
      </div>
      <section className="flex justify-center items-center pt-10">
        <article className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {Summary.map((Summary) => {
            return (
              <Card
                key={Summary.name}
                name={Summary.name}
                author={Summary.author}
                semester={Summary.semester}
              />
            );
          })}
        </article>
      </section>
    </main>
  );
}
