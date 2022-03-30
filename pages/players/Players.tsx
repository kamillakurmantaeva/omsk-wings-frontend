// Components
import Layout from 'components/Layout';
import PlayersSection from 'components/PlayersSection';

import classes from './Players.module.scss';

const Players = ({ players = [] }: any) => {
  return (
    <Layout title="Players">
      <div className={classes.players}>
        <div className={classes.players__container}>
          <h1 className={classes.players__title}>Команда</h1>
          <PlayersSection
            players={players}
            title="Вратари"
            position="Вратарь"
            icon="mask"
          />
          <PlayersSection
            players={players}
            title="Защитники"
            position="Защитник"
            icon="sticks"
          />
          <PlayersSection
            players={players}
            title="Нападающие"
            position="Нападающий"
            icon="aim"
          />
        </div>
      </div>

      {/* <h1>Players</h1>
      {players ? (
        <ul>
          {players.map((player) => (
            <li key={player.fullName}>
              <i className="icon-sticks" />
              {`Имя: ${player.fullName} | Позиция: ${
                player.position
              } | Дата Рождения: ${dayjs(player.birthday).format(
                'DD/MM/YYYY'
              )}`}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )} */}
    </Layout>
  );
};

export default Players;
