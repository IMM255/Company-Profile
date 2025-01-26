import React from "react";
import { useForm, usePage, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ items }) {
    const { errors } = usePage().props;

    const { data, setData } = useForm({
        name: items.name || "",
        thumbnail: null,
        type: items.type || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("_method", "PUT");
        formData.append("name", data.name);
        formData.append("type", data.type);
        if (data.thumbnail) {
            formData.append("thumbnail", data.thumbnail);
        }
        router.post(route("admin.abouts.update", [items.id]), formData);
    };

    // const addKeypoint = () => {
    //     setData("keypoints", [...data.keypoints, ""]);
    // };

    // const updateKeypoint = (index, value) => {
    //     const updatedKeypoints = [...data.keypoints];
    //     updatedKeypoints[index] = value;
    //     setData("keypoints", updatedKeypoints);
    // };

    // const removeKeypoint = (index) => {
    //     const updatedKeypoints = [...data.keypoints];
    //     updatedKeypoints.splice(index, 1);
    //     setData("keypoints", updatedKeypoints);
    // };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Company About
                    </h2>
                </div>
            }
        >
            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden p-10 shadow-sm sm:rounded-lg">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight mb-6">
                            Update About
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
                                />
                                {errors.thumbnail && (
                                    <div className="text-red-600 text-sm mt-2">
                                        {errors.thumbnail}
                                    </div>
                                )}
                            </div>

                            {/* Type Field */}
                            <div className="mt-4">
                                <label
                                    htmlFor="type"
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    Type
                                </label>
                                <select
                                    id="type"
                                    value={data.type}
                                    onChange={(e) =>
                                        setData("type", e.target.value)
                                    }
                                    className="py-3 rounded-lg pl-3 w-full border border-slate-300"
                                >
                                    <option value="">Choose type</option>
                                    <option value="Visions">Visions</option>
                                    <option value="Missions">Missions</option>
                                </select>
                                {errors.type && (
                                    <div className="text-red-600 text-sm mt-2">
                                        {errors.type}
                                    </div>
                                )}
                            </div>

                            {/* Keypoints Section */}
                            {/* <h3 className="text-indigo-950 text-lg font-bold mt-4">
                                Keypoints
                            </h3>
                            <div className="mt-4">
                                <div className="flex flex-col gap-y-5">
                                    {data.keypoints.map((keypoint, index) => (
                                        <div key={index} className="flex gap-3">
                                            <input
                                                type="text"
                                                className="py-3 rounded-lg border-slate-300 border flex-1"
                                                placeholder="Write your keypoint"
                                                value={keypoint}
                                                onChange={(e) =>
                                                    updateKeypoint(
                                                        index,
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeKeypoint(index)
                                                }
                                                className="px-4 py-2 bg-red-700 text-white rounded-lg"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={addKeypoint}
                                    className="mt-3 px-4 py-2 bg-indigo-700 text-white rounded-lg"
                                >
                                    Add Keypoint
                                </button>
                                {errors.keypoints && (
                                    <div className="text-red-600 text-sm mt-2">
                                        {errors.keypoints}
                                    </div>
                                )}
                            </div> */}

                            {/* Submit Button */}
                            <div className="flex items-center justify-end mt-4">
                                <button
                                    type="submit"
                                    className="font-bold py-4 px-6 bg-indigo-700 text-white rounded-full"
                                >
                                    Update About
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
