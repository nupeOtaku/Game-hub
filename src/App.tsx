import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem area="aside">
          <GameGrid />
        </GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
};

export default App;
