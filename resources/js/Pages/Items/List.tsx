import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Item } from "@/entity/item.entity";
import { AddItemModal, DataTableItem } from "./Partials";
import { useState } from "react";
import { Categories } from "@/entity/category.entity";

export default function List({
    auth,
    items,
    categories,
}: PageProps<{ items: Item[]; categories: Categories[] }>) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => setIsModalOpen(true);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Items" />
                <div className="container mx-auto">
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="mb-10">
                                <button
                                    onClick={handleOpenModal}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    + Create Item
                                </button>
                            </div>
                            <div className="bg-white">
                                <DataTableItem
                                    items={items}
                                    categories={categories}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <AddItemModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    category={categories}
                />
            </AuthenticatedLayout>
        </>
    );
}
