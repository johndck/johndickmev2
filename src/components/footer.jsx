function Footer() {
  return (
    <footer className="bg-slate-300">
      <div className="relative container sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
        <div className="flex flex-row gap-20 justify-center mb-4 pt-6">
          <div>
            {" "}
            <a href="https://twitter.com/johntmdick" target="_blank">
              <img
                src="/assets/x.png"
                alt="X/Twitter Link"
                rel="noopener noreferrer"
              />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/johntdick/" target="_blank">
              <img src="/assets/linkedin.png" alt="Linkedin Link" />
            </a>
          </div>
          <div>
            <a href="https://github.com/johndck" target="_blank">
              <img src="/assets/github.png" alt="Github Link" />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-6 pb-8">
          <a
            href="mailto:johnturnerdick@gmail.com"
            className="text-footerP font-opensans"
          >
            email: johnturnerdick@gmail.com
          </a>
          <p className="text-footerP font-opensans">
            release version 1.0 | 22 Mar 2024
          </p>
          <p className="text-footerP font-opensans">
            Made by: John Dick | React + Tailwind
          </p>
          <p className="text-footerP font-opensans">&copy; John Dick 2024 </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
