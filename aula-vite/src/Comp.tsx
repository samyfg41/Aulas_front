import type { ReactNode } from "react";

type CompProps = {
    children: ReactNode;
};

const Comp = ({ children }: CompProps) => {
    return (
        <>
            <h2>Outro Parágrafo</h2>
            <p>{children}</p>
        </>
    );
};
export default Comp;