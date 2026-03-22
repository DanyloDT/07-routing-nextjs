import NotePreview from './NotePreview.client';
import { fetchNoteById } from '@/lib/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

type Props = {
  params: Promise<{ id: string }>;
};

const NoteModalPreview = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  const note = await fetchNoteById(id);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreview note={note} />
    </HydrationBoundary>
  );
};

export default NoteModalPreview;
