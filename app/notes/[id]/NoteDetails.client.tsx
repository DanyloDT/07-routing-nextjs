'use client';

import NoteDetailsClient from '@/app/components/NoteDetailsClient/NoteDetailsClient';
import { fetchNoteById } from '@/app/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const NoteDetails = () => {
  const { id } = useParams();
  console.log(id);

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id as string),
  });

  return (
    <>
      {isLoading && <p>Loading, please wait...</p>}
      {error || !note ? (
        <p>Something went wrong.</p>
      ) : (
        <NoteDetailsClient note={note} />
      )}
    </>
  );
};

export default NoteDetails;
