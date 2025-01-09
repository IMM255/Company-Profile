import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

export default function Index({ items }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Company About
                    </h2>
                    <Link
                        href={route("admin.abouts.create")}
                        className="font-bold py-2 px-4 bg-indigo-700 text-white rounded-full"
                    >
                        Add New
                    </Link>
                </div>
            }
        >
            <div>
                {/* Content */}
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-10 flex flex-col gap-y-5">
                            {items.length > 0 ? (
                                items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="item-card flex flex-row justify-between items-center"
                                    >
                                        {/* Item Details */}
                                        <div className="flex flex-row items-center gap-x-3">
                                            <img
                                                src={
                                                    item.image ||
                                                    "/default-image.jpg"
                                                }
                                                alt={item.title}
                                                className="rounded-2xl object-cover w-[90px] h-[90px]"
                                            />
                                            <div className="flex flex-col">
                                                <h3 className="text-indigo-950 text-xl font-bold">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Type */}
                                        <div className="hidden md:flex flex-col">
                                            <p className="text-slate-500 text-sm">
                                                Type
                                            </p>
                                            <h3 className="text-indigo-950 text-xl font-bold">
                                                {item.type}
                                            </h3>
                                        </div>

                                        {/* Date */}
                                        <div className="hidden md:flex flex-col">
                                            <p className="text-slate-500 text-sm">
                                                Date
                                            </p>
                                            <h3 className="text-indigo-950 text-xl font-bold">
                                                {item.date}
                                            </h3>
                                        </div>

                                        {/* Actions */}
                                        <div className="hidden md:flex flex-row items-center gap-x-3">
                                            <Link
                                                href={route(admin.abouts.edit)}
                                                className="font-bold py-4 px-6 bg-indigo-700 text-white rounded-full"
                                            >
                                                Edit
                                            </Link>
                                            <form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    // Handle delete request
                                                    if (
                                                        confirm("Are you sure?")
                                                    ) {
                                                        Inertia.post(
                                                            `/about/${item.id}/delete`,
                                                            {
                                                                _method:
                                                                    "DELETE",
                                                            }
                                                        );
                                                    }
                                                }}
                                            >
                                                <button
                                                    type="submit"
                                                    className="font-bold py-4 px-6 bg-red-700 text-white rounded-full"
                                                >
                                                    Delete
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No items found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
