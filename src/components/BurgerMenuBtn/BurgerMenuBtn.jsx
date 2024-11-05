import { ReactSVG } from 'react-svg';
import menu from '../../assets/icons/menu.svg';

export default function BurgerMenuBtn() {
  return (
    <button>
      <ReactSVG
        src={menu}
        beforeInjection={(svg) => {
          svg.setAttribute(
            "style",
            `width: 40px; height: 40px; color: var(--green-mint); fill: color: var(--green-mint);`
          );
        }}
      />
    </button>
  );
}
