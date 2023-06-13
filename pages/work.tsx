import { workItems } from "../database/workItems";
import WorkForm from "../components/workForm";

export default function Work() {
  return (
    <div className="flex h-full flex-col p-6">
      <h1 className="text-4xl mb-5 font-bold">Works:</h1>
      {workItems.map((workItem) => (
        <WorkForm workItem={workItem} key={workItem.title}></WorkForm>
      ))}
    </div>
  );
}
