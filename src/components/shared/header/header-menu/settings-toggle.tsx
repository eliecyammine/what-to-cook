import Link from 'next/link';

import { IconAdjustments } from '@tabler/icons-react';

import { createClient } from '@/lib/services/supabase/server';
import { cn } from '@/lib/utils';

import { Button, buttonVariants } from '@/components/core/button';
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

/// ---------- || FILTER SETTINGS || ---------- ///

const filterSettings = [
  {
    id: 'show-food',
    label: 'Show only food recipes',
    disabled: true,
  },
  {
    id: 'show-beverages',
    label: 'Show only beverage recipes',
    disabled: true,
  },
  {
    id: 'enable-vegetarian-vegan',
    label: 'Vegetarian/Vegan options',
    disabled: true,
  },
  {
    id: 'enable-gluten-free',
    label: 'Gluten-free options',
    disabled: true,
  },
  {
    id: 'enable-low-calorie',
    label: 'Low-calorie options',
    disabled: true,
  },
];

/// ---------- || ADVANCED SETTINGS || ---------- ///

const advancedSettings = [
  {
    id: 'enable-ai',
    label: 'Enable AI for recipe suggestions',
    disabled: true,
  },
  {
    id: 'dietary-restrictions',
    label: 'Dietary Restrictions',
    disabled: true,
  },
  {
    id: 'cuisine-preferences',
    label: 'Cuisine Preferences',
    disabled: true,
  },
];

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
          className="group rounded-full focus-visible:outline-none"
        >
          <IconAdjustments className="size-5 text-muted-foreground group-hover:text-foreground" />

          <span className="sr-only">Toggle settings</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="mx-10 mt-16 h-fit rounded-lg border border-border">
        <SheetHeader>
          <SheetTitle>{`Settings & Filters`}</SheetTitle>

          <SheetDescription>{`Customize your preferences for a personalized cooking experience.`}</SheetDescription>
        </SheetHeader>

        <div className="py-2">
          <Separator className="my-4" />

          <span className="text-sm font-bold text-muted-foreground">Recipe Filters</span>
        </div>

        <div className="flex flex-col space-y-4 py-2">
          {filterSettings.map((filterSetting) => (
            <div key={filterSetting.id} className="flex items-center justify-between">
              <Label htmlFor={filterSetting.id}>{filterSetting.label}</Label>

              <Switch id={filterSetting.id} disabled={filterSetting.disabled} />
            </div>
          ))}
        </div>

        <div className="py-2">
          <Separator className="my-4" />

          <span className="text-sm font-bold text-muted-foreground">Advanced Settings</span>
        </div>

        <div className="flex flex-col space-y-4 py-2">
          {advancedSettings.map((advancedSetting) => (
            <div key={advancedSetting.id} className="flex items-center justify-between">
              <Label htmlFor={advancedSetting.id}>{advancedSetting.label}</Label>

              <Switch id={advancedSetting.id} disabled={advancedSetting.disabled} />
            </div>
          ))}
        </div>

        <Separator className="my-4" />

        <SheetFooter>
          {user ? (
            <>
              <SheetClose asChild>
                <Button disabled>Save</Button>
              </SheetClose>

              <SheetClose asChild>
                <Button variant="outline" disabled>
                  Reset
                </Button>
              </SheetClose>
            </>
          ) : (
            <SheetClose asChild>
              <Link href="/login" className={cn(buttonVariants())}>
                Login to use these features
              </Link>
            </SheetClose>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
