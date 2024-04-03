import { SVGProps } from "react";

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

export const Svg = {
    user, chevronRight, userFilled, lock, registered, email
}
