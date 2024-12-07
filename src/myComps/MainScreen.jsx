export const MainScreen = () => {
  return (
    <div className="mainScreen border-t border-white bg-[#d5d5d5] p-2 grow flex flex-col overflow-auto">
      <div className="h-full myBody bg-[#1b1b1b] p-2 flex flex-col gap-2 overflow-auto body-scroll myListContainer"  >


        <div className="flex gap-1 w-full">
          <p>[ <span className="notcompleted">x</span> ] - </p>
          <input type="text" className="listInputBox grow" />
        </div>


        <div className="flex gap-1">
          <p>[ <span className="completed">x</span> ] - </p>
          <input type="text" className="listInputBox" />
        </div>
      </div>
    </div>
  );
};
