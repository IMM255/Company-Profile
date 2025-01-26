import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";

export default function Index({ items }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Testimonial
                    </h2>
                    <Link
                        href={route("admin.testimonials.create")}
                        className="font-bold py-2 px-4 bg-indigo-700 text-white rounded-full"
                    >
                        Add New
                    </Link>
                </div>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-10">
                        <table className="w-full table-auto">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-left px-6 py-2">
                                        Thumbnail
                                    </th>
                                    <th className="text-left px-6 py-2">
                                        Message
                                    </th>
                                    <th className="text-left px-6 py-2">
                                        client id
                                    </th>
                                    <th className="text-left px-6 py-2">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.length > 0 ? (
                                    items.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-4 py-2 flex items-center">
                                                <img
                                                    src={item.thumbnail_url}
                                                    className="rounded-2xl object-cover w-[90px] h-[90px] mr-3"
                                                />
                                            </td>
                                            <td className="px-4 py-2">
                                                {item.message}
                                            </td>
                                            <td className="px-4 py-2">
                                                {item.project_client_id}
                                            </td>
                                            <td className="px-4">
                                                <Link
                                                    href={route(
                                                        "admin.testimonials.edit",
                                                        [item.id]
                                                    )}
                                                    className="inline-block font-bold py-2 px-4 bg-indigo-700 text-white rounded-full mr-2"
                                                >
                                                    Edit
                                                </Link>
                                                <form
                                                    className="inline-block"
                                                    onSubmit={(e) => {
                                                        e.preventDefault();
                                                        if (
                                                            confirm(
                                                                "Are you sure?"
                                                            )
                                                        ) {
                                                            router.post(
                                                                route(
                                                                    "admin.testimonials.destroy",
                                                                    {
                                                                        _method:
                                                                            "DELETE",
                                                                        testimonial:
                                                                            item.id,
                                                                    }
                                                                )
                                                            );
                                                        }
                                                    }}
                                                >
                                                    <button
                                                        type="submit"
                                                        className="inline-block font-bold py-2 px-4 bg-red-700 text-white rounded-full"
                                                    >
                                                        Delete
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={3}
                                            className="px-4 py-2 text-gray-500"
                                        >
                                            No items found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
