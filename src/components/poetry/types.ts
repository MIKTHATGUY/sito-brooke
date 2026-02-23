export interface PoetryNote {
  id: string;
  type: 'cultural' | 'historical' | 'linguistic' | string;
  content: string;
}

export interface PoetryLineData {
  en: string;
  ita: string;
  notes?: PoetryNote[];
  refs?: string[];
}

export type PoetryData = Record<string, PoetryLineData>;

export interface PoetrySliderProps {
  data: PoetryData;
  className?: string;
  onLineEnter?: (lineId: string) => void;
  onLineExit?: (lineId: string) => void;
  onNoteOpen?: (noteId: string) => void;
}

export interface PoetrySliderApi {
  goToLine: (lineId: string) => void;
  highlightLine: (lineId: string) => void;
  activateLine: (lineId: string) => void;
  reset: () => void;
}
