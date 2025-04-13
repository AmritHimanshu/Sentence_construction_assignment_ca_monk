import EditNoteIcon from "@mui/icons-material/EditNote";
import PaidIcon from "@mui/icons-material/Paid";
import { NavLink } from "react-router-dom";

function Instruction() {
  return (
    <div className="relative border-2 w-full min-h-[100vh] flex items-center justify-center px-3">
      <div className="absolute top-0 text-center w-full p-5 text-sm md:text-[20px] lg:text-[30px] xl:text-lg shadow-lg">
        Sentence Construction
      </div>

      <div className="text-center w-[700px] space-y-7">
        <EditNoteIcon sx={{ color: "gray", fontSize: "70px" }} />

        <div className="space-y-3">
          <div className="text-sm md:text-[20px] lg:text-[30px] xl:text-[40px] font-bold">Sentence Construction</div>
          <div className="text-gray-500 text-xs md:text-sm lg:text-[16px] xl:text-[20px]">
            Select the correct words to complete the sentence by arranging the
            provided option in right order.
          </div>
        </div>

        <div className="flex my-20">
          <div className="flex-1/3 space-y-5 border-gray-300 border-r-[1px]">
            <div className="font-medium text-xs md:text-sm lg:text-lg xl:text-[22px]">Time per Question</div>
            <div className="text-gray-600 text-xs md:text-sm lg:text-lg xl:text-[20px]">30 sec</div>
          </div>
          <div className="flex-1/3 space-y-5 border-gray-300 border-r-[1px]">
            <div className="font-medium text-xs md:text-sm lg:text-lg xl:text-[22px]">Total Questions</div>
            <div className="text-gray-600 text-xs md:text-sm lg:text-lg xl:text-[20px]">10</div>
          </div>
          <div className="flex-1/3 space-y-5 border-gray-300">
            <div className="font-medium text-xs md:text-sm lg:text-lg xl:text-[22px]">Coins</div>
            <div className="text-gray-600 text-xs md:text-sm lg:text-lg xl:text-[20px]">
              <PaidIcon sx={{ color: "orange", fontSize: "20px" }} /> 0
            </div>
          </div>
        </div>

        <div className="space-x-5">
          <NavLink to="/">
            <button className="border-[1px] border-blue-700 font-medium bg-white text-blue-700 rounded-md py-2 w-[150px] cursor-pointer">
              Back
            </button>
          </NavLink>
          <NavLink to="/quiz">
            <button className="border-[1px] border-blue-700 font-medium bg-blue-700 text-white rounded-md py-2 w-[150px] cursor-pointer">
              Start
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Instruction;
