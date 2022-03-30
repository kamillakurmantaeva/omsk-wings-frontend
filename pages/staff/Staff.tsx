// Components
import Layout from 'components/Layout';
import WorkerCard from '../../components/WorkerCard';
import { IStaff } from 'interfaces/staff';

// Styles
import classes from './Staff.module.scss';

interface IProps {
  staff: IStaff[];
}

const Staff = ({ staff = [] }: IProps) => {
  return (
    <Layout title="Staff">
      <div className={classes.staff}>
        <h1 className={classes.staff__headline}>Персонал</h1>
        <ul className={classes.staff__cards}>
          {staff.map((staffMember) => (
            <WorkerCard
              key={staffMember.id}
              className={classes.staff__card}
              classNameImage={classes.staff__card__image}
              name={staffMember.full_name}
              position={staffMember.position}
              seasons={staffMember.about}
              birthday={staffMember.birthday_short}
              imageUrl={staffMember.photo}
            />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Staff;
