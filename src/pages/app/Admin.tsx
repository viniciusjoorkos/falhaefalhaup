import { useMemo, useState } from "react";
import {
  Tabs, TabsContent, TabsList, TabsTrigger,
} from "@/components/ui/tabs";
import {
  carteirasStore, convitesStore, livesStore, loginsStore, sessoesStore, usersStore,
} from "@/lib/store";
import { formatBRL, formatDate } from "@/lib/calculations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function Admin() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Painel administrativo</h2>
        <p className="mt-1 text-sm text-muted-foreground">Gerencie usuários, lives e convites.</p>
      </div>

      <Tabs defaultValue="users" className="flex flex-col gap-4">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="users">Usuários</TabsTrigger>
          <TabsTrigger value="logins">Logins</TabsTrigger>
          <TabsTrigger value="lives">Lives</TabsTrigger>
          <TabsTrigger value="invites">Convites</TabsTrigger>
        </TabsList>

        <TabsContent value="users"><UsersTab /></TabsContent>
        <TabsContent value="logins"><LoginsTab /></TabsContent>
        <TabsContent value="lives"><LivesTab /></TabsContent>
        <TabsContent value="invites"><InvitesTab /></TabsContent>
      </Tabs>
    </div>
  );
}

// ----------- Users -----------
function UsersTab() {
  const [, setTick] = useState(0);
  const refresh = () => setTick((v) => v + 1);
  const users = usersStore.all();

  return (
    <div className="glass-card overflow-hidden rounded-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-background/40 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-5 py-3 text-left">Email</th>
              <th className="px-5 py-3 text-left">Nome</th>
              <th className="px-5 py-3 text-left">Cadastro</th>
              <th className="px-5 py-3 text-right">Logins</th>
              <th className="px-5 py-3 text-right">Saldo</th>
              <th className="px-5 py-3 text-right">Sessões</th>
              <th className="px-5 py-3 text-left">Plano</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {users.map((u) => {
              const c = carteirasStore.byUser(u.id);
              const sCount = sessoesStore.byUser(u.id).length;
              const lCount = loginsStore.byUser(u.id).length;
              return (
                <tr key={u.id}>
                  <td className="px-5 py-3 font-medium">{u.email}</td>
                  <td className="px-5 py-3">{u.name}</td>
                  <td className="px-5 py-3 text-muted-foreground">{formatDate(u.created_at)}</td>
                  <td className="px-5 py-3 text-right">{lCount}</td>
                  <td className="px-5 py-3 text-right">{c ? formatBRL(c.saldo_atual) : "—"}</td>
                  <td className="px-5 py-3 text-right">{sCount}</td>
                  <td className="px-5 py-3">
                    <Select value={u.plan} onValueChange={(v) => { usersStore.update(u.id, { plan: v as any }); refresh(); toast.success("Plano atualizado"); }}>
                      <SelectTrigger className="h-8 w-28"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="free">Free</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ----------- Logins -----------
function LoginsTab() {
  const logins = useMemo(
    () => loginsStore.all().sort((a, b) => +new Date(b.data_hora) - +new Date(a.data_hora)),
    []
  );
  const usersById = useMemo(() => Object.fromEntries(usersStore.all().map((u) => [u.id, u])), []);

  return (
    <div className="glass-card overflow-hidden rounded-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-background/40 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-5 py-3 text-left">Data/Hora</th>
              <th className="px-5 py-3 text-left">Usuário</th>
              <th className="px-5 py-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {logins.map((l) => {
              const u = usersById[l.user_id];
              return (
                <tr key={l.id}>
                  <td className="px-5 py-3">{formatDate(l.data_hora)}</td>
                  <td className="px-5 py-3">{u?.name ?? "—"}</td>
                  <td className="px-5 py-3 text-muted-foreground">{u?.email ?? l.user_id}</td>
                </tr>
              );
            })}
            {logins.length === 0 && (
              <tr><td colSpan={3} className="px-5 py-8 text-center text-muted-foreground">Sem registros</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ----------- Lives -----------
function LivesTab() {
  const [, setTick] = useState(0);
  const refresh = () => setTick((v) => v + 1);
  const [open, setOpen] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [link, setLink] = useState("");
  const [data, setData] = useState("");

  const [finalizar, setFinalizar] = useState<string | null>(null);
  const [g, setG] = useState(""); const [p, setP] = useState(""); const [cf, setCf] = useState("");

  function criar(e: React.FormEvent) {
    e.preventDefault();
    if (!titulo || !link || !data) return toast.error("Preencha todos os campos");
    livesStore.add({ titulo, link, data: new Date(data).toISOString(), status: "online" });
    setTitulo(""); setLink(""); setData("");
    setOpen(false); refresh();
    toast.success("Live criada (online)");
  }

  function confirmFinal(e: React.FormEvent) {
    e.preventDefault();
    if (!finalizar) return;
    livesStore.update(finalizar, {
      status: "finalizada",
      ganhos: Number(g) || 0,
      perdas: Number(p) || 0,
      caixa_final: Number(cf) || 0,
    });
    setFinalizar(null); setG(""); setP(""); setCf("");
    refresh();
    toast.success("Live finalizada");
  }

  const lives = livesStore.all().sort((a, b) => +new Date(b.data) - +new Date(a.data));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              <Plus className="mr-2 h-4 w-4" /> Nova live
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Criar live</DialogTitle></DialogHeader>
            <form onSubmit={criar} className="grid gap-3 py-2">
              <div><Label>Título</Label><Input value={titulo} onChange={(e) => setTitulo(e.target.value)} className="mt-1.5" /></div>
              <div><Label>Link</Label><Input value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://..." className="mt-1.5" /></div>
              <div><Label>Data e hora</Label><Input type="datetime-local" value={data} onChange={(e) => setData(e.target.value)} className="mt-1.5" /></div>
              <DialogFooter>
                <Button type="submit" className="bg-gradient-primary text-primary-foreground hover:opacity-90">Criar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="glass-card overflow-hidden rounded-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-background/40 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3 text-left">Título</th>
                <th className="px-5 py-3 text-left">Data</th>
                <th className="px-5 py-3 text-left">Status</th>
                <th className="px-5 py-3 text-right">Resultado</th>
                <th className="px-5 py-3 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {lives.map((l) => {
                const r = (l.ganhos ?? 0) - (l.perdas ?? 0);
                return (
                  <tr key={l.id}>
                    <td className="px-5 py-3 font-medium">{l.titulo}</td>
                    <td className="px-5 py-3 text-muted-foreground">{formatDate(l.data)}</td>
                    <td className="px-5 py-3">
                      {l.status === "online" && <Badge className="bg-primary/15 text-primary border-primary/30" variant="outline">AO VIVO</Badge>}
                      {l.status === "agendada" && <Badge variant="outline">Agendada</Badge>}
                      {l.status === "finalizada" && <Badge variant="outline" className="text-muted-foreground">Finalizada</Badge>}
                    </td>
                    <td className={`px-5 py-3 text-right font-semibold ${l.status === "finalizada" ? (r >= 0 ? "text-primary" : "text-destructive") : "text-muted-foreground"}`}>
                      {l.status === "finalizada" ? `${r >= 0 ? "+" : ""}${formatBRL(r)}` : "—"}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex justify-end gap-2">
                        {l.status !== "finalizada" && (
                          <Button size="sm" variant="outline" onClick={() => setFinalizar(l.id)}>
                            <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" /> Finalizar
                          </Button>
                        )}
                        <Button size="sm" variant="ghost" onClick={() => { livesStore.remove(l.id); refresh(); toast.success("Removida"); }}>
                          <Trash2 className="h-3.5 w-3.5 text-destructive" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={!!finalizar} onOpenChange={(v) => !v && setFinalizar(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Finalizar live</DialogTitle></DialogHeader>
          <form onSubmit={confirmFinal} className="grid gap-3 py-2">
            <div>
              <Label className="text-primary">Ganhos (R$)</Label>
              <Input type="number" min={0} step="0.01" value={g} onChange={(e) => setG(e.target.value)} className="mt-1.5 border-primary/30" />
            </div>
            <div>
              <Label className="text-destructive">Perdas (R$)</Label>
              <Input type="number" min={0} step="0.01" value={p} onChange={(e) => setP(e.target.value)} className="mt-1.5 border-destructive/30" />
            </div>
            <div>
              <Label>Caixa final (R$)</Label>
              <Input type="number" min={0} step="0.01" value={cf} onChange={(e) => setCf(e.target.value)} className="mt-1.5" />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-gradient-primary text-primary-foreground hover:opacity-90">Confirmar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ----------- Convites -----------
function InvitesTab() {
  const [, setTick] = useState(0);
  const refresh = () => setTick((v) => v + 1);
  const users = usersStore.all().filter((u) => u.role === "user");

  function add(uid: string, qty: number) {
    convitesStore.add(uid, qty);
    refresh();
    toast.success(`+${qty} convite(s)`);
  }

  return (
    <div className="glass-card overflow-hidden rounded-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-background/40 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-5 py-3 text-left">Usuário</th>
              <th className="px-5 py-3 text-left">Email</th>
              <th className="px-5 py-3 text-right">Convites</th>
              <th className="px-5 py-3 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {users.map((u) => {
              const c = convitesStore.byUser(u.id);
              return (
                <tr key={u.id}>
                  <td className="px-5 py-3">{u.name}</td>
                  <td className="px-5 py-3 text-muted-foreground">{u.email}</td>
                  <td className="px-5 py-3 text-right font-bold">{c.quantidade}</td>
                  <td className="px-5 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="outline" onClick={() => add(u.id, 1)}>+1</Button>
                      <Button size="sm" variant="outline" onClick={() => add(u.id, 5)}>+5</Button>
                      <Button size="sm" variant="ghost" onClick={() => { convitesStore.add(u.id, -c.quantidade); refresh(); }}>
                        Zerar
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
