import TextError from "@/Components/TextError";
import { Categories } from "@/entity/category.entity";
import { Item } from "@/entity/item.entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "@inertiajs/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = z.object({
    item_id: z.string().min(1, "Item is required"),
    status: z.string().min(1, "Status is required"),
});

interface AddUnitModalProps {
    isOpen: boolean;
    onClose: () => void;
    items: Item[];
}

const AddUnitModal: React.FC<AddUnitModalProps> = ({
    isOpen,
    onClose,
    items,
}) => {
    const status = ["Bagus", "Rusak", "Perlu Perbaikan", "Dalam Perbaikan"];

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            item_id: "",
            status: "",
        },
    });

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        router.post(route("units.store"), data, {
            onSuccess: () => {
                form.reset();
                toast.success("Unit created successfully");
                onClose();
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            },
            onError: (errors) => {
                alert(errors);
                form.reset();
                onClose();
            },
        });
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center transition-opacity text-left ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 rounded-lg z-50 relative w-4/6">
                <button
                    className="absolute top-2 right-2 text-gray-600 p-3"
                    onClick={onClose}
                >
                    Close
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Form Add Unit
                </h2>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label
                            htmlFor="item"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Item
                        </label>
                        <select
                            id="items"
                            {...form.register("item_id")}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                        >
                            <option value="">Select Option</option>
                            {items.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <TextError
                            children={
                                form.formState.errors.item_id &&
                                form.formState.errors.item_id.message
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="brand"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Status
                        </label>
                        <select
                            id="status"
                            {...form.register("status")}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                        >
                            <option value="">Select Option</option>
                            {status.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        <TextError
                            children={
                                form.formState.errors.status &&
                                form.formState.errors.status.message
                            }
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUnitModal;
