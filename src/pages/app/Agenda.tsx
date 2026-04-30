import { useMemo } from "react";
import { livesStore } from "@/lib/store";
import { formatDate } from "@/lib/calculations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

export default function Agenda() {
  const lives = useMemo(
    () =>
      livesStore.all()
        .filter((l) => l.status !== "finalizada")
        .sort((a, b) => +new Date(a.data) - +new Date(b.data)),
    []
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Agenda de Lives</h2>
        <p className="mt-1 text-sm text-muted-foreground">Próximas salas ao vivo do expert.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {lives.map((l) => (
          <div key={l.id} className="glass-card flex flex-col gap-3 rounded-xl p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold leading-tight">{l.titulo}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {formatDate(l.data)}
                </p>
              </div>
              {l.status === "online" ? (
                <Badge className="bg-primary/15 text-primary border-primary/30 animate-pulse-glow" variant="outline">
                  <span className="dot-online mr-1.5" /> AO VIVO
                </Badge>
              ) : (
                <Badge variant="outline" className="text-muted-foreground">Agendada</Badge>
              )}
            </div>
            <a href={l.link} target="_blank" rel="noreferrer" className="mt-auto">
              <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
                Entrar <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        ))}
        {lives.length === 0 && (
          <div className="glass-card col-span-full rounded-xl p-10 text-center text-muted-foreground">
            Nenhuma live agendada no momento
          </div>
        )}
      </div>
    </div>
  );
}
