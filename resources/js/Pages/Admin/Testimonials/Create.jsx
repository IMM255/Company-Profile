import React from "react";
import { useForm, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const CreateTestimonial = ({ projectsClients }) => {
    const { data, setData, errors } = useForm({
        project_client_id: "",
        message: "",
        thumbnail: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("admin.testimonials.store"), data);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Testimonial
                    </h2>
                    <Link
                        href={route("admin.statistics.create")}
                        className="font-bold py-2 px-4 bg-indigo-700 text-white rounded-full"
                    >
                        Add New Testimonial
                    </Link>
                </div>
            }
        >
            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden p-10 shadow-sm sm:rounded-lg">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            New Testimonial
                        </h2>
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {/* Project Client Select */}
                            <div className="mt-4">
                                <label
                                    htmlFor="project_client_id"
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    Project Client
                                </label>
                                <select
                                    name="project_client_id"
                                    id="project_client_id"
                                    className="py-3 rounded-lg pl-3 w-full border border-slate-300"
                                    value={data.project_client_id}
                                    onChange={(e) =>
                                        setData(
                                            "project_client_id",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="" disabled>
                                        Choose project_client
                                    </option>
                                    {projectsClients.map((client) => (
                                        <option
                                            key={client.id}
                                            value={client.id}
                                        >
                                            {client.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.project_client_id && (
                                    <p className="text-red-600 text-sm">
                                        {errors.project_client_id}
                                    </p>
                                )}
                            </div>

                            {/* Message Textarea */}
                            <div className="mt-4">
                                <label
                                    htmlFor="message"
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="5"
                                    className="border border-slate-300 rounded-xl w-full"
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-600 text-sm">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Thumbnail Input */}
                            <div className="mt-4">
                                <label
                                    htmlFor="thumbnail"
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    Thumbnail
                                </label>
                                <input
                                    id="thumbnail"
                                    type="file"
                                    className="block mt-1 w-full"
                                    onChange={(e) =>
                                        setData("thumbnail", e.target.files[0])
                                    }
                                />
                                {errors.thumbnail && (
                                    <p className="text-red-600 text-sm">
                                        {errors.thumbnail}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="flex items-center justify-end mt-4">
                                <button
                                    type="submit"
                                    className="font-bold py-4 px-6 bg-indigo-700 text-white rounded-full"
                                >
                                    Add New Testimonial
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateTestimonial;
