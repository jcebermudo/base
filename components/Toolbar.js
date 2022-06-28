import Image from "next/image";
import Add from "../public/toolbar/icons/Add.svg";
import Undo from "../public/toolbar/icons/Undo.svg";
import Redo from "../public/toolbar/icons/Redo.svg";
import Trash from "../public/toolbar/icons/Trash.svg";

const Toolbar = () => {
  return (
    <>
      <div className="gap-x-2.5 absolute inset-x-0 bottom-0 justify-center mb-12 flex select-none drop-shadow-[0_2px_2px_rgba(206,163,182,0.5)]">
        {/* Add Button / Main Button */}
        <div className="bg-[#FF4694] border-b-2 border-[#E74388] px-5 pt-5 pb-3 rounded-2xl ">
          <Image src={Add} alt="Add" width={28.8} height={28.8} />
        </div>
        {/* Other Buttons */}
        <div className="flex bg-white border-b-2 border-[#F0DEE4] rounded-2xl place-items-center px-3.5 gap-x-2.5">
          {/* Undo Button */}
          <div className="bg-gradient-to-b from-black p-2.5 rounded-2xl bg-opacity-0 hover:bg-opacity-100 duration-100">
            <Image src={Undo} alt="Undo" width={27} height={24} />
          </div>
          {/* Redo Button */}
          <div className="bg-black p-2.5 rounded-2xl bg-opacity-0 hover:bg-opacity-100 duration-100">
            <Image src={Redo} alt="Redo" width={27} height={24} />
          </div>
          {/* Divider */}
          <div className="border-dashed border-l-2 opacity-50 border-[#C7AEBA] h-[30px]"></div>
          {/* Delete Button */}
          <div className="bg-black py-2 px-3.5 rounded-2xl bg-opacity-0 hover:bg-opacity-100 duration-100">
            <Image src={Trash} alt="Delete" width={21} height={28} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
