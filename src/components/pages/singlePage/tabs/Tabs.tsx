import React, {useState} from "react";

interface Tabs {
    title: string;
    content: React.ReactNode
}

interface TabsComponentProps {
    tabs: Tabs[];
}

export function Tabs({tabs}: TabsComponentProps) {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="lg:text-lg">
            <ul className="flex gap-10 text-lg text-gray-500 font-bold mb-10">
                {tabs &&
                    tabs.map((tab, index) => {
                        let Tab = <li key={index}
                                      className={`${index === activeTab ? 'text-green-200 shadow-lg' : ''}  border rounded-full py-2 px-8 inline-block`}
                                      onClick={() => handleTabClick(index)}>{tab.title}</li>
                        return (
                            <>{Tab}</>
                        )
                    })}
            </ul>
            <div className={'text-gray-500 text-medium font-lato flex flex-col gap-5'}>
                {tabs[activeTab] && (
                    <p>{tabs[activeTab].content}</p>
                )}
            </div>
        </div>
    );
}

