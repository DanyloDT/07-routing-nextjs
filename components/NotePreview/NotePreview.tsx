'use client';
import { useRouter } from 'next/navigation';
import css from './NotePreview.module.css';
import { Note } from '@/types/note';

interface NotePreviewProps {
  note: Note;
}
const NotePreview = ({ note }: NotePreviewProps) => {
  const router = useRouter();

  const close = () => router.back();
  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <div className={css.header}>
          <h2>{note?.title}</h2>
        </div>
        <p className={css.tag}>{note?.tag}</p>
        <p className={css.content}>{note?.content}</p>
        <p className={css.date}>{note?.createdAt}</p>
        <button className={css.button} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NotePreview;
