import Image from 'next/image'

export default function Home() {
  return (
    <main className='px-8 mt-8 mb-12'>
      {/* hero section */}
      <section>
        <div className="">
            <h1 className="font-elmessiri text-4xl tracking-wider">Arsiteknya Developer Indonesia</h1>
            <p className="font-poppins mt-2 tracking-wider">Menawarkan keunggulan dalam desain arsitektur untuk proyek-proyek developer Indonesia.</p>
            <button className="px-4 py-2 mt-4 border-2 border-[#977809] text-[#b1a26e] font-medium tracking-wider">Konsultasi Gratis</button>

            {/* image carouse  */}
            <div className="bg-white w-full h-44 flex items-center justify-center mt-8">
              <Image
                src='/next.svg'
                width={400}
                height={200}
                alt='gambar carousel project'
              />
            </div>
        </div>
      </section>

      {/* Tentang section  */}
      <section>
        <h1>Tentang</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illo voluptates libero facilis, odit excepturi quidem dolorem possimus iure perferendis corrupti impedit minima itaque blanditiis reiciendis repudiandae ex quia aliquam porro optio cumque. Facilis, doloremque?
        </p>
        <div className="">
          3 hal yang membuat kami berbeda
        </div>
      </section>

      {/* Layanan section  */}
      <section>
        <h1>Layanan</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore dolorum aliquam, beatae voluptates architecto iusto nulla, autem sit nam, aperiam nihil. Error.
        </p>
      </section>

      {/* Portofolio section  */}
      <section>
        <h1>Portofolio</h1>
        <p>disini akan berisi caroursel porfolio dengan minimum 3 gambar</p>
      </section>

      {/* Konsultasi section  */}
      <section>
        <h1>Konsultasi</h1>
        <p>disini akan berisi sebuah form untuk konsultasi sesuai dengan konsep form web sebelumbnya</p>
      </section>

      {/* Kontak section  */}
      <section>
        <h1>Kontak</h1>
        <form action="">
          <label htmlFor="">
            <h2>Nama</h2>
            <input type="text" placeholder='nama anda'/>
          </label>
          <label htmlFor="">
            <h2>Email</h2>
            <input type="email" placeholder='example@gmail.com'/>
          </label>
        </form>
      </section>

    </main>
  )
}
