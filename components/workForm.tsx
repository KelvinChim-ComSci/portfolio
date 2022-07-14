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
    <div className="border border-sky-500">
      <h3 className="text-2xl">{title}</h3>
      <div>{description}</div>
      <div>
        Check out my work here:&nbsp;
        <Link href={link}>
          <span className="cursor-pointer text-sky-600">{title}</span>
        </Link>
      </div>
    </div>
  );
}
