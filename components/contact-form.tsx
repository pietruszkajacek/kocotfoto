import Container from '../components/container'
import { useCallback, useState, useRef } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import ModalDialog from './modal-dialog';
import classNames from 'classnames';
import { InView } from 'react-intersection-observer';

type InputState = "NotVerify" | "VerifyPass" | "VerifyNotPass";

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [name, setName] = useState<InputState>('NotVerify');
  const [email, setEmail] = useState<InputState>('NotVerify');
  const [message, setMessage] = useState<InputState>('NotVerify');
  const [date, setDate] = useState<InputState>('NotVerify');
  const [notification, setNotification] = useState<string>('');
  const [notificationType, setNotificationType] = useState<string>('');

  const [nameTest, setNameTest] = useState<InputState>('NotVerify');
  const [formProcess, setFormProcess] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const inputRef = useRef(null);
  const dateRef = useRef(null);

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

  const handleFormVerify = (e: any) => {
    e.preventDefault();

    setFormProcess(true);
    setIsOpen(true);

    if (inputRef.current.value !== '') {
      setNameTest('VerifyPass');
    } else {
      setNameTest('VerifyNotPass');
    }
  }

  return (
    <>
      <ModalDialog openModal={isOpen} closeModal={setIsOpen} notificationType='Alert' title='Formularz kontaktowy'
        notification='Proszę wypełnić poprawnie wszystkie oznaczone pola formularza i&nbsp;spróbować ponownie.' textButton='Zamknij' />
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
              <InView triggerOnce={true}>
                {({ inView, ref, entry }) => (
                  <div
                    ref={ref}
                    className={classNames({
                      'top-0': inView,
                      'opacity-100': inView,
                      'top-4': !inView,
                      'opacity-0': !inView
                    },
                      "transition-top-opacity ease-in-out duration-500 delay-150 relative"
                    )}

                  >
                    <form 
                      className={classNames(
                        "p-[30px] border-purple-mountains-majesty-600 rounded-3xl border mt-8 sm:w-2/3 mx-auto"
                      )}
                      method="POST"
                      onSubmit={handleFormVerify}
                    >
                      <div className="grid grid-cols-1 gap-6">

                        <label className="block">
                          <span className="">Pole testowe</span>
                          <input ref={inputRef} type="text" className={classNames(nameTest === 'VerifyNotPass' ? 'bg-rose-300' : '', "focus:border-fiolet focus:ring-fiolet text-black mt-1 block w-full")} placeholder="" />
                        </label>

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
                          <input ref={dateRef} type="date" className="focus:border-fiolet focus:ring-fiolet text-black mt-1 block w-full" />
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
                        <div className="flex items-center justify-center">
                          <button
                            type="submit"
                            className={"w-1/2 rounded-3xl text-purple-mountains-majesty-900 bg-purple-mountains-majesty-600 uppercase font-medium px-3 py-2 shadow-sm hover:bg-purple-mountains-majesty-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-mountains-majesty-900"}
                          >
                            Wyślij
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </InView>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ContactForm
