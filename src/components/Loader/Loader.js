import { Grid } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Grid type="Grid" radius={12.5} color="green" height={80} width={80} />
    </LoaderWrapper>
  );
};

export default Loader;
