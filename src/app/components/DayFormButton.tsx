import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { useState, lazy } from "react";
import { useTheme } from "next-themes";

interface DayFormProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
  type: string;
}

function getTextColor(hoverState: boolean, theme: string | undefined) {
  if (hoverState) {
    return "#1e90ff";
  }

  if (theme === "light") {
    return "#1f2937";
  } else {
    return "#ffffff";
  }
}

export default function DayFormButton({ name, type, ...props }: DayFormProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <div
      className="flex items-center justify-between gap-1 hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LucideIcon color={getTextColor(isHovered, theme)} />
      <span className="text-blue-500 dark:text-blue-500">{type}</span>
    </div>
  );
}
