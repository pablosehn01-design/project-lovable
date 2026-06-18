import { useState } from "react";

declare global {
  interface Window {
    fbq: any;
  }
}
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import {
  Target,
  ShoppingCart,
  TrendingUp,
  Settings,
  Crosshair,
  Megaphone,
  Users,
  PieChart,
  Star,
  BarChart3,
  Lightbulb,
  Mail,
  Phone,
  Globe,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle2,
  Radio,
  Lock,
  User,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import pabloImg from "@/assets/pablo-sehn.png";
import growthChart from "@/assets/growth-chart.jpg";

const formSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(20),
  instagram: z.string().trim().max(60).optional().or(z.literal("")),
  site: z.string().trim().max(120).optional().or(z.literal("")),
  revenue: z.string().min(1, "Selecione uma opção"),
});

const Logo = () => (
  <div className="flex flex-col leading-none">
    <span className="text-2xl font-extrabold tracking-tight">
      AV<span className="text-primary">Ø</span>RO
    </span>
    <span className="text-[10px] tracking-[0.2em] text-muted-foreground mt-1">
      ESTRATÉGIA · DADOS · RESULTADOS
    </span>
  </div>
);

const Index = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    instagram: "",
    site: "",
    revenue: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();


  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxrmwfMPl5-8uGvsIRutSVVoguLgJGUyQIkhe5sW478HORrPculmDOlIC7YDPsexVMF/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Verifique os campos",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        nome: result.data.name,
        email: result.data.email,
        whatsapp: result.data.whatsapp,
        instagram: result.data.instagram ?? "",
        site: result.data.site ?? "",
        faturamento: result.data.revenue,
      };

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead");
      }
      setForm({ name: "", email: "", whatsapp: "", instagram: "", site: "", revenue: "" });
      navigate("/obrigado");
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não conseguimos enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
      setSubmitting(false);
    }
  };

  const scrollToForm = () =>
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto flex items-center justify-between py-6">
          <Logo />
          <Button onClick={scrollToForm} size="lg" className="btn-primary-grad text-primary-foreground border-0 font-semibold px-8">
            Inscreva-se
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative radial-bg pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-primary font-bold tracking-widest text-sm mb-5">
              WORKSHOP GRATUITO
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-50">
              COMO USAR A IA PARA FAZER SUA LOJA VENDER MAIS
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl">
              Descubra como utilizar Inteligência Artificial para criar conteúdo, analisar dados, economizar horas de trabalho e aumentar suas vendas usando as mesmas ferramentas que utilizamos diariamente na AVØRO.
            </p>

            <Button
              onClick={scrollToForm}
              size="lg"
              className="btn-primary-grad text-primary-foreground border-0 font-bold text-base mt-10 h-14 px-10 w-full sm:w-auto"
            >
              QUERO PARTICIPAR
            </Button>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Radio size={16} className="text-primary" /> Evento online e ao vivo
              </span>
              <span className="text-primary">●</span>
              <span className="font-semibold text-foreground">25 de Junho de 2026 · 20h00</span>
              <span className="text-primary">●</span>
              <span>Online e Gratuito</span>
            </div>
          </div>

          {/* Right - Form */}
          <div id="inscricao" className="card-surface p-8 glow-orange">
            <h2 className="text-2xl font-bold">Garanta sua vaga gratuita</h2>
            <p className="text-muted-foreground text-sm mt-1 mb-6">
              Preencha seus dados para se inscrever:
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="pl-10 h-12 bg-input border-border"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="pl-10 h-12 bg-input border-border"
                />
              </div>
              <div className="relative">
                <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="WhatsApp"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="pl-10 h-12 bg-input border-border"
                />
              </div>
              <div className="relative">
                <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Instagram da loja"
                  value={form.instagram}
                  onChange={(e) => setForm({ ...form, instagram: e.target.value })}
                  className="pl-10 h-12 bg-input border-border"
                />
              </div>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Site"
                  value={form.site}
                  onChange={(e) => setForm({ ...form, site: e.target.value })}
                  className="pl-10 h-12 bg-input border-border"
                />
              </div>
              <div className="relative">
                <BarChart3 className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={18} />
                <Select value={form.revenue} onValueChange={(v) => setForm({ ...form, revenue: v })}>
                  <SelectTrigger className="pl-10 h-12 bg-input border-border">
                    <SelectValue placeholder="Faturamento mensal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nao-vendo">Não vendo ainda</SelectItem>
                    <SelectItem value="ate-10k">Até 10k</SelectItem>
                    <SelectItem value="10k-30k">10k a 30k</SelectItem>
                    <SelectItem value="30k-50k">30k a 50k</SelectItem>
                    <SelectItem value="50k-100k">50k a 100k</SelectItem>
                    <SelectItem value="acima-100k">Acima de 100k</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="btn-primary-grad text-primary-foreground border-0 font-bold w-full h-14 text-base mt-2"
              >
                {submitting ? "ENVIANDO..." : "GARANTIR MINHA VAGA"}
              </Button>

              <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
                <Lock size={12} /> Seus dados estão 100% seguros. Não enviamos spam.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* A IA não vai substituir sua loja */}
      <section className="py-20 bg-card/40">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A IA NÃO VAI SUBSTITUIR SUA LOJA.
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-primary mb-10">
            MAS UMA LOJA QUE USA IA PODE SUBSTITUIR A SUA.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Enquanto muitos lojistas ainda perdem horas criando posts, escrevendo descrições de produtos, analisando planilhas e tentando entender seus números, outros estão utilizando Inteligência Artificial para fazer tudo isso em minutos.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            A diferença não está na tecnologia.
          </p>
          <p className="text-foreground text-lg leading-relaxed font-semibold">
            Está em saber usar ela da forma certa.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            Neste workshop você vai aprender exatamente como aplicar a IA no dia a dia da sua operação para vender mais e ganhar produtividade.
          </p>
        </div>
      </section>

      {/* Para quem é este workshop */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            PARA QUEM É <span className="text-primary">ESTE WORKSHOP</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Users, text: "Donos de lojas virtuais" },
              { icon: TrendingUp, text: "Empresas que querem vender mais online" },
              { icon: Instagram, text: "Marcas que produzem conteúdo para redes sociais" },
              { icon: Megaphone, text: "Gestores de marketing" },
              { icon: ShoppingCart, text: "Equipes comerciais" },
              { icon: Lightbulb, text: "Quem quer ganhar produtividade utilizando IA" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="card-surface p-6 hover:border-primary/40 transition">
                <Icon className="text-primary mb-4" size={32} />
                <p className="text-sm text-foreground/90">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que vai aprender */}
      <section id="conteudo" className="py-20 bg-card/40">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold">
            O QUE VOCÊ VAI <span className="text-primary">APRENDER</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              { icon: Megaphone, title: "Criar conteúdos em minutos", desc: "Aprenda a criar calendários de conteúdo, legendas, roteiros para vídeos, campanhas promocionais e ideias de posts usando IA." },
              { icon: ShoppingCart, title: "Escrever descrições que ajudam a vender", desc: "Transforme descrições simples em textos mais profissionais e persuasivos para sua loja virtual." },
              { icon: BarChart3, title: "Analisar números sem depender de planilhas complexas", desc: "Descubra como utilizar IA para entender seus resultados, identificar oportunidades e tomar decisões mais rápidas." },
              { icon: Sparkles, title: "Criar imagens para campanhas", desc: "Veja como gerar imagens profissionais para anúncios, redes sociais e banners para seu e-commerce." },
              { icon: Settings, title: "Organizar sua operação", desc: "Aprenda como utilizar IA para criar processos, checklists, planejamentos e documentos para sua equipe." },
              { icon: Crosshair, title: "Criar ferramentas personalizadas", desc: "Veja na prática como construir pequenos sistemas e dashboards para analisar dados da sua operação sem precisar programar." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-surface p-6">
                <div className="h-32 rounded-lg bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center mb-5 border border-primary/20">
                  <Icon className="text-primary" size={48} />
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem somos */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            QUEM <span className="text-primary">SOMOS</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            A AVØRO é uma aceleradora de marcas e e-commerces.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Todos os dias utilizamos Inteligência Artificial para otimizar processos, criar campanhas, gerar conteúdos, analisar dados e ajudar nossos clientes a crescer.
          </p>
          <p className="text-foreground text-lg leading-relaxed font-semibold">
            Agora vamos mostrar como você também pode aplicar essas estratégias na sua operação.
          </p>
        </div>
      </section>

      {/* Pablo */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 radial-bg opacity-60 pointer-events-none" />
        <div className="container mx-auto relative">
          <div className="card-surface overflow-hidden grid md:grid-cols-5 items-stretch">
            <div className="relative md:col-span-2 min-h-[520px] bg-black">
              <img
                src={pabloImg}
                alt="Pablo Sehn, fundador da AVØRO"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 md:hidden">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">Com</p>
                <h3 className="text-3xl font-extrabold">Pablo Sehn</h3>
              </div>
            </div>

            <div className="md:col-span-3 p-8 md:p-12 lg:p-14">
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3 hidden md:inline-block">
                Com
              </span>
              <h3 className="text-4xl md:text-5xl font-extrabold leading-tight hidden md:block">
                Pablo Sehn
              </h3>
              <p className="text-primary font-semibold mt-2 text-lg">Fundador da AVØRO</p>

              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ao longo dos últimos anos, Pablo Sehn esteve por trás da aceleração de
                  dezenas de marcas que já vendiam, mas estavam travadas por falta de
                  estrutura, clareza e previsibilidade.
                </p>
                <p>
                  Foi observando esse cenário de perto que nasceu a <span className="text-foreground font-semibold">AVØRO</span>:
                  não como mais uma agência focada só em tráfego, mas como uma operação
                  estratégica criada para ajudar e-commerces a organizarem seu sistema de
                  vendas e crescerem com mais direção.
                </p>
                <p>
                  Hoje, Pablo já ajudou a acelerar <span className="text-foreground font-semibold">mais de 100 marcas</span>,
                  gerando <span className="text-foreground font-semibold">mais de R$20 milhões</span> para clientes,
                  sempre com foco em transformar tráfego, posicionamento e operação em
                  crescimento real.
                </p>
              </div>

              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                <li className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
                  <Users className="text-primary shrink-0 mt-0.5" size={22} />
                  <span className="text-sm font-medium">+ de 100 marcas atendidas</span>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
                  <BarChart3 className="text-primary shrink-0 mt-0.5" size={22} />
                  <span className="text-sm font-medium">+R$20 milhões gerados para clientes</span>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
                  <Star className="text-primary shrink-0 mt-0.5" size={22} />
                  <span className="text-sm font-medium">Especialista em aceleração de e-commerce</span>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
                  <Sparkles className="text-primary shrink-0 mt-0.5" size={22} />
                  <span className="text-sm font-medium">Visão prática, estratégica e orientada a vendas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai ver ao vivo */}
      <section className="py-20 bg-card/40">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
            O QUE VOCÊ VAI VER <span className="text-primary">AO VIVO</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Durante o workshop vamos abrir o ChatGPT e outras ferramentas de IA ao vivo.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Criar um calendário completo de conteúdo",
              "Criar descrições para produtos",
              "Criar legendas para Instagram",
              "Criar campanhas promocionais",
              "Gerar imagens para anúncios",
              "Analisar dados da loja",
              "Criar gráficos automaticamente",
              "Construir uma página para visualizar indicadores",
              "Economizar horas de trabalho toda semana",
            ].map((text) => (
              <div key={text} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={22} />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-lg mt-10">
            Nada de teoria.
          </p>
          <p className="text-center text-foreground text-lg font-semibold">
            Você verá exatamente como fazemos isso dentro da AVØRO.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="card-surface relative overflow-hidden p-10 md:p-16 text-center">
            <img
              src={growthChart}
              alt=""
              className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 pointer-events-none"
              loading="lazy"
            />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold">
                GARANTA SUA VAGA GRATUITA
              </h2>
              <p className="text-muted-foreground text-lg mt-4 mb-2">
                A participação é gratuita, mas as vagas são limitadas.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Clique no botão abaixo e reserve seu lugar.
              </p>
              <Button
                onClick={scrollToForm}
                size="lg"
                className="btn-primary-grad text-primary-foreground border-0 font-bold text-base mt-2 h-14 px-10"
              >
                QUERO PARTICIPAR DO WORKSHOP
              </Button>
              <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
                <Lock size={12} /> Vagas gratuitas e limitadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="border-t border-border py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 AVØRO. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
