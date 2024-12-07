import { Bold, Italic, Baseline, Strikethrough} from 'lucide-react';



export const Toolbar = () => {
    return (
      <div className="w-full bg-[#d5d5d5] border border-t-white border-b-[#c5c5c5] p-1 md:flex md:flex-wrap text-xs myNav2 justify-center md:justify-start sm:border">
        <div><Bold /></div>
        <div><Italic /></div>
        <div><Baseline /></div>
        <div><Strikethrough /></div>
        
      </div>
    );
  };