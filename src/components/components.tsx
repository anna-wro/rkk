export const Header = ({ children }) => (
  <h1 className="font-bold text-xl mt-4 mb-6 md:mr-32">{children}</h1>
);

export const Section = ({ children }) => (
  <h2 className="font-bold text-l mt-4 mb-3 uppercase">{children}</h2>
);

export const ListItem = ({ children }) => <li className="pl-3">{children}</li>;

export const List = ({ children }) => (
  <ol className="list-decimal mb-3 ml-4 space-y-2">{children}</ol>
);
