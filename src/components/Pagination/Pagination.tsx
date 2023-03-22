import { PaginationButton, PaginationContainer, PaginationLabel } from "./style";

interface PropsPagination {
    page: number;
    setPage: (n: number) => void;
    total: number;
    limit: number;
}

export const Pagination = ({page, setPage, total, limit}:PropsPagination) => {
    const goToFirstPage = () => setPage(1)
    const goToLastPage = () => setPage(getLastPage())
    const incrementPage = () => page < getLastPage() && setPage(page + 1)
    const decrementPage = () => page > 1 && setPage(page - 1)
    const atFirstPage = () => page === 1
    const atLastPage = () => page === getLastPage()
    const getLastPage = () => Math.ceil(total / limit)
    return (
        <PaginationContainer>
            <PaginationButton onClick={() => goToFirstPage()} disabled={atLastPage()}>
                FP
            </PaginationButton>
            <PaginationButton onClick={() => decrementPage()} disabled={atFirstPage()}>
                PP
            </PaginationButton>
            <PaginationLabel>
                {page}
            </PaginationLabel>
            <PaginationButton onClick={incrementPage} disabled={atLastPage()}>
                NP
            </PaginationButton>
            <PaginationButton onClick={goToLastPage} disabled={atLastPage()}>
                LP
            </PaginationButton>
        </PaginationContainer>
    )
}