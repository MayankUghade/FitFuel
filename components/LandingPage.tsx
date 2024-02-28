import Image from "next/image";
import main from "@/public/main2.svg";
import Link from "next/link";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Introduction */}
      <section className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 border-b dark:border-white border-black">
        <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-10">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
              Track your calories. Transform Your Life.
            </h1>
            <div className="flex items-center justify-center">
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The easy way to maintain a healthy lifestyle. Let our app help
                you track your food intake and reach your fitness goals.
              </p>
            </div>
          </div>
          <Image
            alt="Hero"
            className="md:w-[550px] md:h-[500px] w-[300px] h-[300px]"
            src={main}
          />
        </div>
        <Link
          href="/signUp"
          className="p-4 bg-blue-600 text-white rounded-lg font-bold mt-4"
        >
          Get started
        </Link>
      </section>

      {/* features */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b dark:border-white border-black">
        <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
            Track. Achive. Succeed
          </h1>
          <div className="flex items-center justify-center">
            <p className="max-w-[800px] flex text-center text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Our calorie tracker helps you stay on top of your nutrition with
              easy tracking, personalized goals, and insights into your
              progress.
            </p>
          </div>

          {/* Features of the application */}
          <div className="flex flex-wrap items-center justify-center p-5 gap-10 ">
            <div className="flex items-center justify-center flex-col gap-3 border-2 p-5 rounded-lg dark:border-white border-black">
              <TaskAltIcon className="md:text-5xl text-3xl" />
              <h1 className="md:text-4xl text-2xl font-semibold">
                Easy tracking
              </h1>
              <p className="max-w-[500px] text-center text-gray-500 dark:text-gray-400">
                Track your total calorie intake and view the whole data in
                graphs for more iinsights
              </p>
            </div>

            <div className="flex items-center justify-center flex-col gap-3 border-2 p-5 rounded-lg dark:border-white border-black">
              <EditNoteRoundedIcon className="md:text-5xl text-3xl" />
              <h1 className="md:text-4xl text-2xl font-semibold">Set Goals</h1>
              <p className="max-w-[500px] text-center text-gray-500 dark:text-gray-400">
                Set Daily or weekly goals according to your health objectives,
                such as weight loss, weight maintenance, or muscle gain.
              </p>
            </div>

            <div className="flex items-center justify-center flex-col gap-3 border-2 p-5 rounded-lg dark:border-white border-black">
              <RestaurantMenuIcon className="md:text-5xl text-3xl" />
              <h1 className="md:text-4xl text-2xl font-semibold">
                Meal Logging
              </h1>
              <p className="max-w-[500px] text-center text-gray-500 dark:text-gray-400">
                log meals, snacks, and beverages throughout the day, to keep
                everything on track
              </p>
            </div>

            <div className="flex items-center justify-center flex-col gap-3 border-2 p-5 rounded-lg dark:border-white border-black">
              <SignalCellularAltIcon className="md:text-5xl text-3xl" />
              <h1 className="md:text-4xl text-2xl font-semibold">
                Analyze Progress
              </h1>
              <p className="max-w-[500px] text-center text-gray-500 dark:text-gray-400">
                You can see your calorie intake and burn over time with detailed
                charts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contack us */}
      <section className="flex flex-col gap-5 items-center justify-center w-full py-12 md:py-24 lg:py-32 border-b dark:border-white border-black">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
          Contact Us
        </h1>
        <p className="max-w-[500px] text-center text-gray-500 dark:text-gray-400">
          Please Fill the form to get in touch with us
        </p>
        <div className="flex flex-col mt-10 gap-5 sm:w-[500px] w-auto">
          <h1 className="text-xl md:text-2xl">Email</h1>
          <input
            className="p-4 w-full bg-transparent outline-none border-2 rounded-lg dark:border-white border-black"
            type="text"
            placeholder="Add your email address"
          />
          <h1 className="text-xl md:text-2xl">Message</h1>
          <textarea
            className=" p-4 max-w-[500px] bg-transparent outline-none border-2 rounded-lg dark:border-white border-black"
            rows={10}
            placeholder="Add message"
          />
          <button className="px-5 py-3 rounded-lg bg-blue-600 font-bold w-fit text-white">
            submit
          </button>
        </div>
      </section>
    </div>
  );
}
