import Link from "next/link";
import { work } from "../database/workItems";

interface Props {
  workItem: work;
}

export default function WorkForm(props: Props): JSX.Element {
  const title = props.workItem.title;
  const link = props.workItem.link;
  const description = props.workItem.description;

  return (
    <div className="border border-sky-500 p-3 h-64 mb-8 flex flex-row">
      <div className="textDiv basis-3/4 flex flex-col relative">
        <h3 className="text-2xl font-bold basis-1/5">{title}</h3>
        <div className="basis-3/5">{description}</div>
        <div className="absolute basis-1/5 bottom-0 left-0">
          <div>
            Check out my work here:&nbsp;
            <Link href={link}>
              <span className="cursor-pointer text-sky-600">{title}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="imageDiv basis-1/4">
        <h3></h3>
      </div>
    </div>
  );
}
