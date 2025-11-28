import { Box, Container } from '@mui/material'
import Block from './component/Block';

export interface User {
  id: number;
  name: string;
}

function App() {

  const arr: User[] = [{ id: 1, name: "ashu" }, { id: 2, name: "rohan" }];

  return (
    <Container>
      {
        arr.map((user) => (
          <Block user={user} key={user.id} />
        ))
      }
    </Container>
  )
}

export default App