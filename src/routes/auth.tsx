import Shapes from "../assets/shapes.svg";
import Logo from "../assets/firma.png";
import Input from "../components/input";
import Button from "../components/button";
function Authentication() {
  return (
    <div className="flex flex-col overflow-hidden h-dvh">
      <div className="container flex flex-col items-center flex-1 px-4 pt-16 mx-auto">
        <img
          src={Logo}
          className="object-contain h-24 2xl:mb-12 w-max md:h-48 "
        />
        <form className="flex flex-col justify-center flex-1 gap-4 px-6 mdgap-6 md:px-0 w-96 ">
          <Input
            label="Nombre de Usuario"
            placeholder="Ingresa el nombre de usuario aqui"
          />
          <Input label="Contraseña" placeholder="Ingresa tu contraseña aqui" />
          <div />
          <Button>Ingresar</Button>
        </form>
      </div>
      <img src={Shapes} className="w-full " alt="Vite logo" />
    </div>
  );
}

export default Authentication;
