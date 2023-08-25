function Perfil() {
  return (
    <div>
      <h2>Meu nome é caio</h2>
      <p>Sou estudante de desenvolvimento de sistemas na ETEC Polivalente.</p>
      <label>Esse é meu linkedin: </label>
      <a src="https://github.com/caiovinitoledo">clique aqui!</a>
      <p>
        Tenho 17 anos e ja estou atuando no mercado de trabalho em pequenos
        projetos!
      </p>
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Bem vindo ao meu perfil!</h1>
      <Perfil />
    </div>
  );
}
