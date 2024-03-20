// add in the section components to this page
// create the components
// export the components
// import the components into this file

function Contact() {
  return (
    <>
      <main>
        <section>
          <div className="container sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
            <div className="p-3">
              <h3 className="text-h3 font-opensans">How to make contact</h3>
              <p className="text-p font-opensans mt-3 mb-3">
                Here is where you can find me...
              </p>

              <div className=" rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>LinkedIn</div>
                  <div>Direct: johnturnerdick@gmail.com</div>
                  <div>whatsapp: 07974957313</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
