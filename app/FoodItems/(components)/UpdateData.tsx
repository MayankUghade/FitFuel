import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface data {
  Edit: Function;
  id: string;
}

export default function UpdateData({ Edit, id }: data) {
  const fetchData = async () => {
    const response = await Edit(id);
    console.log(response);
  };

  fetchData();

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <EditOutlinedIcon className="text-2xl" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit FoodItem</DialogTitle>
            <DialogDescription>Update the following food</DialogDescription>
            <div className="flex flex-col gap-5">
              <div className="mt-3">
                <h1 className="mt-2">Food Item</h1>
                <input
                  className="p-2 border-2 rounded-lg w-[400px] bg-transparent border-gray-500 focus:outline-none mt-2"
                  type="text"
                />

                <h1 className="mt-2">Calorie Intake</h1>
                <input
                  className="p-2 border-2 rounded-lg w-[400px] bg-transparent border-gray-500 focus:outline-none mt-2"
                  type="Number"
                />
              </div>

              <div className=" flex items-center justify-center">
                <button className="p-2 w-[130px] border-2 dark:bg-white dark:text-black bg-gray-800 text-white rounded-lg font-semibold">
                  Submit
                </button>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
