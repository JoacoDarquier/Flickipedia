import { useEffect } from 'react';
import {set, useForm} from 'react-hook-form';
import {createTitle, deleteTitle, updateTitle, getTitle} from '../api/titles.api';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-hot-toast';

export function TitleFormPage() {
    const {register, handleSubmit, formState: {errors}, setValue} = useForm();
    const navigate = useNavigate();


    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateTitle(params.id, data);
            toast.success("Title updated", {
                position: "bottom-right",
                style: {
                background: "#101010",
                color: "#fff",
                },
            });
        } else {
            await createTitle(data);
            toast.success("New Title Added", {
                position: "bottom-right",
                style: {
                background: "#101010",
                color: "#fff",
                },
            });
        }
        navigate("/titles");
    });

    useEffect(() => {
        async function loadTitle() {
            if (params.id) {
                const { data } = await getTitle(params.id);
                setValue("title", data.title);
                setValue("note", data.note);
                setValue("genre", data.genre);
                setValue("content_type", data.content_type);
            }
        }
        loadTitle();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <form onSubmit={onSubmit} className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg">
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Title"
                        className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        {...register('title', {required: true})}
                    />
                    {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
                </div>

                <div className="mb-4">
                    <select 
                        className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        {...register('genre', {required: true})}
                    >
                        <option value="">Select Genre</option>
                        <option value="action">Action</option>
                        <option value="drama">Drama</option>
                        <option value="comedy">Comedy</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="documentary">Documentary</option>
                    </select>
                    {errors.genre && <span className="text-red-500 text-sm">Genre is required</span>}
                </div>

                <div className="mb-4">
                    <select 
                        className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        {...register('content_type', {required: true})}
                    >
                        <option value="">Select Content Type</option>
                        <option value="movie">Movie</option>
                        <option value="series">Serie</option>
                        <option value="book">Book</option>
                    </select>
                    {errors.content_type && <span className="text-red-500 text-sm">Content Type is required</span>}
                </div>

                <div className="mb-4">
                    <textarea 
                        placeholder="Note" 
                        rows="3"
                        className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        {...register('note', {required: true})}
                    />
                    {errors.note && <span className="text-red-500 text-sm">Note is required</span>}
                </div>

                <div className="flex gap-4">
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                        Save
                    </button>
                    
                    {params.id && (
                        <button
                            type="button"
                            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                            onClick={async () => {
                                const accepted = window.confirm('Are you sure you want to delete this title?');
                                if (accepted) {
                                    await deleteTitle(params.id);
                                    toast.success("Title deleted");
                                    navigate('/titles');
                                }
                            }}
                        >
                            Delete
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}