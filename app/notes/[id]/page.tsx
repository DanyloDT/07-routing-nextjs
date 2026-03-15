import { fetchNoteById } from '@/app/lib/api';

import NoteDetails from './NoteDetails.client';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
type Props = {
  params: Promise<{ id: string }>;
};
const NoteDetail = async ({ params }: Props) => {
  const { id } = await params;
  // const note = await fetchNoteById(id);
  // console.log(note);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetails />
    </HydrationBoundary>
  );
};

export default NoteDetail;
