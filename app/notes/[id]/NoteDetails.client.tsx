'use client';

import NoteDetailsClient from '@/app/components/NoteDetailsClient/NoteDetailsClient';
import { fetchNoteById } from '@/app/lib/api';
import Loading from '@/app/loading';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const NoteDetails = () => {
  const { id } = useParams();
  console.log(id);

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id as string),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !note) {
    return <p>Something went wrong.</p>;
  }
  return (
    <>
      <NoteDetailsClient note={note} />
    </>
  );
};

export default NoteDetails;
