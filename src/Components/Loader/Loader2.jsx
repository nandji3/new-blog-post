import React from "react";
import { ImSpinner2 } from "react-icons/im";
import styles from "./Loader2.module.css";

function Loader2() {
    return (
        <div className=" fixed w-full h-full bg-slate-50 z-50 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-2">
                <div role="status">
                    {/* <ImSpinner9 className={styles.loader} /> */}
                    <ImSpinner2 className={styles.loader} />
                </div>
                <p className=" headFont text-[#334155] text-[1.5rem] font-bold">
                    Loading...
                </p>
            </div>
        </div>
    );
}
export default Loader2;
