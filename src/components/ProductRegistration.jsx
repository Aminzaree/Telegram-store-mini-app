import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@nextui-org/react";
import { VscError } from "react-icons/vsc";
import Lottie from "react-lottie";
import mobileNumber from './../assets/img/mobile-phone.png';
import animationData from '../assets/animations/Animation - SearchProduct.json';

export default function ProductRegistration(props) {

    const { data, setData, nextPage, prevPage } = props;
    
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { product_category: data.product_category || '' },
    });

    const onSubmit = (formData) => {
        setData({ ...data, product_category: formData.product_category });
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

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex items-center flex-col justify-between">
            <div className="w-full flex flex-col items-center justify-center">
                {/* <img src={mobileNumber} alt="شماره موبایل" className="w-48" /> */}
                <span><Lottie options={defaultOptions} height={200} width={200} /></span>
                <h1 className="text-4xl font-lale font-bold pt-4 -mt-6">ثبت نوع محصول</h1>
            </div>
            <div className="w-full">
                <Controller
                    name="product_category"
                    control={control}
                    rules={{ required: "لطفا نوع محصول خود را انتخاب کنید!" }}
                    render={({ field }) => (
                        <select
                            {...field}
                            className="w-full h-14 min-h-14 px-3 py-2 outline-none rounded-medium cursor-pointer text-blue-600 bg-gray-900 border-medium border-solid border-blue-600 "
                            placeholder="انتخاب دسته‌بندی"
                        >
                            <option value="" disabled>نوع محصول خود را انتخاب کنید</option>
                            <option value="physical">فیزیکی</option>
                            <option value="digital">دیجیتال</option>
                        </select>
                    )}
                />
                {errors.product_category && <p className="flex items-center text-red-600 text-sm py-2"><VscError className="ml-2" size={20} />{errors.product_category.message}</p>}
            </div>
            <div className="w-full flex items-center justify-center mt-4">
                <Button
                    type="submit"
                    color="primary"
                    variant="flat"
                    className="w-full text-zinc-100 font-semibold ml-2"
                >
                 انتخاب محصول و ادامه
                 </Button> 
                
            </div>
        </form>
    );
}
