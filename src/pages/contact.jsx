// add in the section components to this page
// create the components
// export the components
// import the components into this file

import Contactdetails from "../components/contact";

function Contact() {
  return (
    <>
      <main>
        <section>
          <div className="container sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
            <div className="p-3">
              <h3 className="text-h3 font-opensans">Get in touch</h3>
              <Contactdetails />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
