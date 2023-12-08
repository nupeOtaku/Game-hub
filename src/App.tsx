import { Grid, GridItem, Show } from '@chakra-ui/react';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      {' '}
      <GridItem area="nav" bg="tomato">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg={'papayawhip'}>
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="gold">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
