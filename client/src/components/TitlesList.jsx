import { useEffect, useState } from "react";
import { getAllTitles } from "../api/titles.api";
import { TitleCard } from "./TitleCard";

export function TitlesList() {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        async function loadTitles() {
            const res = await getAllTitles();
            setTitles(res.data);
        }
        loadTitles();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {titles.map(title => (
                    <TitleCard key={title.id} title={title} />
                ))}
            </div>
        </div>
    );
}