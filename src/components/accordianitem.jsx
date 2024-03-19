function AccordianItem({ id, title, children, curOpen, onOpen }) {
  const isOpen = id === curOpen;
  console.log(isOpen);

  function handleOpen() {
    if (isOpen) {
      onOpen(null);
    } else {
      onOpen(id);
    }
  }

  return (
    <div className="">
      <div
        className={`grid grid-cols-auto-1fr-auto shadow-xl cursor-pointer mb-5 border p-4  rounded-xl  ${
          isOpen ? "accordianOpen" : ""
        }`}
        onClick={handleOpen}
      >
        <p className="mr-4">{id < 9 ? `0${id}` : `${id}`}</p>
        <div>
          <p>{title}</p>
          {isOpen && <div className="mt-2 w-5/6">{children}</div>}
        </div>

        <p className="mr-4">{isOpen ? "-" : "+"}</p>
      </div>
    </div>
  );
}

export default AccordianItem;
