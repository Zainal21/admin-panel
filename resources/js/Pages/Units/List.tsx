import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { UnitItem } from "@/entity/unit_item.entity";
import { AddUnitModal, DataTableUnit } from "./Partials";
import { useState } from "react";
import { Item } from "@/entity/item.entity";

export default function List({
    auth,
    units,
    items,
}: PageProps<{ units: UnitItem[]; items: Item[] }>) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => setIsModalOpen(true);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Unit" />
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
                                <DataTableUnit units={units} items={items} />
                            </div>
                        </div>
                    </div>
                </div>
                <AddUnitModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    items={items}
                />
            </AuthenticatedLayout>
        </>
    );
}
