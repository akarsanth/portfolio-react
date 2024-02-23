import { MdArrowOutward } from "react-icons/md";

interface Props {
  data: {
    link: string;
    start: string;
    end: string;
    institution: string;
    title: string;
    description: string;
  };
}

const LearningItem = ({
  data: { link, start, end, institution, title, description },
}: Props) => {
  return (
    <a className="learning__list-item" href={link} target="_blank">
      <p className="time">
        {start} &#8213; {end}
      </p>

      <div>
        <p className="institution">
          {institution}
          <span>
            <MdArrowOutward />
          </span>
        </p>
        <p className="title">{title}</p>

        <p className="description">{description}</p>
      </div>
    </a>
  );
};

export default LearningItem;
