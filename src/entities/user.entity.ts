import { Table, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ name: 'name', type: 'varchar', length: '50' })
  name: string;
  @Column({ name: 'login_id', type: 'varchar', length: '8' })
  loginId: string;
  @Column()
  password: string;
}
