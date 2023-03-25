import {
  PaginationButton,
  PaginationContainer,
  PaginationLabel,
} from "./style";

interface PropsPagination {
  page: number;
  setPage: (n: number) => void;
  total: number;
  limit: number;
}

export const Pagination: React.FC<PropsPagination> = ({
  page,
  setPage,
  total,
  limit,
}): JSX.Element => {
  const goToFirstPage = (): void => setPage(1);
  const goToLastPage = (): void => setPage(getLastPage());
  const incrementPage = (): void | boolean =>
    page < getLastPage() && setPage(page + 1);
  const decrementPage = (): void | boolean => page > 1 && setPage(page - 1);
  const atFirstPage = (): boolean => page === 1;
  const atLastPage = (): boolean => page === getLastPage();
  const getLastPage = (): number => Math.ceil(total / limit);

  return (
    <PaginationContainer>
      <PaginationButton onClick={() => goToFirstPage()} disabled={atLastPage()}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6'
        >
          <path
            fillRule='evenodd'
            d='M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z'
            clipRule='evenodd'
          />
        </svg>
      </PaginationButton>
      <PaginationButton
        onClick={() => decrementPage()}
        disabled={atFirstPage()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6'
        >
          <path
            fillRule='evenodd'
            d='M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z'
            clipRule='evenodd'
          />
        </svg>
      </PaginationButton>
      <PaginationLabel>{page}</PaginationLabel>
      <PaginationButton onClick={incrementPage} disabled={atLastPage()}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6'
        >
          <path
            fillRule='evenodd'
            d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
            clipRule='evenodd'
          />
        </svg>
      </PaginationButton>
      <PaginationButton onClick={goToLastPage} disabled={atLastPage()}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6'
        >
          <path
            fillRule='evenodd'
            d='M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z'
            clipRule='evenodd'
          />
        </svg>
      </PaginationButton>
    </PaginationContainer>
  );
};
