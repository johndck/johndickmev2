function Contactdetails() {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 mt-3 gap-8 mb-32">
      <div className="order-2 md:order-1">
        <div>
          <div className="flex items-center mb-2">
            <img src="/assets/whatsapp.svg"></img>
            <p className="text-pCard">+44 7974 957313</p>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <img src="/assets/email.png"></img>
            <p className="text-pCard pl-2"> johnturnerdick@gmail.com </p>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2 flex items-center justify-center">
        <img
          src="/assets/jdwork.jpg"
          alt="jdimage"
          className="h-60 w-full object-cover sm:h-80"
        ></img>
      </div>
    </div>
  );
}

export default Contactdetails;
