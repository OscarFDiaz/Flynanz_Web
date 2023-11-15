interface Props {
  anchor: string;
  content: string;
}

export const NavItem = ({ anchor, content }: Props) => {
  return (
    <li className="list__item">
      <a href={anchor} className="list__anchor">
        {content}
      </a>
    </li>
  );
};
