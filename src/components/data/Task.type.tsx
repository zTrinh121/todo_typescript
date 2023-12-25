export interface ITask{
    id: string;
    name: string;
    priority: string;
    progress: string;
    percentage: number;
}

export const taskListType: ITask[] = [
    // {
    //     id: '1',
    //     name: "Sleep",
    //     priority: "High",
    //     progress: "To do",
    //     percentage: 0,
    // },
    // {
    //     id:'2',
    //     name:'Go jogging',
    //     priority: 'Low',
    //     progress:'In Progress',
    //     percentage: 50
    // },
]