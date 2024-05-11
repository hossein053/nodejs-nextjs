import { SVGProps } from "react";

const dashboard = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 16 16"{...props}>
        <path
            fill="#2ca9bc"
            d="M16 10.1C16 5.7 12.4 2 8 2s-8 3.7-8 8.1c0 1.4.3 2.9.9 3.9h4.9c.5.6 1.3 1 2.2 1s1.7-.4 2.2-1h4.9c.6-1 .9-2.5.9-3.9M14 7v1l-4.1 3.5c0 .1.1.3.1.5 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.3 0 .6.1.8.2L13 7zm-4-3h1v1h-1zM5 4h1v1H5zm-3 8H1v-1h1zm1-4H2V7h1zm12 4h-1v-1h1z"
        />
    </svg>
);

const user = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
        <path d="M6 20.05V20a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v.05" />
    </svg>
);

const chevronRight = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="m9 6 6 6-6 6" />
    </svg>
);

const userFilled = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M0 0h24v24H0z" stroke="none" />
        <path
            d="M12 2a5 5 0 1 1-5 5l.005-.217A5 5 0 0 1 12 2m2 12a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5z"
            fill="currentColor"
            stroke="none"
        />
    </svg>
);

const lock = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M0 0h24v24H0z" stroke="none" />
        <path
            d="M12 2q-.327 0-.642.005l-.616.017-.299.013-.579.034-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553-.034.579q-.008.147-.013.299l-.017.616-.004.318L2 12q0 .327.005.642l.017.616.013.299.034.579.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046.579.034q.147.008.299.013l.616.017L12 22l.642-.005.616-.017.299-.013.579-.034.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553.034-.579q.008-.147.013-.299l.017-.616L22 12l-.005-.642-.017-.616-.013-.299-.034-.579-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046-.579-.034-.299-.013-.616-.017-.318-.004zm0 4a3 3 0 0 1 2.995 2.824L15 9v1a2 2 0 0 1 1.995 1.85L17 12v3a2 2 0 0 1-1.85 1.995L15 17H9a2 2 0 0 1-1.995-1.85L7 15v-3a2 2 0 0 1 1.85-1.995L9 10V9a3 3 0 0 1 3-3m3 6H9v3h6zm-3-4a1 1 0 0 0-.993.883L11 9v1h2V9a1 1 0 0 0-1-1"
            fill="currentColor"
            stroke="none"
        />
    </svg>
);

const registered = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <path d="M10 15V9h2a2 2 0 1 1 0 4h-2m4 2-2-2" />
    </svg>
);

const email = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M0 0h24v24H0z" stroke="none" />
        <path
            d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297.116.066a1 1 0 0 0 .878 0l.116-.066z"
            fill="currentColor"
            stroke="none"
        />
        <path
            d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z"
            fill="currentColor"
            stroke="none"
        />
    </svg>
);

const add = (props: SVGProps<SVGSVGElement>) => (
    <svg strokeWidth={2.5} stroke="#2ca9bc" viewBox="0 0 24 24" fill="none" {...props} >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9m3 9H9m3-3v6" />
    </svg>
);

const list = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" strokeWidth={2.5} stroke="#2ca9bc" fill="none" {...props} >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M13 5h8m-8 4h5m-5 6h8m-8 4h5M3 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
    </svg>
);

const edit = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
        <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" />
    </svg>
);

const setting = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" fill="none" {...props}>
        <path d="M0 0h24v24H0z" stroke="none" />
        <path fill="#2ca9bc" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065" />
        <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" fill="#fff" />
    </svg>
);

const eye = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round"  {...props}>
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
        <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6" />
    </svg>
);

const remove = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
    </svg>
);

const tick = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const exit = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path fill="#2ca9bc" d="M4 12a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H5a1 1 0 0 0-1 1M17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3" />
    </svg>
);

export const Svg = {
    dashboard, user, chevronRight, userFilled, lock, registered,
    email, add, list, edit, setting, eye, remove, tick, exit
}
