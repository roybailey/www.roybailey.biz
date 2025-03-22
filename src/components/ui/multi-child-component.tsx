import React, {type ReactNode} from "react";

const MultiChildComponent = ({ children }: { children: ReactNode | ReactNode[] }) => {
    // Convert children to array to ensure compatibility with React 19
    const childrenArray = React.Children.toArray(children);
    console.log("Children count:", childrenArray.length);

    return (
        <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-md bg-white">
            {childrenArray.map((child, index) => (
                <div key={index} className="p-2 bg-gray-100 rounded-md mb-2">
                    {child}
                    <hr/>
                </div>
            ))}
        </div>
    );
};

export default MultiChildComponent;
