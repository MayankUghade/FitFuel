export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 ">
      <p className="text-md text-gray-500 dark:text-gray-400">
        © 2024 FitFuel. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <div className="text-md hover:underline underline-offset-4">
          Terms of Service
        </div>
        <div className="text-md hover:underline underline-offset-4">
          Privacy
        </div>
      </nav>
    </footer>
  );
}
