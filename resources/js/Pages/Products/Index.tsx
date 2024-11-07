import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from '@inertiajs/react';
import { GoTrash } from "react-icons/go";

type Product = {
    id: number;
    productName: string;
};

function Products({ products }: { products: Product[] }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        productName: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('products.store'), { onSuccess: () => reset() });
    };

    function handleDelete(id: number) {

    }

    return (
        <AuthenticatedLayout>
            <Head title="Products" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col gap-4">

                    <form onSubmit={submit}>
                        <input
                            value={data.productName}
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={e => setData('productName', e.target.value)}
                            placeholder="Product name"
                            type="text"
                        ></input>
                        <InputError message={errors.productName} className="mt-2" />
                        <PrimaryButton className="mt-4" disabled={processing}>Create</PrimaryButton>
                    </form>

                    <h1 className="text-slate-200 font-bold text-xl">Products</h1>
                    {products.map(product =>
                        <div key={product.id} className="bg-white p-4 rounded-md shadow-sm">
                            <div className="flex justify-between">
                                <span>{product.productName}</span>
                                <Link href={route('products.destroy', product.id)} method="delete" as="button">
                                    <GoTrash />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </AuthenticatedLayout>
    );
}

export default Products;
