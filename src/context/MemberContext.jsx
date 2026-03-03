import { createContext, useContext, useState, useEffect } from "react";

const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [members, setMembers] = useState(() => {
    const stored = localStorage.getItem("members");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  const addMember = (memberData, agentId) => {
    const newMember = {
      id: Date.now(),
      ...memberData,
      agentId,
      totalSavings: 0,
      createdAt: new Date().toISOString(),
    };

    setMembers((prev) => [...prev, newMember]);
  };

  const getAgentMembers = (agentId) => {
    return members.filter((member) => member.agentId === agentId);
  };

  return (
    <MemberContext.Provider
      value={{
        members,
        addMember,
        getAgentMembers,
      }}
    >
      {children}
    </MemberContext.Provider>
  );
};

export const useMembers = () => useContext(MemberContext);
