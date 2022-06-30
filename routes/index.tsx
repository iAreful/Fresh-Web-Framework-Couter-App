/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
      
        src="/logo.svg"
        class={tw`w-16 h-16`}
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6 text-center`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      {/* <h1 class='underline'>Hello World</h1> */}
      <p class={tw`text-3xl underline text-center font-bold text-blue-500`}>Hello twind!</p>
      <Counter start={3} />
    </div>
  );
}
