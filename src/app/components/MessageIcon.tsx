import { MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function MessageIcon() {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const router = useRouter();

  const navigateToChat = () => {
    router.push("/chat");
  };

  return (
    <button onClick={() => navigateToChat()}>
      {theme === "light" ? (
        <MessageCircle
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          color={`${isHovered ? "#424242" : "white"}`}
        />
      ) : (
        <MessageCircle
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          color={`${isHovered ? "dodgerblue" : "white"}`}
        />
      )}
    </button>
  );
}
