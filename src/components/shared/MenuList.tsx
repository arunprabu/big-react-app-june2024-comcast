import { NavLink } from "react-router-dom";

// Functional Component with Arrow Function
const MenuList = () => {
  const menuItems = [
    {
      id: 101,
      name: "Home",
      path: "/",
    },
    {
      id: 102,
      name: "Netflix",
      path: "/netflix",
    },
    {
      id: 103,
      name: "User Manager App",
      path: "/user-manager",
    },
    {
      id: 104,
      name: "Products",
      path: "/products",
    },
    {
      id: 105,
      name: "Todos",
      path: "/todos",
    },
    {
      id: 106,
      name: "About",
      path: "/about",
    },
    {
      id: 107,
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {menuItems.map((menu) => {
        return (
          <li className="nav-item" key={menu.id}>
            <NavLink className="nav-link" aria-current="page" to={menu.path}>
              {menu.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
