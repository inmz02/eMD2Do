import { CgClose } from "react-icons/cg";

import { FaRegWindowMinimize, FaRegWindowMaximize } from "react-icons/fa";

export const TitleBar = () => {
  return (
    <div className="TitleBar flex justify-between items-center p-1 bg-[#1E1E1E]">
      {/* left side */}
      <div className="flex items-center gap-2">
        <img
          src="https://i.imgur.com/BAvoMZ7.gif"
          className="w-[20px] h-[20px]"
        />
        <p className="text-white">eMD2Do</p>
      </div>

      {/* Right side */}
      <div className="flex gap-1 myIcons">
        <div className="border border-[#c5c5c5]">
          <FaRegWindowMinimize />
        </div>
        <div className="border border-[#c5c5c5]">
          <FaRegWindowMaximize />
        </div>
        <div className="border border-[#c5c5c5]">
          <CgClose className="closeBtn" />
        </div>
      </div>
    </div>
  );
};
