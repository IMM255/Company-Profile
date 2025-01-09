import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";

export default function New() {
    const { errors } = usePage().props;

    const { data, setData, post } = useForm({
        name: "",
        thumbnail: null,
        icon: null,
        subtitle: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.principles.update"));
    };

    return (
        <div className="py-12">
            <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden p-10 shadow-sm sm:rounded-lg">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight mb-6">
                        New Principles
                    </h2>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
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

                        {/* Thumbnail Field */}
                        <div className="mt-4">
                            <label
                                htmlFor="thumbnail"
                                className="block font-medium text-sm text-gray-700"
                            >
                                Thumbnail
                            </label>
                            <input
                                type="file"
                                id="thumbnail"
                                onChange={(e) =>
                                    setData("thumbnail", e.target.files[0])
                                }
                                className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                required
                            />
                            {errors.thumbnail && (
                                <div className="text-red-600 text-sm mt-2">
                                    {errors.thumbnail}
                                </div>
                            )}
                        </div>

                        {/* Icon Field */}
                        <div className="mt-4">
                            <label
                                htmlFor="icon"
                                className="block font-medium text-sm text-gray-700"
                            >
                                Icon
                            </label>
                            <input
                                type="file"
                                id="icon"
                                onChange={(e) =>
                                    setData("icon", e.target.files[0])
                                }
                                className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                required
                            />
                            {errors.icon && (
                                <div className="text-red-600 text-sm mt-2">
                                    {errors.icon}
                                </div>
                            )}
                        </div>

                        {/* Subtitle Field */}
                        <div>
                            <label
                                htmlFor="subtitle"
                                className="block font-medium text-sm text-gray-700"
                            >
                                Subtitle
                            </label>
                            <input
                                type="text"
                                id="subtitle"
                                value={data.subtitle}
                                onChange={(e) =>
                                    setData("subtitle", e.target.value)
                                }
                                className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                required
                            />
                            {errors.subtitle && (
                                <div className="text-red-600 text-sm mt-2">
                                    {errors.subtitle}
                                </div>
                            )}
                        </div>
                        {/* Submit Button */}
                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"
                                className="font-bold py-4 px-6 bg-indigo-700 text-white rounded-full"
                            >
                                Add New Subtitle
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
