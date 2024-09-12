import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import { VscError } from "react-icons/vsc";
import Lottie from "react-lottie";
import avatar from './../assets/img/avatar.png'
import animationData from '../assets/animations/Animation - Product.json';

export default function GeneralProductInfo(props) {

    const { data, setData, nextPage, prevPage } = props;
    const [color, setColor] = useState("primary")

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { 
            product_name: data.product_name, 
            product_type: data.product_type
        }
    })

    const onSubmit = (formData) => {
        setData({
            ...data, 
            product_name: formData.product_name, 
            product_type: formData.product_type
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

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="w-full h-full flex items-center flex-col justify-between pt-6"
        >
            <div className="w-full flex flex-col items-center justify-center">
                {/* <img src={avatar} alt="شماره موبایل" className="w-48" /> */}
                <span><Lottie options={defaultOptions} height={200} width={200} /></span>
                <h1 className="text-4xl font-lale font-bold pt-4 -mt-6">اطلاعات عمومی محصول</h1>
            </div>
            <div className="w-full">
                <div className="w-full">
                    <label className="w-full">
                        <Input
                            type="text"
                            name="product_name"
                            {...register("product_name", { required: true })}
                            color={color}
                            variant={"bordered"}
                            label="نام محصول"
                            className="w-ful"
                        />
                    </label>
                    {errors.product_name && <p className="flex items-center text-red-600 text-sm py-2"><VscError className="ml-2" size={20} />لطفا نام محصول را وارد کنید!</p>}
                </div>
                <div className="w-full mt-4">
                    <Controller
                        name="product_type"
                        control={control}
                        rules={{ required: "لطفاً نوع دسته‌بندی محصول خود را انتخاب کنید!" }}
                        render={({ field }) => (
                            <select
                                {...field}
                                className="w-full h-14 min-h-14 px-3 py-2 outline-none rounded-medium cursor-pointer text-blue-600 bg-gray-900 border-medium border-solid border-zinc-600 focus:border-blue-600"
                                placeholder="دسته‌بندی محصول"
                            >
                                <option value="" disabled>دسته‌بندی محصول خود را انتخاب کنید</option>
                                <option value="Value_A">دسته‌‌بندی اول</option>
                                <option value="Value_B">دسته‌‌بندی دوم</option>
                                <option value="Value_C">دسته‌‌بندی سوم</option>
                            </select>
                        )}
                    />
                    {errors.product_type && <p className="flex items-center text-red-600 text-sm py-2"><VscError className="ml-2" size={20} />{errors.product_type.message}</p>}
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
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
                    ویرایش شماره موبایل</Button>
            </div>
        </form>
    );
};