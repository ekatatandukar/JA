import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image
            height={30}
            width={80}
            src="/img/logo.svg"
            alt="Jina Alchemy"
          />
        </div>
      </nav>
    </header>
  )
}
