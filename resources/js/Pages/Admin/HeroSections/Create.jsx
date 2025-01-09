import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";

export default function New() {
    const { errors } = usePage().props;

    const { data, setData, post } = useForm({
        name: "",
        thumbnail: null,
        subheading: "",
        achievement: "",
        path_video: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.hero_sections.store"));
    };

    return (
        <div className="py-12">
            <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden p-10 shadow-sm sm:rounded-lg">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight mb-6">
                        New About
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
                                required
                            />
                            {errors.thumbnail && (
                                <div className="text-red-600 text-sm mt-2">
                                    {errors.thumbnail}
                                </div>
                            )}
                        </div>

                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="subheading"
                                className="block font-medium text-sm text-gray-700"
                            >
                                Subheading
                            </label>
                            <input
                                type="text"
                                id="subheading"
                                value={data.subheading}
                                onChange={(e) =>
                                    setData("subheading", e.target.value)
                                }
                                className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                required
                            />
                            {errors.subheading && (
                                <div className="text-red-600 text-sm mt-2">
                                    {errors.subheading}
                                </div>
                            )}
                        </div>
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="achievement"
                                className="block font-medium text-sm text-gray-700"
                            >
                                Achievement
                            </label>
                            <input
                                type="text"
                                id="achiviement"
                                value={data.achievement}
                                onChange={(e) =>
                                    setData("achievement", e.target.value)
                                }
                                className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                required
                            />
                            {errors.achievement && (
                                <div className="text-red-600 text-sm mt-2">
                                    {errors.achievement}
                                </div>
                            )}
                        </div>
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="path_video"
                                className="block font-medium text-sm text-gray-700"
                            >
                                Path Video
                            </label>
                            <input
                                type="text"
                                id="path_video"
                                value={data.path_video}
                                onChange={(e) =>
                                    setData("path_video", e.target.value)
                                }
                                className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                required
                            />
                            {errors.path_video && (
                                <div className="text-red-600 text-sm mt-2">
                                    {errors.path_video}
                                </div>
                            )}
                        </div>
                        {/* Submit Button */}
                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"
                                className="font-bold py-4 px-6 bg-indigo-700 text-white rounded-full"
                            >
                                Add New About
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
