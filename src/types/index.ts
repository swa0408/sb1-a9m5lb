export interface UserProfile {
  id: string;
  name: string;
  dateOfBirth: string;
  nickname: string;
  favoriteColor: string;
  favoriteFruit: string;
  favoriteSeason: string;
  bio: string;
  partnerId?: string;
}

export interface JournalEntry {
  id: string;
  content: string;
  date: string;
  userId: string;
}

export interface RoutineTask {
  id: string;
  time: string;
  task: string;
  userId: string;
}

export interface Goal {
  id: string;
  title: string;
  completed: boolean;
  userId: string;
}

export interface Task {
  id: string;
  title: string;
  category: string;
  completed: boolean;
  userId: string;
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  timestamp: string;
}

export interface DailyReflection {
  id: string;
  date: string;
  morningAnswer: string;
  eveningAnswer: string;
  userId: string;
}