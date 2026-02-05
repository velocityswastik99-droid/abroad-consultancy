import { Link } from 'react-router-dom';

function Breadcrumb({ items = [] }) {
  return (
    <nav className="text-sm text-gray-500 flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-2">
          {item.to ? <Link to={item.to} className="hover:text-primary-600">{item.label}</Link> : item.label}
          {index < items.length - 1 ? <span>/</span> : null}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumb;
