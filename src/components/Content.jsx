import { useState } from 'react'
import PageIndicator from './PageIndicator'
import ProductRegistration from './ProductRegistration'
import GeneralProductInfo from './GeneralProductInfo'
import ProductSpecifications from './ProductSpecifications'
import ResultMessage from './ResultMessage'

export default function Content() {

    const [currentPage, setCurrentPage] = useState(1);
    const [formData, setFormData] = useState({
        product_category : '',
        product_name: '',
        product_type: '',
        product_weight: '',
        product_size: '',
        product_price: '',
        product_stock: '',
        product_sku: '',
        // images: '',
    });

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return (
                    <ProductRegistration data={formData} setData={setFormData} nextPage={nextPage} prevPage={prevPage} />
                );
            case 2:
                return (
                    <GeneralProductInfo data={formData} setData={setFormData} nextPage={nextPage} prevPage={prevPage} />
                );
            case 3:
                return (
                    <ProductSpecifications data={formData} setData={setFormData} nextPage={nextPage} prevPage={prevPage} setCurrentPage={setCurrentPage}/>
                );
            case 4:
                return (
                    <ResultMessage data={formData} setData={setFormData} prevPage={prevPage} setCurrentPage={setCurrentPage}/>
                );

        }
    }

    return (
        <div className='w-full md:w-9/12 h-full rounded-xl'>
            <PageIndicator currentPage={currentPage} />
            {
                renderPage()
            }
        </div>
    );
};