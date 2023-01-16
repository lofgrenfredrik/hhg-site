import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { Fragment, useRef } from "react"

import useContactModalContext from "../../hooks/useContactModalContext"
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../Icon"

export default function ContactModal({ contactInfo }) {
  const {
    actions: { closeContactModal },
    isContactModalOpen,
  } = useContactModalContext()
  const { contactMessage, eMail, phone, facebook, instagram, linkedin } = contactInfo
  const emailRef = useRef(null)

  return (
    <Transition show={isContactModalOpen} as={Fragment}>
      <Dialog onClose={closeContactModal} className="relative z-50" initialFocus={emailRef}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center lg:p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative mx-auto flex h-screen w-screen flex-col items-center justify-center bg-white p-10 text-center transition-all lg:h-auto lg:max-w-[450px] lg:items-start  lg:rounded-lg lg:text-left">
              <button className="absolute top-5 right-4" onClick={closeContactModal}>
                <span className="sr-only">Close contact dialog</span>
                <XMarkIcon className="h-6 w-6 text-black" />
              </button>
              <Dialog.Title className="font-heading text-3xl font-bold">Contact</Dialog.Title>
              <div
                className="[&>p]:mt-3 [&>p]:text-base [&>*>em]:italic [&>*>strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: contactMessage }}
              />
              <div className="mt-4">
                <span className="none lg:inline">Email: </span>
                <a ref={emailRef} className="font-bold focus:underline" href={`mailto:${eMail}`}>
                  {eMail}
                </a>
              </div>
              <div className="mt-4">
                <span className="none lg:inline">Phone: </span>
                <a className="font-bold focus:underline" href={`tel:${eMail}`}>
                  {phone}
                </a>
              </div>
              <div className="mx-auto mt-8 flex w-48 justify-between">
                <a href={facebook}>
                  <span className="sr-only">To facebook profile</span>
                  <FacebookIcon className="h-full w-full max-w-[50px]" />
                </a>
                <a href={instagram}>
                  <span className="sr-only">To instagram profile</span>
                  <InstagramIcon className="h-full w-full max-w-[50px]" />
                </a>
                <a href={linkedin}>
                  <span className="sr-only">To linkedin profile</span>
                  <LinkedInIcon className="h-full w-full max-w-[50px]" />
                </a>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
