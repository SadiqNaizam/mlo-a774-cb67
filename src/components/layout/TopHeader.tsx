import React from 'react';
import { Menu, Bell, User, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TopHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      {/* Left side: Hamburger Menu */}
      <div className="flex items-center">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <div className="relative">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">View notifications</span>
          </Button>
          {/* Red dot indicator */}
          <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
        </div>

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 h-auto p-1 rounded-lg focus-visible:ring-offset-0">
               <Avatar className="h-9 w-9">
                <AvatarImage src="https://i.pravatar.cc/150?u=eleanorvance" alt="Eleanor Vance" />
                <AvatarFallback>EV</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-medium">Eleanor Vance</p>
                <p className="text-xs text-muted-foreground">Data Analyst</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-2">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Eleanor Vance</p>
                <p className="text-xs leading-none text-muted-foreground">
                  eleanor.vance@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
