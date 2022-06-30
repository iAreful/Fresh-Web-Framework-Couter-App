/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  return (
    <div class={tw`border rounded-xl px-4 mt-6 bg-blue-600`}>
      <p class={tw`text-center my-6 text-3xl text-yellow-400 font-bold`}>Counter app</p>
    <div class={tw`border rounded-xl px-4 my-6 flex flex-row justify-between items-center w-11/12 mx-auto`}>
      
      <p class={tw`flex-grow-1 font-bold text-3xl animate-pulse`}>{count}</p>
      <button
        class={tw`btn font-bold text-red-300 px-4 text-3xl`}
        onClick={() => setCount(count - 1)}
        disabled={!IS_BROWSER}
      >
        -1
      </button>
      <button
        class={tw`btn font-bold text-green-300 text-3xl`}
        onClick={() => setCount(count + 1)}
        disabled={!IS_BROWSER}
      >
        +1
      </button>
    </div>
    </div>
  );
}
