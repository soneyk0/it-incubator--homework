import React, {useCallback, useMemo, useState} from "react";

type BookSecretType = {
    addBook: () => void
}

const BooksSecret = (props: BookSecretType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret);

export const LikeUseCallBack = () => {
    console.log('LikeUseCallBac')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'HTML', 'CSS'])


    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBook = [...books, 'Angular']
            setBooks(newBook)
        }
    }, [books]);

    const memoizedAddBook2 = useCallback(() => {
            console.log(books)
            const newBook = [...books, 'Angular']
            setBooks(newBook)

    }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>

}