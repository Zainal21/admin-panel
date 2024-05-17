import { UnitItem } from "@/entity/unit_item.entity";
import { router } from "@inertiajs/react";
import React, { useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { UpdateUnitModal } from ".";
import { Item } from "@/entity/item.entity";

interface DataTableUnitProps {
    units: UnitItem[];
    items: Item[];
}

const DataTableUnit: React.FC<DataTableUnitProps> = ({ units, items }) => {
    const handleDelete = (id: string) => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure ?",
            text: "Do you want to delete the data?",
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("units.destroy", id), {
                    onSuccess: () => {
                        toast.success("Unit deleted successfully");
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    },
                    onError: (errors) => {
                        alert(errors);
                    },
                });
            }
        });
    };
    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="border px-6 py-4">#</th>
                    <th className="border px-6 py-4">Code</th>
                    <th className="border px-6 py-4">Name</th>
                    <th className="border px-6 py-4">Brand</th>
                    <th className="border px-6 py-4">Category</th>
                    <th className="border px-6 py-4">Status</th>
                    <th className="border px-6 py-4">Actions</th>
                </tr>
            </thead>
            <tbody>
                {units.length > 0 ? (
                    units.map((unit, index) => {
                        const [isUpdateItemModalOpen, setUpdateItemModal] =
                            useState<boolean>(false);

                        const handleCloseModal = () => {
                            setUpdateItemModal(false);
                        };
                        return (
                            <tr key={unit.id}>
                                <td className="border px-6 py-4">
                                    {index + 1}
                                </td>
                                <td className="border px-6 py-4">
                                    {unit.code}
                                </td>
                                <td className="border px-6 py-4">
                                    {unit.item.name}
                                </td>
                                <td className="border px-6 py-4">
                                    {unit.item.brand}
                                </td>
                                <td className="border px-6 py-4">
                                    {unit.item.category.name}
                                </td>
                                <td className="border px-6 py-4">
                                    {unit.status}
                                </td>
                                <td className="border px-6 py-4">
                                    <button
                                        onClick={() => setUpdateItemModal(true)}
                                        className="w-1/2 px-5 mx-2 py-2 text-sm text-gray-800 transition-colors duration-200 bg-white border rounded-lg sm:w-auto -800  hover:bg-gray-100 "
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="w-1/2 px-5 mx-2 py-2 text-sm text-gray-200 transition-colors duration-200 bg-red-600 border rounded-lg sm:w-auto -800  hover:bg-red-700 "
                                        onClick={() => handleDelete(unit.id)}
                                    >
                                        Delete
                                    </button>
                                    <UpdateUnitModal
                                        isOpen={isUpdateItemModalOpen}
                                        onClose={handleCloseModal}
                                        unit={unit}
                                        items={items}
                                    />
                                </td>
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <td
                            className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap text-center"
                            colSpan={6}
                        >
                            No Data Available
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default DataTableUnit;
