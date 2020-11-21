import react from "react";
import React from "react";
const HomeContainers = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Redux/Containers/HomeContainers")), 600);
  });
});
const NotFound = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/NotFound/NotFound")), 600);
  });
});
const Contact = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/Contact/Contact")), 600);
  });
});
const ProductsDetailsContainers = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() =>
      resolve(import("./Redux/Containers/ProductsDetailsContaiers"))
    );
  });
});
const CartContainers = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Redux/Containers/CartContainers")));
  });
});
const routers = [
  {
    component: () => <HomeContainers />,
    path: "/",
    exact: true,
  },
  {
    component: () => <Contact />,
    path: "/contact",
    exact: false,
  },
  {
    component: () => <ProductsDetailsContainers />,
    path: "/products-details/:name",
    exact: false,
  },
  {
    component: () => <CartContainers />,
    path: "/cart",
    exact: false,
  },
  {
    component: () => <NotFound />,
    path: "*",
    exact: false,
  },
];

export default routers;
