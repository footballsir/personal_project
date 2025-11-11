import Image from 'next/image';
import Link from 'next/link';

const contactItems = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/menghui-hu-773566130/',
    icon: '/images/contact/contact-linkedin.svg',
    external: true
  },
  {
    name: 'GitHub',
    href: 'https://github.com/menghuihu_microsoft',
    icon: '/images/contact/contact-github.svg',
    external: true
  },
  {
    name: 'Email',
    href: 'mailto:menghuihu0405@gmail.com',
    icon: '/images/contact/contact-email.svg',
    external: false
  }
];

export default function ContactSection() {
  return (
    <section
      className="flex flex-col items-center text-center px-8"
      style={{ marginTop: '0px', marginBottom: '240px' }}
    >
      {/* <div className="flex flex-col items-center" style={{ gap: '24px' }}>
        <div className="flex flex-col items-center" style={{ gap: '8px' }}>
          <h2 className="text-section-title">Get in touch</h2>
          <p className="text-base" style={{ maxWidth: '560px' }}>
            Let’s connect about design leadership, AI, or creative collaborations. I’m
            always open to new conversations and ideas.
          </p>
        </div>
        <Image src="/images/squiggle.svg" alt="" width={95} height={16} />
      </div> */}

      <div
        className="flex items-center justify-center flex-wrap"
        style={{ gap: '40px', marginTop: '48px' }}
      >
        {contactItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            aria-label={item.name}
            className="transition-transform duration-200 ease-out hover:scale-105"
          >
            <Image src={item.icon} alt={item.name} width={96} height={96} />
          </Link>
        ))}
      </div>
    </section>
  );
}
