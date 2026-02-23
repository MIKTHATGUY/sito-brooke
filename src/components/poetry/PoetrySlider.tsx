"use client";

import React, { 
  useCallback, 
  useEffect, 
  useImperativeHandle, 
  useRef, 
  useState, 
  forwardRef 
} from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PoetrySliderApi, PoetrySliderProps } from "./types";
import { Info, Link as LinkIcon, GripHorizontal } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PoetrySlider = forwardRef<PoetrySliderApi, PoetrySliderProps>(
  ({ data, className, onLineEnter, onLineExit, onNoteOpen }, ref) => {
    // index -1 means slider is at the very top (all English)
    const [activeIndex, setActiveIndex] = useState(-1);
    const [openNoteId, setOpenNoteId] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const lineIds = Object.keys(data).sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, '')) || 0;
      const numB = parseInt(b.replace(/\D/g, '')) || 0;
      return numA - numB;
    });

    const goToLine = useCallback((lineId: string) => {
      const index = lineIds.indexOf(lineId);
      if (index !== -1) {
        setActiveIndex(index);
        const element = lineRefs.current[lineId];
        element?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, [lineIds]);

    const activateLine = useCallback((lineId: string) => {
      goToLine(lineId);
    }, [goToLine]);

    const highlightLine = useCallback((lineId: string) => {
      const element = lineRefs.current[lineId];
      if (element) {
        element.classList.add("bg-amber-50");
        setTimeout(() => element.classList.remove("bg-amber-50"), 2000);
      }
    }, []);

    const reset = useCallback(() => {
      setActiveIndex(-1);
    }, []);

    useImperativeHandle(ref, () => ({
      goToLine,
      highlightLine,
      activateLine,
      reset
    }));

    // Handle Native Dragging
    const handlePointerDown = (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none'; // Prevent text selection while dragging
    };

    useEffect(() => {
      const handlePointerMove = (e: PointerEvent) => {
        if (!isDragging) return;
        const mouseY = e.clientY;
        let newIndex = -1;

        // Find which line the mouse is currently over
        for (let i = 0; i < lineIds.length; i++) {
          const el = lineRefs.current[lineIds[i]];
          if (el) {
            const rect = el.getBoundingClientRect();
            // A small buffer (30px) ensures we don't accidentally translate the line
            // just by hovering near its top border. We have to drag INTO it.
            if (mouseY > rect.top + 30) {
              newIndex = i;
            }
          }
        }

        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
          if (newIndex >= 0) {
             onLineEnter?.(lineIds[newIndex]);
          }
        }
      };

      const handlePointerUp = () => {
        setIsDragging(false);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      };

      if (isDragging) {
          window.addEventListener('pointermove', handlePointerMove);
          window.addEventListener('pointerup', handlePointerUp);
      }

      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
      };
    }, [isDragging, activeIndex, lineIds, onLineEnter]);

    return (
      <div 
        ref={containerRef}
        className={cn(
          "relative bg-[#f4f1ea] selection:bg-black selection:text-white pb-24 overflow-x-hidden",
          className
        )}
      >
        {/* Global overlay during drag to ensure cursor style is maintained anywhere on screen */}
        {isDragging && (
          <div className="fixed inset-0 z-50 cursor-grabbing" />
        )}

        <div className="max-w-2xl mx-auto py-12 px-8 relative flex flex-col">

          {/* Top Initial Slider Position */}
          <div className="relative h-4 mb-8 flex items-center justify-center">
            {activeIndex === -1 && (
              <motion.div 
                layoutId="slider-bar"
                className="absolute left-[-4rem] right-[-4rem] h-px bg-black z-30 flex items-center justify-center"
              >
                 <div 
                    onPointerDown={handlePointerDown}
                    className="bg-black text-white p-1.5 rounded-full cursor-grab active:cursor-grabbing shadow-lg touch-none"
                 >
                   <GripHorizontal className="w-3.5 h-3.5" />
                 </div>
              </motion.div>
            )}
          </div>

          {lineIds.map((id, index) => {
            const isTranslated = index <= activeIndex;
            const lineData = data[id];
            const isLastTranslated = index === activeIndex;

            return (
              <div
                key={id}
                ref={(el) => { lineRefs.current[id] = el; }}
                className="relative flex flex-col group mb-6"
              >
                {/* Content Wrapper using CSS Grid to overlap English and Italian. 
                    This ensures the container height is always the maximum of the two,
                    completely eliminating layout shifting on the Y-axis! */}
                <div className="relative grid items-start">
                  
                  {/* English Version */}
                  <div className={cn(
                    "col-start-1 row-start-1 text-2xl font-serif leading-relaxed transition-opacity duration-500",
                    isTranslated ? "opacity-0 pointer-events-none" : "opacity-100"
                  )}>
                    {lineData.en}
                  </div>

                  {/* Italian Version + Notes */}
                  <div className={cn(
                    "col-start-1 row-start-1 transition-opacity duration-500 flex flex-col",
                    isTranslated ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}>
                    <div className="text-xl font-serif italic text-slate-800 leading-relaxed border-l-2 border-black/10 pl-6">
                      {lineData.ita}
                    </div>

                    {/* Notes & Actions */}
                    <div className="mt-3 flex flex-wrap gap-4 items-center pl-6">
                      {lineData.notes?.map(note => (
                        <button
                          key={note.id}
                          onClick={() => setOpenNoteId(openNoteId === note.id ? null : note.id)}
                          className={cn(
                            "flex items-center gap-1 text-[9px] uppercase tracking-[0.2em] font-bold transition-colors",
                            openNoteId === note.id ? "text-black" : "text-black/30 hover:text-black"
                          )}
                        >
                          <Info className="w-3 h-3" />
                          <span>Nota</span>
                        </button>
                      ))}
                      {lineData.refs?.map(refId => (
                        <button
                          key={refId}
                          onClick={() => goToLine(refId)}
                          className="flex items-center gap-1 text-[9px] uppercase tracking-[0.2em] font-bold text-black/30 hover:text-black transition-colors"
                        >
                          <LinkIcon className="w-3 h-3" />
                          <span>Rif. {refId}</span>
                        </button>
                      ))}
                    </div>

                    {/* Note Box */}
                    {openNoteId && lineData.notes?.some(n => n.id === openNoteId) && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 ml-6 p-4 border border-black/10 bg-white/50 text-[13px] leading-relaxed text-slate-700"
                      >
                        {lineData.notes.find(n => n.id === openNoteId)?.content}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* The Slider Bar - Placed absolutely so it doesn't take up Y-axis space */}
                {isLastTranslated && (
                   <div className="absolute -bottom-3 left-0 right-0 h-0 flex items-center justify-center z-20 pointer-events-none">
                     <motion.div 
                      layoutId="slider-bar"
                      className="absolute left-[-4rem] right-[-4rem] h-px bg-black z-30 flex items-center justify-center pointer-events-auto"
                     >
                       <div 
                          onPointerDown={handlePointerDown}
                          className="bg-black text-white p-1.5 rounded-full cursor-grab active:cursor-grabbing shadow-lg touch-none"
                       >
                         <GripHorizontal className="w-3.5 h-3.5" />
                       </div>
                     </motion.div>
                   </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

PoetrySlider.displayName = "PoetrySlider";