import { useNavigate } from 'react-router-dom';

export function TitleCard({ title }) {
    const navigate = useNavigate();

    return (
        <div 
            className="bg-gray-800 rounded-lg p-4 mb-4 cursor-pointer hover:bg-gray-700 transition-colors"
            onClick={() => navigate(`/titles/${title.id}`)}
        >
            <h2 className="text-xl font-bold text-red-500 mb-2">{title.title}</h2>
            <div className="flex gap-2 mb-2">
                <span className="bg-gray-600 px-2 py-1 rounded-full text-sm">{title.content_type}</span>
                <span className="bg-gray-600 px-2 py-1 rounded-full text-sm">{title.genre}</span>
            </div>
            <p className="text-gray-300">{title.note}</p>
        </div>
    );
}