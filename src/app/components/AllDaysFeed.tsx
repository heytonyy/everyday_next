import Day from "./Day";
import { UserProps } from "../state/types";

export default function AllDaysFeed({ user }: UserProps) {
  return (
    <div className="mt-4">
      {/* MAP THROUGH DAYS HERE */}
      <Day />
    </div>
  );
}
