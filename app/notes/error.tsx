'use client';
import css from './error.module.css';
type Props = {
  error: Error;
};
const Error = ({ error }: Props) => {
  console.log(error);

  return (
    <p className={css.text}>
      Could not fetch the list of notes. {error.message}
    </p>
  );
};

export default Error;
