import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function StatCard({
  label, value, icon, trend, accent, className,
}: {
  label: string;
  value: ReactNode;
  icon?: ReactNode;
  trend?: { value: string; positive?: boolean };
  accent?: "primary" | "danger" | "neutral";
  className?: string;
}) {
  return (
    <div className={cn("glass-card relative overflow-hidden rounded-xl p-5", className)}>
      {accent === "primary" && (
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
      )}
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight">{value}</p>
          {trend && (
            <p
              className={cn(
                "mt-1.5 text-xs font-semibold",
                trend.positive ? "text-primary" : "text-destructive"
              )}
            >
              {trend.positive ? "▲" : "▼"} {trend.value}
            </p>
          )}
        </div>
        {icon && (
          <div className="rounded-lg border border-border/60 bg-background/40 p-2 text-muted-foreground">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
