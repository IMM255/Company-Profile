import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function Edit({ statistic }) {
    const { errors } = usePage().props;

    const { data, setData } = useForm({
        name: statistic.name,
        icon: null,
        goal: statistic.goal,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("_method", "PUT"); // Menambahkan _method agar digunakan sebagai PUT
        formData.append("name", data.name);
        formData.append("goal", data.goal);
        if (data.icon) {
            formData.append("icon", data.icon);
        }
        router.post(`/admin/statistics/${statistic.id}`, formData);
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
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight mb-6">
                            Update Statistic
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
                                    name="name"
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

                            {/* icon Field */}
                            <div className="mt-4">
                                <label
                                    htmlFor="icon"
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    icon
                                </label>
                                <input
                                    type="file"
                                    id="icon"
                                    name="icon"
                                    onChange={(e) =>
                                        setData("icon", e.target.files[0])
                                    }
                                    className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                />
                                {errors.icon && (
                                    <div className="text-red-600 text-sm mt-2">
                                        {errors.icon}
                                    </div>
                                )}
                            </div>
                            {/* Goal Field */}
                            <div>
                                <label
                                    htmlFor="goal"
                                    className="block font-medium text-sm text-gray-700"
                                >
                                    Goal
                                </label>
                                <input
                                    type="text"
                                    id="goal"
                                    value={data.goal}
                                    name="goal"
                                    onChange={(e) =>
                                        setData("goal", e.target.value)
                                    }
                                    className="block mt-1 w-full rounded-lg border-gray-300 shadow-sm"
                                    required
                                />
                                {errors.goal && (
                                    <div className="text-red-600 text-sm mt-2">
                                        {errors.goal}
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
        </AuthenticatedLayout>
    );
}
