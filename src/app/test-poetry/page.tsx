"use client";

import { useRef } from "react";
import { PoetrySlider } from "@/components/poetry/PoetrySlider";
import { PoetryData, PoetrySliderApi } from "@/components/poetry/types";

const mockPoetry: PoetryData = {
  "1": {
    "en": "Roses are red, you are a jew",
    "ita": "Le rose sono rosse,\nTu sei un ebreo",
    "notes": [
      { id: "n1", type: "cultural", content: "Un riferimento a una famosa filastrocca." }
    ]
  },
  "2": {
    "en": "Violets are blue",
    "ita": "Le viole sono blu",
    "refs": ["5"]
  },
  "3": {
    "en": "Sugar is sweet",
    "ita": "Lo zucchero è dolce"
  },
  "4": {
    "en": "And so are you",
    "ita": "E così sei tu"
  },
  "5": {
    "en": "Wait, I was wrong",
    "ita": "Aspetta, mi sbagliavo",
    "notes": [
      { id: "n2", type: "correction", content: "Una brusca correzione dell'autore." }
    ]
  },
  "6": {
    "en": "You're actually not",
    "ita": "In realtà non lo sei"
  }
};

export default function PoetryTestPage() {
  const sliderRef = useRef<PoetrySliderApi>(null);

  return (
    <div className="flex h-screen bg-slate-50">
      <div className="w-1/4 p-8 border-r bg-white shadow-xl z-10 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Poetry Control Panel</h1>
        <button 
          onClick={() => sliderRef.current?.goToLine("4")}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Vai a riga 4
        </button>
        <button 
          onClick={() => sliderRef.current?.activateLine("6")}
          className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Attiva riga 6
        </button>
        <button 
          onClick={() => sliderRef.current?.highlightLine("2")}
          className="w-full py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Evidenzia riga 2
        </button>
        <button 
          onClick={() => sliderRef.current?.reset()}
          className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Reset
        </button>
      </div>
      
      <div className="flex-1 h-full">
        <PoetrySlider 
          ref={sliderRef}
          data={mockPoetry} 
          onLineEnter={(id) => console.log("Enter:", id)}
          onLineExit={(id) => console.log("Exit:", id)}
        />
      </div>
    </div>
  );
}
