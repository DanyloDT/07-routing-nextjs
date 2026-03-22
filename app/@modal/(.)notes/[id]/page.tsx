import NotePreview from '@/components/NotePreview/NotePreview';
import { fetchNoteById } from '@/lib/api';

type Props = {
  params: Promise<{ id: string }>;
};

const NoteModalPreview = async ({ params }: Props) => {
  const { id } = await params;

  const note = await fetchNoteById(id);

  return (
    <>
      <NotePreview note={note} />
    </>
  );
};

export default NoteModalPreview;
