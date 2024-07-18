import { IngredientsSuggestionsList } from '@/lib/constants/ingredients';
import { cn } from '@/lib/utils';

import { TagItem } from '@/components/core/tag';
import { TagInput } from '@/components/core/tag-input';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface TagInputFieldProps {
  tags: TagItem[];
  onSuggestionSelected: (suggestion: string) => void;
  inputError: boolean;
}

/// ---------- || TAG INPUT FIELD || ---------- ///

export default function TagInputField({
  tags,
  onSuggestionSelected,
  inputError,
}: TagInputFieldProps) {
  return (
    <div className="z-10 w-full animate-fade-down">
      <TagInput
        className={cn('rounded-lg', inputError ? 'border-destructive' : '')}
        placeholder={inputError ? 'Please add at least one ingredient' : 'What’s in your kitchen?'}
        suggestions={IngredientsSuggestionsList}
        onSuggestionSelected={onSuggestionSelected}
        existingTags={tags.map((tag) => tag.text)}
      />
    </div>
  );
}
