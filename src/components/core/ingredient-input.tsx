'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import { IconHistory, IconListDetails, IconX } from '@tabler/icons-react';

import { cn } from '@/lib/utils';

import { Button } from './button';
import { Input, InputProps } from './input';
import { Separator } from './separator';

interface IngredientInputProps extends InputProps {
  suggestions: string[];
  onSuggestionSelected?: (suggestion: string) => void;

  existingIngredients?: string[];
  showHistory?: boolean;
}

const IngredientInput = React.forwardRef<HTMLInputElement, IngredientInputProps>(
  (
    {
      className,
      suggestions,
      onSuggestionSelected,
      existingIngredients = [],
      showHistory = false,
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (inputValue) {
        const filtered = suggestions.filter(
          (suggestion) =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase()) &&
            !existingIngredients.includes(suggestion.toLowerCase()),
        );
        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
      } else {
        setFilteredSuggestions([]);
        setShowSuggestions(false);
      }
    }, [inputValue, suggestions, existingIngredients]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      setActiveSuggestionIndex(0);
    };

    const handleSuggestionClick = (suggestion: string) => {
      if (!existingIngredients.includes(suggestion.toLowerCase())) {
        onSuggestionSelected?.(suggestion);
      }

      setInputValue('');
      setShowSuggestions(false);
      setActiveSuggestionIndex(-1);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowDown') {
        setActiveSuggestionIndex((prevIndex) =>
          prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex,
        );
      } else if (e.key === 'ArrowUp') {
        setActiveSuggestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
      } else if (e.key === ',' || e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission
        if (activeSuggestionIndex >= 0) {
          handleSuggestionClick(filteredSuggestions[activeSuggestionIndex]);
        } else if (filteredSuggestions.length > 0) {
          handleSuggestionClick(filteredSuggestions[0]);
        } else {
          setShowSuggestions(false);
        }
      }
    };

    useEffect(() => {
      if (activeSuggestionIndex >= 0 && showSuggestions) {
        inputRef.current?.setAttribute(
          'aria-activedescendant',
          `suggestion-${activeSuggestionIndex}`,
        );
      } else {
        inputRef.current?.removeAttribute('aria-activedescendant');
      }
    }, [activeSuggestionIndex, showSuggestions]);

    return (
      <div className="relative flex w-full items-center">
        <IconListDetails className="absolute left-4 size-4 text-muted-foreground" />

        <Input
          autoComplete="off"
          className={cn(
            'pl-10 pr-16 focus-visible:ring-0 focus-visible:ring-offset-0',
            className,
            showSuggestions && filteredSuggestions.length > 0 ? 'rounded-b-none rounded-t-lg' : '',
          )}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          aria-autocomplete="list"
          {...props}
        />
        {inputValue && (
          <Button
            variant="link"
            size="none"
            className={`group absolute ${showHistory ? 'right-10' : 'right-4'}`}
            onClick={() => setInputValue('')}
          >
            <IconX className="size-4 text-muted-foreground group-hover:text-destructive" />
          </Button>
        )}

        {showHistory && (
          <Button variant="link" size="none" className="group absolute right-4" onClick={() => {}}>
            <IconHistory className="size-4 text-muted-foreground group-hover:text-primary" />
          </Button>
        )}

        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="absolute left-0 right-0 top-full z-10 max-h-60 w-full overflow-y-auto rounded-b-lg border border-t-0 border-input bg-background px-4 text-sm">
            {filteredSuggestions.map((suggestion, index) => (
              <div key={suggestion}>
                <li
                  id={`suggestion-${index}`}
                  className={cn(
                    'cursor-pointer py-2',
                    index === activeSuggestionIndex ? 'text-muted-foreground' : '',
                  )}
                  onClick={() => handleSuggestionClick(suggestion)}
                  onMouseEnter={() => setActiveSuggestionIndex(index)}
                >
                  {suggestion}
                </li>

                {index !== filteredSuggestions.length - 1 && <Separator />}
              </div>
            ))}
          </ul>
        )}
      </div>
    );
  },
);
IngredientInput.displayName = 'IngredientInput';

export { IngredientInput };
