// import Details
import { navigation } from "../../../_Details"


export default function Footer() {
    return (
        <footer className="bg-background/60 dark:bg-default-100/50 pt-8 sm:pt-24" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-10 pt-6 sm:pt-4 lg:px-8 lg:pt-2">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <img
                            className="h-16"
                            src="https://i.postimg.cc/1R8cMbh4/Logo.png"
                            alt="Scope Tech"
                        />
                        <p className="text-sm leading-6 text-gray-300">
                            Making the world a better place through constructing elegant hierarchies.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} target="_blank" className="text-gray-500 hover:text-gray-400">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0 hidden sm:block">
                                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div className="hidden sm:block">
                                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-100">&copy; Scope 2024, Designed by Scope Institute Learners, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}