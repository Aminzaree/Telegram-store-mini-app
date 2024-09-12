export default function PageIndicator ({currentPage}) {

    const pages = [1, 2, 3 , 4];

    return (
        <div className="w-full flex justify-center items-center flex-row-reverse">
            {
                pages.map((page) => {
                    return (
                        <div 
                            key={page} 
                            className={`w-8 h-1 rounded-sm mx-1 ${currentPage === page ? 'bg-blue-800' : 'bg-blue-200'}`}
                        />
                    )
                })
            }
        </div>
    );
};