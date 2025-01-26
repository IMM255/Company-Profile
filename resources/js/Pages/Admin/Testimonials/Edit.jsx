import React from "react";
import { useForm, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function EditTestimonial({ items, projectClients }) {
    const { data, setData, post, errors } = useForm({
        project_client_id: items.project_client_id || "",
        message: items.message || "",
        thumbnail: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("_method", "PUT");
        formData.append("project_client_id", data.project_client_id);
        formData.append("message", data.message);
        if (data.thumbnail) {
            formData.append("thumbnail", data.thumbnail);
        }
        router.post(route("admin.testimonials.update", items.id), formData);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Update Statistic
                    </h2>
                </div>
            }
        >
            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden p-10 shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            <div className="mt-4">
                                <label
                                    htmlFor="project_client_id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Project Client
                                </label>
                                <select
                                    name="project_client_id"
                                    id="project_client_id"
                                    value={data.project_client_id}
                                    onChange={(e) =>
                                        setData(
                                            "project_client_id",
                                            e.target.value
                                        )
                                    }
                                    className="py-3 rounded-lg pl-3 w-full border border-slate-300"
                                >
                                    <option value="">Choose a client</option>
                                    {projectClients.map((client) => (
                                        <option
                                            key={client.id}
                                            value={client.id}
                                        >
                                            {client.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.project_client_id && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {errors.project_client_id}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="5"
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                    className="border border-slate-300 rounded-xl w-full"
                                ></textarea>
                                {errors.message && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {errors.message}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4">
                                <label
                                    htmlFor="thumbnail"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Thumbnail
                                </label>
                                {data.thumbnail && (
                                    <img
                                        src={data.thumbnail}
                                        alt="Current Thumbnail"
                                        className="rounded-2xl object-cover w-[90px] h-[90px] mb-3"
                                    />
                                )}
                                <input
                                    id="thumbnail"
                                    type="file"
                                    name="thumbnail"
                                    onChange={(e) =>
                                        setData("thumbnail", e.target.files[0])
                                    }
                                    className="block mt-1 w-full"
                                />
                                {errors.thumbnail && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {errors.thumbnail}
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <button
                                    type="submit"
                                    className="font-bold py-4 px-6 bg-indigo-700 text-white rounded-full"
                                >
                                    Update Testimonial
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
