import React, {type ReactNode} from "react";
import MultiChildComponent from "@/components/ui/multi-child-component.tsx";

const MultiChildComponentTest = () => {
    return (
        <MultiChildComponent>
            <p>First child</p>
            <p>Second child</p>
            <p>Third child</p>
        </MultiChildComponent>
    );
};

export default MultiChildComponentTest;
