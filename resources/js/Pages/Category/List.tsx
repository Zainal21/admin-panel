import { Head, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Categories } from "@/entity/category.entity";
import { DatatableCategory, AddCategoryModal } from "./Partials";
import { useState } from "react";

export default function List({
    auth,
    categories,
}: PageProps<{ categories: Categories[] }>) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => setIsModalOpen(true);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Categories" />
                <div className="container mx-auto">
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="mb-10">
                                <button
                                    onClick={handleOpenModal}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    + Create Categories
                                </button>
                            </div>
                            <div className="bg-white">
                                <DatatableCategory categories={categories} />
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
            <AddCategoryModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
}
