import TextError from "@/Components/TextError";
import { Categories } from "@/entity/category.entity";
import { Item } from "@/entity/item.entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "@inertiajs/react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    brand: z.string().min(1, "Brand is required"),
    category_id: z.string().min(1, "Category is required"),
});

interface UpdateItemProps {
    isOpen: boolean;
    onClose: () => void;
    category: Categories[];
    item: Item;
}

const UpdateItemModal: React.FC<UpdateItemProps> = ({
    isOpen,
    onClose,
    category,
    item,
}) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: item.name,
            brand: item.brand,
            category_id: item.category.id,
        },
    });

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        router.patch(route("items.update", item.id), data, {
            onSuccess: () => {
                form.reset();
                toast.success("Items updated successfully");
                onClose();
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            },
            onError: (errors) => {
                alert(JSON.stringify(errors));
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
                    Form Edit Category
                </h2>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            {...form.register("name")}
                        />
                        <TextError
                            children={
                                form.formState.errors.name &&
                                form.formState.errors.name.message
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="brand"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Brand
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            {...form.register("brand")}
                        />
                        <TextError
                            children={
                                form.formState.errors.brand &&
                                form.formState.errors.brand.message
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="brand"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Categories
                        </label>
                        <select
                            defaultValue={item.category.id}
                            id="categories"
                            {...form.register("category_id")}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                        >
                            <option value="">Select Option</option>
                            {category.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <TextError
                            children={
                                form.formState.errors.category_id &&
                                form.formState.errors.category_id.message
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

export default UpdateItemModal;
