import Modal from '@/app/components/Modal/Modal';
import NotePreview from '@/app/components/NotePreview/NotePreview';
import { fetchNoteById } from '@/app/lib/api';

type Props = {
  params: Promise<{ id: string }>;
};

const NoteModalPreview = async ({ params }: Props) => {
  const { id } = await params;
  console.log(id);

  const note = await fetchNoteById(id);

  return (
    <>
      <NotePreview note={note} />{' '}
    </>
  );
};

export default NoteModalPreview;
