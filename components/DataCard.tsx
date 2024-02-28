import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import UpdateData from "@/app/FoodItems/(components)/UpdateData";

interface FoodData {
  data: any;
  id: number;
  onDelete: any;
  mealType: string;
}

export default function DataCard({ data, id, onDelete, mealType }: FoodData) {
  return (
    <div>
      <div className="flex items-center justify-between sm:w-[450px] w-[250px] p-3 border-2 rounded-lg ">
        {/*Food intem and calories */}
        <div className="flex sm:flex-row flex-col gap-2">
          <div className="flex gap-2">
            <RestaurantIcon />
            <h1 className="font-semibold">{data.FoodItems}</h1>
          </div>

          <div className="flex gap-1">
            <LocalFireDepartmentIcon className="text-2xl" />
            <h1 className="text-gray-500">{data.CalorieIntake}</h1>
          </div>
        </div>

        {/* Delete and edit icons */}
        <div className="flex gap-2 items-center sm:flex-row flex-col">
          {/* <UpdateData itemType={mealType} /> */}
          <div onClick={onDelete}>
            <DeleteOutlineOutlinedIcon className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
