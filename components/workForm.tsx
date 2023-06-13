import Image from "next/image";
import { work } from "../database/workItems";
import Link from "next/link";

interface Props {
  workItem: work;
}

export default function WorkForm(props: Props): JSX.Element {
  const { title, link, description } = props.workItem;
  const image = props.workItem.img;

  function ImageComponent(image: string) {
    return (
      <Image
        src={`/static/images/${image}.png`}
        fill
        alt={title}
        style={{ objectFit: "contain" }}
      />
    );
  }
  return (
    <div className="border border-sky-500 p-3 mb-8 flex flex-col md:flex-row h-full md:h-64">
      <div className="textDiv basis-3/5 flex flex-col relative">
        <h3 className="text-2xl font-bold basis-1/5">{title}</h3>
        <div className="basis-3/5">{description}</div>
        <div className="basis-1/5 bottom-0 left-0">
          <div>
            Check out my work here:&nbsp;
            <Link href={link.href}>
              <span className="cursor-pointer text-sky-600">{title}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="imageDiv md:basis-2/5 h-64 md:h-auto relative">
        {image ? ImageComponent(image) : ""}
      </div>
    </div>
  );
}
