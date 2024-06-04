const ArrowBack = ({ className }) => {
    return (
    <button className={className}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="#EEF1F4"/>
        <path d="M18.3333 25.8333L12.5 20M12.5 20L18.3333 14.1667M12.5 20L27.5 20" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
    )
};

export default ArrowBack;