import { LetterType } from './data';

export default function Letter({
    letter,
    isHighlighted,
    onHover,
    onToggleStar,
  }: {
    letter: LetterType,
    isHighlighted: boolean,
    onHover: (id: number) => void,
    onToggleStar: (letter: LetterType) => void,
  }
) {
    return (
      <li
        className={
          isHighlighted ? 'highlighted' : ''
        }
        onFocus={() => {
          onHover(letter.id);
        }}
        onPointerMove={() => {
          onHover(letter.id);
        }}
      >
        <button onClick={() => {
          onToggleStar(letter);
        }}>
          {letter.isStarred ? 'Unstar' : 'Star'}
        </button>
        {letter.subject}
      </li>
    )
  }
  