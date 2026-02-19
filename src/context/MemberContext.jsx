import { createContext, useContext, useState, useEffect } from "react";

const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [members, setMembers] = useState(() => {
    const stored = localStorage.getItem("members");
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage whenever members change
  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  // Add new member
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

  // Get members for specific agent
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
