import React, { useCallback, useMemo, useState } from "react";
import NotesList from "../components/NotesList";
import { useLocalStorage } from "../hooks/useLocalStorage";
import HomeHeader from "../components/HomeHeader";
import Filter from "../components/Filter";

const Home = () => {
    const [notes, setNotes] = useLocalStorage("notes", []);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterBy, setFilterBy] = useState([]);

    const deleteNote = useCallback((id) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }, [setNotes]);

    const handleFilter = useCallback((value) => {
        if (value === "") {
            setFilterBy([]);
            return
        }
        if (!filterBy.includes(value)) {
            setFilterBy(prevFilterBy => [...prevFilterBy, value]);
        }
    } , [filterBy]);

    const filteredNotes = useMemo(() => {
        const filtered = filterBy.length > 0 
            ? notes.filter(note => filterBy.includes(note.category)) 
            : notes;
        return filtered.filter((note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [notes, searchQuery, filterBy]);
    
    
    return (
        <>
            <HomeHeader query={searchQuery} onSearch={setSearchQuery}/>
            <Filter filterBy={filterBy} onFilterChange={handleFilter}/>
            <NotesList notes={filteredNotes} onDelete={deleteNote} /> 
        </>
    );
};
export default Home;