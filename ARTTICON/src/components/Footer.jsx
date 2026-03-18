

  import { Link } from 'react-router-dom'

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {
    faEnvelope,
    faPhone,
    faLocationDot,
  } from '@fortawesome/free-solid-svg-icons'
  import {
    faInstagram,
    faFacebookF,
    faLinkedinIn,
  } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-16 relative overflow-hidden border-t">

      {/* Subtle Background Accent */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #45AAFF 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">

          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3
              className="text-3xl font-bold mb-4 text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(to right, #45AAFF, #1D8FE1)',
              }}
            >
              ARTTICON 2026
            </h3>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              11th International & 30th National Conference of Association of Radiation Therapists
              and Technologists of India. Advancing excellence in radiation therapy and technology.
            </p>

            <div className="flex space-x-4">
              {
}
            </div>
          </div>

          

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">
              Contact Info
            </h4>

            <div className="space-y-4">
              {[
                {
                  icon: faEnvelope,
                  label: 'Email',
                  text: 'info@artticon2026.org',
                  
                },
               
                {
                  icon: faPhone,
                  label: 'Phone',
                  text: '+91 8941005271',
              
                },
                {
                  icon: faPhone,
                  label: 'Phone',
                  text: '+91 9120780001',
             
                },
                {
                  icon: faLocationDot,
                  label: 'Location',
                  text: (
                    <>
                      Atal Bihari Vajpayee Auditorium <br />
                      AIIMS Rishikesh, Uttarakhand
                    </>
                  ),
                
            
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(to right, #45AAFF, #1D8FE1)',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-sm text-white"
                    />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      aria-label={item.label}
                      className="text-gray-600 text-sm hover:text-[#45AAFF] transition-colors"
                      target={
                        typeof item.href === 'string' && item.href.startsWith('http')
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        typeof item.href === 'string' && item.href.startsWith('http')
                          ? 'noreferrer'
                          : undefined
                      }
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ARTTICON 2026. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Code of Conduct'].map(
                (item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-500 transition-colors hover:text-[#45AAFF]"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
