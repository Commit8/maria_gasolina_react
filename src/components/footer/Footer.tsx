import { EnvelopeIcon, GithubLogoIcon } from "@phosphor-icons/react"

function Footer() {
    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-lime-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Commit8 | Copyright {data}
                    </p>
                    <p className="text-lg">Contato: </p>
                    <div className="flex gap-2">
                        <GithubLogoIcon size={38} weight="duotone" />
                        <EnvelopeIcon size={38} weight="duotone" />
                    </div>

                </div>

            </div>
        </>
    )
} 

export default Footer