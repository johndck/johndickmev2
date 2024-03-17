function Footer() {
  return (
    <footer className="bg-slate-300">
      <div className="relative container border border-black sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
        <div className="mt-8 flex flex-row gap-4 justify-center border border-black mb-4">
          <div>X</div>
          <div>Git</div>
          <div>LinkedIN</div>
        </div>
        <div className="flex flex-col justify-center items-center mb-4">
          <p>email</p>
          <p>release</p>
          <p>address</p>
          <p>Tech</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
