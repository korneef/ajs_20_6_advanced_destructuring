export default function attackSelection(heroes) {
  const { special } = heroes;

  const attacks = [];

  for (let i = 0; i < special.length; i += 1) {
    if (!Object.keys(special[i]).includes('description')) {
      special[i].description = 'Описание недоступно';
    }

    const {
      id, name, icon, description,
    } = special[i];
    const attack = {
      id, name, icon, description,
    };
    attacks.push(attack);
  }

  return attacks;
}
