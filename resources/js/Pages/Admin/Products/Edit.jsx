import React from "react";
import { router, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ items }) {
    const { errors } = usePage().props;

    const { data, setData } = useForm({
        name: items.name || "",
        tagline: items.tagline || "",
        thumbnail: null,
        about: items.about || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("_method", "PUT");
        formData.append("name", data.name);
        formData.append("tagline", data.tagline);
        formData.append("about", data.about);
        if (data.thumbnail) {
            formData.append("thumbnail", data.thumbnail);
        }
        router.post(route("admin.products.update", [items.id]), formData);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Update Products
                    </h2>
                </div>
            }
        >
            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden p-10 shadow-sm sm:rounded-lg">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight mb-6">
                            Update Products
                        </h2>
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                    required
                                />
                                {errors.name && (
                                    <div className="text-red-600 text-sm mt-2">
                                        {errors.name}
                                    </div>
                                )}
                            </div>
                            {/* Tagline Field */}
                            <div>
                                <label
                                    htmlFor="tagline"
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    tagline
                                </label>
                                <input
                                    type="text"
                                    id="tagline"
                                    value={data.tagline}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                    required
                                />
                                {errors.tagline && (
                                    <div className="text-red-600 text-sm mt-2">
                                        {errors.tagline}
                                    </div>
                                )}
                            </div>

                            {/* Thumbnail Field */}
                            <div className="mt-4">
                                <label
                                    htmlFor="banner"
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    Thumbnail
                                </label>
                                <input
                                    type="file"
                                    id="banner"
                                    onChange={(e) =>
                                        setData("banner", e.target.files[0])
                                    }
                                    className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                />
                                {errors.thumbnail && (
                                    <div className="text-red-600 text-sm mt-2">
                                        {errors.thumbnail}
                                    </div>
                                )}
                            </div>

                            {/* About Field */}
                            <div>
                                <label
                                    htmlFor="about"
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    About
                                </label>
                                <textarea
                                    id="about"
                                    onChange={(e) =>
                                        setData("about", e.target.value)
                                    }
                                    className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                    required
                                >
                                    {items.about}
                                </textarea>
                                {errors.about && (
                                    <div className="text-red-600 text-sm mt-2">
                                        {errors.about}
                                    </div>
                                )}
                            </div>
                            {/* Submit Button */}
                            <div className="flex items-center justify-end mt-4">
                                <button
                                    type="submit"
                                    className="font-bold py-4 px-6 bg-indigo-700 text-white rounded-full"
                                >
                                    Update Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
