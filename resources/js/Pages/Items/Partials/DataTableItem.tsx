import { Item } from "@/entity/item.entity";
import { router } from "@inertiajs/react";
import React, { useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import UpdateItemModal from "./UpdateItemModal";
import { Categories } from "@/entity/category.entity";

interface DataTableItemProps {
    items: Item[];
    categories: Categories[];
}

const DataTableItem: React.FC<DataTableItemProps> = ({ items, categories }) => {
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
                router.delete(route("items.destroy", id), {
                    onSuccess: () => {
                        toast.success("Item deleted successfully");
                        window.location.reload();
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
                    <th className="border px-6 py-4">Name</th>
                    <th className="border px-6 py-4">Brand</th>
                    <th className="border px-6 py-4">Category</th>
                    <th className="border px-6 py-4">Actions</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => {
                    const [isUpdateItemModalOpen, setUpdateItemModal] =
                        useState<boolean>(false);

                    const handleCloseModal = () => {
                        setUpdateItemModal(false);
                    };
                    return (
                        <tr key={item.id}>
                            <td className="border px-6 py-4">{index + 1}</td>
                            <td className="border px-6 py-4">{item.name}</td>
                            <td className="border px-6 py-4">{item.brand}</td>
                            <td className="border px-6 py-4">
                                {item.category.name}
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
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                                <UpdateItemModal
                                    isOpen={isUpdateItemModalOpen}
                                    onClose={handleCloseModal}
                                    category={categories}
                                    item={item}
                                />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DataTableItem;
