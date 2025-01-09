import { useForm, usePage } from "@inertiajs/react";

export default function New() {
    const { errors } = usePage().props;

    const { data, setData, post } = useForm({
        name: "",
        occupation: "",
        location: "",
        avatar: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.teams.update"));
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
                        {/* Occupation Field */}
                        <div>
                            <label
                                htmlFor="occupation"
                                className="block font-medium text-sm text-gray-700"
                            >
                                Occupation
                            </label>
                            <input
                                type="text"
                                id="occupation"
                                value={data.occupation}
                                onChange={(e) =>
                                    setData("occupation", e.target.value)
                                }
                                className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                required
                            />
                            {errors.occupation && (
                                <div className="text-red-600 text-sm mt-2">
                                    {errors.occupation}
                                </div>
                            )}
                        </div>
                        {/* Location Field */}
                        <div>
                            <label
                                htmlFor="location"
                                className="block font-medium text-sm text-gray-700"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                value={data.location}
                                onChange={(e) =>
                                    setData("location", e.target.value)
                                }
                                className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                required
                            />
                            {errors.location && (
                                <div className="text-red-600 text-sm mt-2">
                                    {errors.location}
                                </div>
                            )}
                        </div>

                        {/* avatar Field */}
                        <div className="mt-4">
                            <label
                                htmlFor="avatar"
                                className="block font-medium text-sm text-gray-700"
                            >
                                avatar
                            </label>
                            <input
                                type="file"
                                id="avatar"
                                onChange={(e) =>
                                    setData("avatar", e.target.files[0])
                                }
                                className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                required
                            />
                            {errors.avatar && (
                                <div className="text-red-600 text-sm mt-2">
                                    {errors.avatar}
                                </div>
                            )}
                        </div>
                        {/* Submit Button */}
                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"
                                className="font-bold py-4 px-6 bg-indigo-700 text-white rounded-full"
                            >
                                Update Statistic
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
