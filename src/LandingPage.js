import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FBFEFD] text-[#063B6D] font-sans">
      <header className="bg-[#063B6D] text-white p-6 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">
            <img
              src="/assets/logo-ld.webp"
              alt="LD Manutenções"
              className="h-16 w-auto"
            />
          </h1>
          <nav className="flex gap-6 text-lg mt-4 md:mt-0">
            <a href="#sobre" className="hover:underline">
              Sobre Nós
            </a>
            <a href="#servicos" className="hover:underline">
              Serviços
            </a>
            <a href="#contato" className="hover:underline">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="sobre"
        className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Transforme áreas verdes com a LD Manutenções
          </h2>
          <p className="mb-6">
            Atuamos com excelência na manutenção ambiental, oferecendo soluções
            personalizadas e sustentáveis para reflorestamento, paisagismo e
            conservação.
          </p>
        </div>

        <div className="w-full">
          <img
            src="/assets/hero-ldmanutencoes.webp"
            alt="Muda de planta nas mãos"
            className="w-full h-auto rounded shadow"
          />
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-[#E6F4EC] py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">Nossos Serviços</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Manutenção de áreas verdes",
              "Reflorestamento",
              "Conservação de florestas nativas",
              "Terraplenagem",
              "Construção de cercas e alambrados",
              "Serviços de pintura",
              "Atividades paisagísticas",
            ].map((servico, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded shadow text-[#063B6D]"
              >
                {servico}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
        <p className="mb-4">
          Estamos aqui para ajudar. Entre em contato e nossa equipe responderá
          rapidamente.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> ldmanutencoesrocada@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> (18) 9 99663-1645
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Travessa das Limeiras, 146, Centro,
              Rosana - SP
            </p>
          </div>
          <div className="bg-[#AFE2C9] h-48 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.3863929860936!2d-52.95289341676619!3d-22.527194057148456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948dec0345acf659%3A0x77c4e9e918e54ce4!2sTv.%20das%20Limeiras%2C%20146%20-%20Primavera%2C%20Rosana%20-%20SP%2C%2019274-000!5e0!3m2!1sen!2sbr!4v1745972163677!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded shadow"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#7ECEA4] text-white py-10">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4">
          <div>
            <h4 className="font-bold mb-2">LD Manutenções</h4>
            <p className="text-sm">
              Serviços ambientais com responsabilidade e ética.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Navegação</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#sobre" className="hover:underline">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:underline">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:underline">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Informações</h4>
            <ul className="space-y-1 text-sm">
              <li>CNPJ: 53.597.280/0001-23 </li>
              <li>Rosana/SP - CEP: 19.274-000</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Fale Conosco</h4>
            <ul className="space-y-1 text-sm">
              <li>Email: ldmanutencoesrocada@gmail.com</li>
              <li>Tel: (18) 9 99663-1645</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs mt-6">
          &copy; 2025 LD Manutenções. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
