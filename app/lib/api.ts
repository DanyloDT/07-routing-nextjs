import axios from 'axios';
import type { Note } from '../types/note';

const instance = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

interface FetchNotesParams {
  page: number;
  perPage: number;
  search: string;
}

interface FetchNoteResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  params: FetchNotesParams,
): Promise<FetchNoteResponse> => {
  const { data } = await instance.get<FetchNoteResponse>('/notes', { params });
  return data;
};

export const createNote = (params: Pick<Note, 'title' | 'content' | 'tag'>) => {
  const data = instance.post<Note>('/notes', params);
  return data;
};

export const fetchNoteById = async (id: string) => {
  const { data } = await instance.get<Note>(`/notes/${id}`);
  return data;
};

export const deleteNote = (id: string) => instance.delete<Note>(`/notes/${id}`);
