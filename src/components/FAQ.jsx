import { Disclosure, } from "@headlessui/react"
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid"
import { faqs } from "../../_Details"

export default function FAQ() {
    return (
        <div className="bg-gray-950/50">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-4xl divide-y divide-white/10">
                    <h2 className="text-4xl font-bold leading-10 tracking-tight text-gray-100">FAQ</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-white/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}