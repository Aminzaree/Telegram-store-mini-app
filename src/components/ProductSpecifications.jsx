import { useForm } from 'react-hook-form';
import { Input, Button } from "@nextui-org/react";
import { VscError } from 'react-icons/vsc';
import { useState } from 'react';
import ImageUploader from './ImageUploader';
import Lottie from "react-lottie";
import animationData from '../assets/animations/Animation - Details.json';

export default function ProductSpecifications(props) {
    const { data, setData, nextPage, prevPage } = props;
    const [uploadedImages, setUploadedImages] = useState(data.images || []);

    const validateNumber = (value) => {
        return /^\d+$/.test(value) || "لطفا فقط عدد وارد کنید!";
    };

    const { register, handleSubmit, watch, formState: { errors }, trigger  } = useForm({
        defaultValues: {
            product_weight: data.product_weight,
            product_size: data.product_size,
            product_price: data.product_price,
            product_stock: data.product_stock,
            product_sku: data.product_sku,
        },
        mode: "onChange",
    });

    const showProductPrice = watch("product_price");
    const [ProductPrice, setProductPrice] = useState("");

    const onSubmit = (formData) => {
        const formDataWithImages = {
            ...formData,
            images: uploadedImages,
        };

        setData({
            ...data,
            product_weight: formDataWithImages.product_weight,
            product_size: formDataWithImages.product_size,
            product_price: formDataWithImages.product_price,
            product_stock: formDataWithImages.product_stock,
            product_sku: formDataWithImages.product_sku,
            images: formDataWithImages.images,
        });

        nextPage();
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const formatPrice = (price) => {
        if (!price) return '';
        return parseInt(price).toLocaleString('fa-IR');
    };

   

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="w-full h-full flex items-center flex-col justify-between pt-6 overflow-auto">
            <div className="w-full flex flex-col items-center justify-center">
                <span><Lottie options={defaultOptions} height={120} width={120} /></span>
                <h1 className="text-2xl font-lale font-bold pt-4">مشخصات محصول</h1>
            </div>
            <div className="w-full mt-6">
                <div className="w-full">
                    <label className="w-full">
                        <Input
                            type="text"
                            name="product_weight"
                            {...register("product_weight", { 
                                required: "لطفا وزن محصول را وارد کنید!",
                                validate: validateNumber
                            })}
                            color="primary"
                            variant={"bordered"}
                            label="وزن محصول "
                            className="w-ful"
                        />
                    </label>
                    {errors.product_weight && <p className="flex items-center text-red-600 text-sm py-2"><VscError className="ml-2" size={20} />{errors.product_weight.message}</p>}
                </div>
                <div className="w-full mt-4">
                    <label className="w-full">
                        <Input
                            type="text"
                            name="product_size"
                            {...register("product_size", { required: true })}
                            color="primary"
                            variant={"bordered"}
                            label="ابعاد محصول "
                            className="w-ful"
                        />
                    </label>
                    {errors.product_size && <p className="flex items-center text-red-600 text-sm py-2"><VscError className="ml-2" size={20} />لطفا ابعاد محصول را وارد کنید!</p>}
                </div>
                <div className="w-full mt-4">
                    <label className="w-full">
                        <Input
                            type="text"
                            name="product_price"
                            {...register("product_price", {
                                required: "لطفا قیمت محصول را وارد کنید!",
                                validate: validateNumber
                            })}
                            color="primary"
                            variant={"bordered"}
                            label="قیمت محصول "
                            className="w-full"
                        />
                    </label>
                    {errors.product_price && <p className="flex items-center text-red-600 text-sm py-2"><VscError className="ml-2" size={20} />{errors.product_price.message}</p>}
                    {showProductPrice && (
                        <p className="text-sm text-end text-gray-500 mt-2">
                            قیمت وارد شده: {formatPrice(showProductPrice)} ریال
                        </p>
                    )}
                </div>
                <div className="w-full mt-4">
                    <label className="w-full">
                        <Input
                            type="text"
                            name="product_stock"
                            {...register("product_stock", { 
                                required: "لطفا تعداد موجودی محصول خود را وارد کنید!",
                                validate: validateNumber 
                            })}
                            color="primary"
                            variant={"bordered"}
                            label="تعداد موجودی محصول"
                            className="w-ful"
                        />
                    </label>
                    {errors.product_stock && <p className="flex items-center text-red-600 text-sm py-2"><VscError className="ml-2" size={20} />{errors.product_stock.message}</p>}
                </div>
                <div className="w-full mt-4">
                    <label className="w-full">
                        <Input
                            type="text"
                            name="product_sku"
                            {...register("product_sku", { required: true })}
                            color="primary"
                            variant={"bordered"}
                            label="شناسه محصول"
                            className="w-ful"
                        />
                    </label>
                    {errors.product_sku && <p className="flex items-center text-red-600 text-sm py-2"><VscError className="ml-2" size={20} />لطفا شناسه محصول را وارد کنید.</p>}
                </div>
                <div className='w-full mt-4'>
                    <ImageUploader onImagesChange={setUploadedImages} />
                </div>
            </div>
            <div className='w-full flex items-center justify-center mt-4'>
                <Button
                    type="submit"
                    color="primary"
                    variant="flat"
                    className="w-1/2 text-zinc-100 font-semibold ml-2"
                >
                    ثبت نهایی محصول</Button>
                <Button
                    onClick={prevPage}
                    color="danger"
                    variant="bordered"
                    className="w-1/2 text-red-600 font-semibold"
                >
                    بازگشت
                </Button>
            </div>
        </form>
    );
};
