// this is the navigation component that holds the 2 nav children components.
// using component composition to build the nav bar

function TopNav({ children }) {
  return (
    <div className="flex flex-row items-center justify-between lg:flex-col lg:items-start">
      {children}
    </div>
  );
}

export default TopNav;
