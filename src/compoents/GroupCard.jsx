import { useState } from "react";
import GroupholderList from "./GroupholderList";

export default function GroupCard({ group }) {
    const [showGroupholders, setShowGroupholders] = useState(false);

    return (
        <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{group.name}</h2>
                <button
                    className="text-blue-500 underline text-sm"
                    onClick={() => setShowGroupholders(!showGroupholders)}
                >
                    {showGroupholders ? "Hide" : "View"} Groupholders
                </button>
            </div>

            {showGroupholders && (
                <div className="mt-2 space-y-2">
                    {group.groupholders.map((gh) => (
                        <GroupholderList key={gh.id} groupholder={gh} />
                    ))}
                </div>
            )}
        </div>
    );
}
