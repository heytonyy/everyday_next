import { MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MessageIcon() {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const navigateToChat = () => {
    router.push("/chat");
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <button onClick={() => navigateToChat()}>
      <MessageCircle
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHover()}
        color={`${isHovered ? "dodgerblue" : "white"}`}
      />
    </button>
  );
}
