export interface Reminder {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    priority: 'low' | 'medium' | 'high';
    isCompleted: boolean;
    isArchived: boolean;
}
  