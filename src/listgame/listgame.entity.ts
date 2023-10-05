import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('listgames')
export class ListGames {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  imageUrl: string;
  @Column()
  linkDownload: string;
}
