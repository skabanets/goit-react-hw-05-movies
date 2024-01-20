import { ActorAvatar, ActorCardWrapper } from './ActorCard.styled';

export const ActorCard = ({ cast }) => {
  const defaultActorAvatar =
    'https://i.pinimg.com/236x/90/52/a9/9052a929b1f3fd446d396dd5359a998c.jpg';
  const actorAvatar = cast.profile_path
    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
    : defaultActorAvatar;

  return (
    <ActorCardWrapper>
      <ActorAvatar src={actorAvatar} alt={cast.name} />
      <h3>{cast.name}</h3>
      {cast.character && <p>Character: {cast.character}</p>}
    </ActorCardWrapper>
  );
};
