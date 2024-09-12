import success from './../assets/img/verified.png'
import { Button } from "@nextui-org/react";
import Lottie from "react-lottie";
import animationData from '../assets/animations/Animation - Success.json';

export default function ResultMessage(props) {

    const { data, prevPage } = props;

    console.log(data)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="w-full h-full flex items-center flex-col justify-between pt-6">
            <div className="w-full flex flex-col items-center justify-center">
                {/* <img src={success} alt="شماره موبایل" className="w-48" /> */}
                <span><Lottie options={defaultOptions} height={350} width={350} /></span>
                <h1 className="text-4xl font-lale font-bold py-8 -mt-8">ثبت نام موفقیت‌آمیز بود!</h1>
                <p className='text-center leading-10 text-xl'>کاربر گرامی ثبت محصول شما با نام ' <span className='font-semibold text-blue-500'> {data.product_name}! </span > و با شناسه '<span className='font-semibold text-blue-500'> {data.product_sku} </span>' با موفقیت ثبت شد.</p>
            </div>
            <div className="w-full flex items-center justify-center">
                <Button
                    color="primary"
                    variant="flat"
                    className="w-full text-zinc-100 font-semibold ml-2"
                >
                بستن</Button>
            </div>
        </div>
    );
};