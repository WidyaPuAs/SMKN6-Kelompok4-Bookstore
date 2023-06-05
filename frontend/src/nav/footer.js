import { Navigate, useNavigate } from 'react-router-dom';
function Footer() {
    const navigate = useNavigate()
    return (
        <section class="bg-bg-baru mt-10">
            <div class="border-t-2 border-b-light-cream"></div>
            <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav class="flex flex-wrap justify-center -mx-5 -my-2">
                    <div class="px-5 py-2">
                        <a class="text-base leading-6 text-gray-500 hover:text-gray-900" onClick={() => navigate('/about')}>
                            About
                        </a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="" class="text-base leading-6 text-gray-500 hover:text-gray-900" onClick={() => navigate('/about')}>
                            Team
                        </a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="" class="text-base leading-6 text-gray-500 hover:text-gray-900" onClick={() => navigate('/about')}>
                            Contact
                        </a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="https://github.com/WidyaPuAs/SMKN6-Kelompok4-Bookstore" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Github
                        </a>
                    </div>
                </nav>
                <p class="mt-8 text-base leading-6 text-center text-gray-400">
                    © 2023 Bookstore, Inc. All rights reserved.
                </p>
            </div>
        </section>
    )
}

export default Footer;