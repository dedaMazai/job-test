import { useEffect, useState } from "react";

export function useRemoveLicenseKey() {
    useEffect(() => {
        const blockLicenseKey = document.getElementById('hot-display-license-info');
        blockLicenseKey?.parentNode?.removeChild(blockLicenseKey);
        console.clear();
    }, [])
}
