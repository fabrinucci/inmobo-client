export interface Agents {
  data: AgentData[];
}

export interface AgentData {
  agent_id:        number;
  firstName:       string;
  lastName:        string;
  email:           string;
  phone:           string;
  photo:           string;
  specializations: string[];
  slug:            string;
}