import Container from '../components/container'
import { useCallback, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [notification, setNotification] = useState<string>('');
  const [notificationType, setNotificationType] = useState<string>('');

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async (e: any) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('FormSubmit');
    // Do whatever you want with the token
    //fetch
    console.log(token);

  }, [executeRecaptcha]);

  return (
    <section id="contact-form">
      <Container>
        <div className="px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto text-white text-justify text-xl md:text-2xl lg:text-3xl font-light font-dosis mb-14">
          <div className='sm:w-5/6 mx-auto'>
            <p className="pt-5 lg:pt-10">
              Zainteresowała Cię moja oferta? Moje zdjęcia przypadły Ci do gustu? Daj znać i&nbsp;umówmy się na sesję!
            </p>
            <p className="py-5 lg:py-10">
              Możesz się ze mną skontaktować na dwa sposoby — poprzez poniższy formularz lub korzystając z&nbsp;danych podanych na końcu tej strony.
            </p>
            <form className="p-[30px] border-fiolet rounded-3xl border mt-8 sm:w-2/3 mx-auto" method="POST" onSubmit={handleReCaptchaVerify}>
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="">Twoje imię i nazwisko</span>
                  <input type="text" className="focus:border-fiolet focus:ring-fiolet text-black mt-1 block w-full" placeholder="" />
                </label>
                <label className="block">
                  <span className="">Twój email</span>
                  <input type="email" className="focus:border-fiolet focus:ring-fiolet text-black mt-1 block w-full" placeholder="twoj@email.pl" />
                </label>
                <label className="block">
                  <span className="">Data ślubu / sesji</span>
                  <input type="date" className="focus:border-fiolet focus:ring-fiolet text-black mt-1 block w-full" />
                </label>
                <label className="block">
                  <span className="">Jak do mnie trafiłaś / -eś</span>
                  <select className="focus:border-fiolet focus:ring-fiolet text-black block w-full mt-1">
                    <option>Internet (Facebook/Instagram/YouTube...)</option>
                    <option>Znajomi</option>
                    <option>Inny...</option>
                  </select>
                </label>
                <label className="block">
                  <span className="">Treść wiadomości</span>
                  <textarea className="focus:border-fiolet focus:ring-fiolet text-black mt-1 block w-full" rows={3}></textarea>
                </label>
                <div>
                  <button
                    type="submit"
                    className="w-1/2 mx-auto flex w-full justify-center rounded-3xl bg-fiolet uppercase font-medium  px-3 py-2 shadow-sm hover:bg-white hover:text-fiolet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fiolet"
                  >
                    Wyślij
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactForm