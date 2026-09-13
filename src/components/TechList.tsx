import type { Technology } from "../types";
import TechCard from "./TechCard";

interface TechListProps {
  technologies: Technology[];
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
}

const TechList = ({
  technologies,
  stack,
   handleAddToStack,
}: TechListProps) =>{
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-5
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
    {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          stack={stack}
          handleAddToStack={handleAddToStack}
        />
      ))}
    </div>
  );
};

export default TechList;