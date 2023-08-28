import { Dialog, Transition } from '@headlessui/react'
import { useCallback, useState, useRef, useEffect, SetStateAction, Dispatch, Fragment } from "react";
import NotificationsType from '../interfaces/modal-dialog';

type Props = {
  openModal: boolean,
  closeModal: Dispatch<SetStateAction<boolean>>,
  title?: string,
  notification?: string,
  notificationType?: NotificationsType,
  textButton?: string
}

function ModalDialog({ openModal, closeModal, title='Coś poszło nie tak...', notification ='', notificationType = 'OK', textButton = 'Zamknij...' }: Props) {

  const modalTypeVariants = {
    Alert: "bg-rose-300 text-rose-900 hover:bg-rose-200 focus-visible:ring-rose-500",
    Warning: "bg-orange-300 text-orange-900 hover:bg-orange-200 focus-visible:ring-orange-500",
    OK: "bg-green-300 text-green-900 hover:bg-green-200 focus-visible:ring-green-500",
    Info: "bg-blue-300 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-500",
  } 

  useEffect(() => {
    if (openModal) {
      document.querySelector("html")?.classList.add("headless-modal-f");
    } else {
      document.querySelector("html")?.classList.remove("headless-modal-f");
    }
  }, [openModal])

  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog as="div" className="font-dosis relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                 {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p dangerouslySetInnerHTML={{ __html: notification }} className="text-sm text-gray-500" />
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className={`${modalTypeVariants[notificationType]} inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                    onClick={() => closeModal(false)}
                  >
                    {textButton}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalDialog