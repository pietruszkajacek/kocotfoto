'use client'

import Container from '@/components/container'
import { useCallback, useState, useRef } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import ModalDialog from '@/components/modal-dialog'
import cn from 'classnames';
import { InView } from 'react-intersection-observer';
import NotificationsType from '@/interfaces/modal-dialog';
import Header from '@/components/header';

type Verify = "NotVerify" | "VerifyPass" | "VerifyNotPass";
type InfoAboutKocot = "internet" | "znajomi" | "inny..." | "";

type InputState = {
    value: string;
    verified: Verify;
}

type SelectState = {
    value: InfoAboutKocot;
    verified: Verify;
}

interface IFormState {
    name: InputState;
    email: InputState;
    from: SelectState;
    date: InputState;
    message: InputState;
}

const getInitialInputState = (): IFormState => (
    {
        name: { value: "", verified: "NotVerify" },
        email: { value: "", verified: "NotVerify" },
        date: { value: "", verified: "NotVerify" },
        from: { value: "inny...", verified: "NotVerify" },
        message: { value: "", verified: "NotVerify" }
    }
)

const ContactForm = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [notificationType, setNotificationType] = useState<NotificationsType>('OK');
    const [notification, setNotification] = useState<string>('');
    const [formProcess, setFormProcess] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [formState, setInputState] = useState<IFormState>(
        getInitialInputState()
    );

    const { name, from, email, message, date } = formState;

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }

        const token = await executeRecaptcha('FormSubmit');
        // Do whatever you want with the token
        //fetch
        console.log(token);

    }, [executeRecaptcha]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        
        const name = e.target.name as keyof IFormState;
        const value = e.target.value;

        setInputState((prevState: IFormState) => ({
            ...prevState,
            [name]: { ...prevState[name], value: value }
        }));
    };

    const handleFormVerify = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        for (const obj of Object.keys(formState) as (keyof IFormState)[]) {
            if (formState[obj].value === '') {
                setInputState((prevState: IFormState): IFormState => ({
                    ...prevState,
                    [obj]: { ...prevState[obj], verified: "VerifyNotPass" },
                }));
            } else {
                setInputState((prevState: IFormState): IFormState => ({
                    ...prevState,
                    [obj]: { ...prevState[obj], verified: "VerifyPass" }
                }));
            }
        }
        
        if (name.value !== '' && email.value !== '' && date.value !== ''
            && message.value !== '' && from.value !== '') {
            console.log(formState);
            setIsOpen(true);
            setNotificationType('Info');
            setNotification('Wiadomość została wysłana.')
        }
        else {
            setIsOpen(true);
            setNotificationType('Alert');
            setNotification('Proszę wypełnić poprawnie wszystkie oznaczone pola formularza i&nbsp;spróbować ponownie.');
        }        
    }

    return (
        <>
            <Header pic="headercontact" text='Kontakt' />
            <section id="kontakt">
                <ModalDialog openModal={isOpen} closeModal={setIsOpen} notificationType={notificationType} title='Formularz kontaktowy'
                    notification={notification} />
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
                                            className={cn({
                                                'top-0': inView,
                                                'opacity-100': inView,
                                                'top-4': !inView,
                                                'opacity-0': !inView
                                            },
                                                "transition-top-opacity ease-in-out duration-500 delay-150 relative"
                                            )}

                                        >
                                            <form
                                                className={cn(
                                                    "p-[30px] border-purple-mountains-majesty-600 rounded-3xl border mt-8 sm:w-2/3 mx-auto"
                                                )}
                                                method="POST"
                                                onSubmit={handleFormVerify}
                                            >
                                                <div className="grid grid-cols-1 gap-6">
                                                    <label className="block">
                                                        <span className="">Twoje imię i nazwisko</span>
                                                        <input name="name"
                                                            value={name.value}
                                                            onChange={handleChange}
                                                            type="text"
                                                            className={cn({ "bg-rose-300": name.verified == "VerifyNotPass" }, "focus:border-fiolet focus:ring-fiolet text-black mt-1 block w-full")}
                                                            placeholder=""
                                                        />
                                                    </label>
                                                    <label className="block">
                                                        <span className="">Twój email</span>
                                                        <input 
                                                            name="email"
                                                            type="email"
                                                            value={email.value}
                                                            onChange={handleChange}
                                                            className={cn({ "bg-rose-300": email.verified == "VerifyNotPass" }, "focus:border-fiolet focus:ring-fiolet text-black mt-1 block w-full")} 
                                                            placeholder="twoj@email.pl"
                                                        />
                                                    </label>
                                                    <label className="block">
                                                        <span className="">Data ślubu / sesji</span>
                                                        <input name="date"
                                                            type="date"
                                                            className={cn({ "bg-rose-300": date.verified == "VerifyNotPass" }, "focus:border-fiolet focus:ring-fiolet text-black mt-1 block w-full")}
                                                            onChange={handleChange}
                                                        />
                                                    </label>
                                                    <label className="block">
                                                        <span className="">Jak do mnie trafiłaś / -eś</span>
                                                        <select name="from"
                                                            onChange={handleChange}
                                                            className="focus:border-fiolet focus:ring-fiolet text-black block w-full mt-1"
                                                            value={from.value}
                                                        >
                                                            <option value="internet">Internet (Facebook/Instagram/YouTube...)</option>
                                                            <option value="znajomi">Znajomi</option>
                                                            <option value="inny...">Inny...</option>
                                                        </select>
                                                    </label>
                                                    <label className="block">
                                                        <span className="">Treść wiadomości</span>
                                                        <textarea name="message"
                                                            className={cn({ "bg-rose-300": message.verified == "VerifyNotPass" }, "focus:border-fiolet focus:ring-fiolet text-black mt-1 block w-full")}
                                                            onChange={handleChange}
                                                            value={message.value}
                                                            rows={3}>

                                                        </textarea>
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
            </section>
        </>
    )
}

export default ContactForm
