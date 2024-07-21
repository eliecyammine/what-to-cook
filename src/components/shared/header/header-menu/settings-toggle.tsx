import { IconAdjustments } from '@tabler/icons-react';

import { createClient } from '@/lib/services/supabase/server';

import { Button } from '@/components/core/button';
import { Label } from '@/components/core/label';
import { Separator } from '@/components/core/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/core/sheet';
import { Switch } from '@/components/core/switch';

/// ---------- || SETTINGS TOGGLE || ---------- ///

export async function SettingsToggle() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full text-muted-foreground hover:text-foreground focus-visible:outline-none"
          disabled={!user}
        >
          <IconAdjustments className="size-5" />

          <span className="sr-only">Toggle settings</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="mx-10 mt-16 h-fit rounded-lg border border-border">
        <SheetHeader>
          <SheetTitle>Settings & Filters</SheetTitle>

          <SheetDescription>{`Customize your preferences for a personalized cooking experience.`}</SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 py-2">
          <div>
            <Separator className="my-4" />

            <span className="text-sm font-bold text-muted-foreground">Recipe Filters</span>
          </div>

          <div className="inline-flex items-center justify-between">
            <Label htmlFor="show-food">Show only food recipes</Label>

            <Switch disabled id="show-food" />
          </div>

          <div className="inline-flex items-center justify-between">
            <Label htmlFor="show-beverages">Show only beverage recipes</Label>

            <Switch disabled id="show-beverages" />
          </div>

          <div className="inline-flex items-center justify-between">
            <Label htmlFor="enable-vegetarian-vegan">Vegetarian/Vegan options</Label>

            <Switch disabled id="enable-vegetarian-vegan" />
          </div>

          <div className="inline-flex items-center justify-between">
            <Label htmlFor="enable-gluten-free">Gluten-free options</Label>

            <Switch disabled id="enable-gluten-free" />
          </div>

          <div className="inline-flex items-center justify-between">
            <Label htmlFor="enable-low-calorie">Low-calorie options</Label>

            <Switch disabled id="enable-low-calorie" />
          </div>

          <div>
            <Separator className="my-4" />

            <span className="text-sm font-bold text-muted-foreground">Advanced Settings</span>
          </div>

          <div className="inline-flex items-center justify-between">
            <Label htmlFor="enable-ai">Enable AI for recipe suggestions</Label>

            <Switch disabled id="enable-ai" />
          </div>

          <div className="inline-flex items-center justify-between">
            <Label htmlFor="dietary-restrictions">Dietary Restrictions</Label>
          </div>

          <div className="inline-flex items-center justify-between">
            <Label htmlFor="cuisine-preferences">Cuisine Preferences</Label>
          </div>
        </div>

        <Separator className="my-4" />

        <SheetFooter>
          <SheetClose asChild>
            <Button disabled>Save</Button>
          </SheetClose>

          <SheetClose asChild>
            <Button variant="outline" disabled>
              Reset
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
