import { Link } from './Link';

export function Page404 () {
  return (
    <>
      <div>
        <p>This is not fine</p>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Perro this is fine quemandose' />
      </div>
      <Link to='/'>Volver a Home</Link>
    </>
  );
}
