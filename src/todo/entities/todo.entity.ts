import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('todo')
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    activity: string;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    public date: Date;
}
