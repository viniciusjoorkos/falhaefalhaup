import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { depoimentosStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Play } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/calculations";

const stories = [
  { name: "Marcos", color: "from-emerald-500 to-cyan-500", quote: "+ R$ 4.200 no mês" },
  { name: "Beatriz", color: "from-amber-500 to-pink-500", quote: "Subi para Ouro" },
  { name: "Igor", color: "from-violet-500 to-blue-500", quote: "Banca dobrou" },
  { name: "Lara", color: "from-rose-500 to-orange-500", quote: "Mais disciplina" },
];

export default function Depoimentos() {
  const { user } = useAuth();
  if (!user) return null;
  const [conteudo, setConteudo] = useState("");
  const [list, setList] = useState(depoimentosStore.all());

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const txt = conteudo.trim();
    if (txt.length < 5) return toast.error("Mensagem muito curta");
    if (txt.length > 500) return toast.error("Máximo 500 caracteres");
    depoimentosStore.add({ user_id: user!.id, user_name: user!.name, tipo: "texto", conteudo: txt });
    setList(depoimentosStore.all());
    setConteudo("");
    toast.success("Depoimento enviado!");
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Depoimentos</h2>
        <p className="mt-1 text-sm text-muted-foreground">Sua história inspira outros traders. Compartilhe!</p>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Histórias em destaque</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stories.map((s) => (
            <div
              key={s.name}
              className={`relative aspect-[9/14] overflow-hidden rounded-xl bg-gradient-to-br ${s.color} p-3 ring-2 ring-primary/40 cursor-pointer transition hover:scale-[1.02]`}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative flex h-full flex-col justify-between text-white">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                  <Play className="h-4 w-4 fill-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">{s.name}</p>
                  <p className="text-[10px] opacity-90">{s.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={enviar} className="glass-card flex flex-col gap-3 rounded-xl p-5">
        <h3 className="text-sm font-semibold">Enviar depoimento</h3>
        <Textarea
          value={conteudo} onChange={(e) => setConteudo(e.target.value)}
          placeholder="Conte como a plataforma impactou sua jornada..."
          rows={4} maxLength={500}
        />
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">{conteudo.length}/500</p>
          <Button type="submit" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            Publicar
          </Button>
        </div>
      </form>

      <div className="flex flex-col gap-3">
        {list.map((d) => {
          const initials = d.user_name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
          return (
            <div key={d.id} className="glass-card flex gap-3 rounded-xl p-4">
              <Avatar className="h-10 w-10 shrink-0">
                <AvatarFallback className="bg-gradient-primary text-xs font-bold text-primary-foreground">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold">{d.user_name}</p>
                  <Badge variant="outline" className="text-[10px]">{d.tipo}</Badge>
                  <span className="text-xs text-muted-foreground">· {formatDate(d.created_at)}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{d.conteudo}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
