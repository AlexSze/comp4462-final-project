export function HeatMapLegend(props) {
    return (
        <svg
            width={218}
            height={25}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path fill="#EA0014" d="M0 5a5 5 0 015-5h20v25H5a5 5 0 01-5-5V5z" />
            <path fill="#e63847" d="M25 0h25v25H25z" />
            <path fill="#e2828a" d="M50 0h25v25H50z" />
            <path fill="#e1a3a3" d="M75 0h20a5 5 0 015 5v15a5 5 0 01-5 5H75V0z" />
            <path fill="#ffffff" d="M75 0h20a5 5 0 015 5v15a5 5 0 01-5 5H75V0z" />
        </svg>
    );
}