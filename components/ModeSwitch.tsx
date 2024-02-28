"use client";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useTheme } from "next-themes";

export default function ModeSwitch() {
  const { resolvedTheme, setTheme, theme } = useTheme();

  const handleClick = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button onClick={handleClick}>
        {theme === "light" ? (
          <>
            <DarkModeOutlinedIcon />
          </>
        ) : (
          <>
            <WbSunnyOutlinedIcon />
          </>
        )}
      </button>
    </div>
  );
}
