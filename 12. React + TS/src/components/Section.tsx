import { ReactElement, ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

// old way
// const Section: React.FC<{ title: string, children: ReactNode }> = ({ title, children }): ReactElement => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// };

// modern way
const Section = ({ title = "A Section", children } : SectionProps): ReactElement => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}

export default Section;
