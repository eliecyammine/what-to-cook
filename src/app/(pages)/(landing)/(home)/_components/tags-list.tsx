import { Button } from '@/components/core/button';
import { Tag, TagItem } from '@/components/core/tag';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface TagsListProps {
  tags: TagItem[];
  onRemoveTag: (id: string) => void;
  onClearTags: () => void;
}

/// ---------- || TAGS LIST || ---------- ///

export default function TagsList({ tags, onRemoveTag, onClearTags }: TagsListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag} onRemoveTag={onRemoveTag} />
      ))}

      {tags.length > 0 && (
        <Button onClick={onClearTags} variant="link" size="sm" className="text-destructive">
          <span className="text-xs">{`Clear Tags`}</span>
        </Button>
      )}
    </div>
  );
}
