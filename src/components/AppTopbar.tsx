import { Bell, Search, HelpCircle, Command } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function AppTopbar() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b bg-background/80 px-3 backdrop-blur-md md:px-6">
      <SidebarTrigger />
      <div className="hidden md:flex relative max-w-md flex-1 items-center">
        <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search leads, companies, deals..."
          className="h-9 pl-9 pr-16 bg-muted/40 border-transparent focus-visible:bg-background"
        />
        <kbd className="absolute right-2 hidden md:inline-flex items-center gap-1 rounded border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          <Command className="h-3 w-3" />K
        </kbd>
      </div>
      <div className="ml-auto flex items-center gap-1.5">
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <HelpCircle className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="relative h-9 w-9">
          <Bell className="h-4 w-4" />
          <Badge className="absolute -right-0.5 -top-0.5 h-4 w-4 justify-center rounded-full bg-accent p-0 text-[10px] text-accent-foreground">
            3
          </Badge>
        </Button>
        <div className="ml-2 flex items-center gap-2 rounded-full border bg-card px-1 py-1 pr-3">
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://i.pravatar.cc/100?img=47" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <div className="hidden text-left text-xs leading-tight md:block">
            <div className="font-medium">Ayesha Khan</div>
            <div className="text-muted-foreground">Sales Manager</div>
          </div>
        </div>
      </div>
    </header>
  );
}
