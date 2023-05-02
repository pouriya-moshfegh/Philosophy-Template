import React from "react";
import PPost from "./PPost/PPost";
import About from "./About/About";

export default function InfoHead() {
  return (
    <section className="mt-10 h-[50vh] px-8 sm:px-0 flex flex-col md:flex-row">
      <PPost />
      <About />
    </section>
  );
}
