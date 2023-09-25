import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <h1 className="mb-1 text-6xl font-extrabold text-blue-500">Everyday</h1>
      <p className="mb-10">
        A social media clone where you make a memory every day.
      </p>
      <Button as={Link} href="/dayfeed">
        Sign up / Sign up
      </Button>
    </div>
  );
}
