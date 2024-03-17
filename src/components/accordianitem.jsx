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
    <div className="accordianItem">
      <div
        className={`accordTitle ${isOpen ? "accordianOpen" : ""}`}
        onClick={handleOpen}
      >
        <p className="accordianNumber">{id < 9 ? `0${id}` : `${id}`}</p>
        <p>{title}</p>
        <p className="accordianController">{isOpen ? "-" : "+"}</p>
      </div>

      {isOpen && <div className="accordianAnswer">{children}</div>}
    </div>
  );
}

export default AccordianItem;
