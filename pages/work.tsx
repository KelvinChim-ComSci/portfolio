import { workItems, work } from "../database/workItems";
import Link from "next/link";

export default function Work() {
  const createWorkItemDiv = function (workItem: work): JSX.Element {
    return (
      <div className="border border-sky-500">
        <h4 className="text-lg">
          <Link href={workItem.link.href}>{workItem.title}</Link>
        </h4>
        <div>{workItem.description}</div>
      </div>
    );
  };
  return (
    <div className="flex h-full flex-col p-6">
      <h1 className="text-4xl mb-5 font-bold">Works:</h1>
      <div className="text-l">
        {workItems.map((workItem) => createWorkItemDiv(workItem))}
      </div>
    </div>
  );
}
