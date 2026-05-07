import { useEffect } from "react";
import { Calendar, Radio, User, ShoppingCart, Lock, MessageCircle } from "lucide-react";
import heroChart from "@/assets/hero-chart.jpg";

const ConfirmationPage = () => {
  // Meta Pixel — PageView + Lead
  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="container mx-auto flex items-center justify-between py-6 md:py-8">
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl font-black tracking-tight text-foreground">AVORO</span>
          <span className="text-[10px] md:text-xs text-muted-foreground tracking-wider mt-0.5">
            Estratégia <span className="text-primary">•</span> Dados <span className="text-primary">•</span> Resultados
          </span>
        </div>
      </header>

      {/* Hero */}
      <main className="container mx-auto pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mt-6 md:mt-12">
          {/* Left column */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Sua vaga está
              <br />
              <span className="text-gradient-primary">confirmada!</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground font-medium">
              Obrigado por se inscrever no workshop da AVORO
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Agora falta só você clicar no botão abaixo, entrar em nosso grupo de WhatsApp para deixar sua vaga 100% confirmada.
            </p>

            {/* Workshop card */}
            <div className="border border-border rounded-2xl p-6 md:p-7 flex gap-5 items-start bg-card/40 shadow-card">
              <div className="shrink-0 mt-1">
                <ShoppingCart className="w-12 h-12 md:w-14 md:h-14 text-primary" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <p className="text-xs md:text-sm font-bold text-primary tracking-widest">
                  WORKSHOP ONLINE E AO VIVO
                </p>
                <h2 className="text-xl md:text-2xl font-bold leading-tight">
                  Como fazer seu e-commerce vender mais em 2026 sem investir mais em tráfego pago
                </h2>
              </div>
            </div>

            {/* Info row */}
            <div className="border border-border rounded-2xl p-5 md:p-6 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-border bg-card/40">
              <div className="flex items-center gap-3 sm:px-2">
                <Calendar className="w-7 h-7 text-primary shrink-0" strokeWidth={2} />
                <span className="text-lg md:text-xl font-bold">20 de maio</span>
              </div>
              <div className="flex items-center gap-3 sm:px-4 pt-5 sm:pt-0">
                <Radio className="w-7 h-7 text-primary shrink-0" strokeWidth={2} />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm md:text-base font-semibold">Evento online</span>
                  <span className="text-sm md:text-base text-muted-foreground">e ao vivo — às 20h</span>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:px-4 pt-5 sm:pt-0">
                <User className="w-7 h-7 text-primary shrink-0" strokeWidth={2} />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm md:text-base text-muted-foreground">com</span>
                  <span className="text-sm md:text-base font-semibold">Pablo Sehn</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Chart visual with stat cards */}
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-card">
              <img
                src={heroChart}
                alt="Gráfico de crescimento de faturamento"
                width={1280}
                height={960}
                className="w-full h-72 md:h-96 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/20 to-transparent" />

              {/* Faturamento card */}
              <div className="absolute top-5 right-5 bg-card/90 backdrop-blur-md border border-border rounded-xl p-4 md:p-5 min-w-[200px] shadow-card">
                <p className="text-[10px] md:text-xs text-muted-foreground tracking-widest font-semibold mb-2">
                  FATURAMENTO
                </p>
                <p className="text-2xl md:text-3xl font-black mb-1.5">R$ 1.250.000</p>
                <p className="text-xs md:text-sm">
                  <span className="text-[hsl(var(--success))] font-bold">+28,4%</span>{" "}
                  <span className="text-muted-foreground">vs mês anterior</span>
                </p>
              </div>

              {/* Conversão */}
              <div className="absolute bottom-5 right-32 md:right-40 bg-card/90 backdrop-blur-md border border-border rounded-xl p-3 md:p-4 shadow-card">
                <p className="text-[9px] md:text-[10px] text-muted-foreground tracking-widest font-semibold mb-1 text-center">
                  TAXA DE CONVERSÃO
                </p>
                <p className="text-xl md:text-2xl font-black text-center">2,73%</p>
                <p className="text-[10px] md:text-xs text-[hsl(var(--success))] font-bold text-center">+0,6pp</p>
              </div>

              {/* Cart icon card */}
              <div className="absolute bottom-5 right-5 bg-card/90 backdrop-blur-md border border-border rounded-xl p-4 md:p-5 shadow-card">
                <ShoppingCart className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.5} />
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              id="whatsapp"
              href="https://chat.whatsapp.com/BRtKGO43kb6BZdEvjhV1TL?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-primary text-primary-foreground font-bold text-base md:text-xl py-5 md:py-6 px-6 rounded-2xl flex items-center justify-center gap-3 hover:shadow-glow hover:scale-[1.01] transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 fill-primary-foreground" strokeWidth={2} />
              ENTRAR NO GRUPO DO WHATSAPP
            </a>

            {/* Privacy note */}
            <p className="flex items-start md:items-center gap-2 text-sm md:text-base text-muted-foreground justify-center text-center pt-2">
              <Lock className="w-4 h-4 shrink-0 mt-0.5 md:mt-0" />
              <span>As informações de acesso e lembretes serão enviadas por WhatsApp e/ou e-mail.</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConfirmationPage;
