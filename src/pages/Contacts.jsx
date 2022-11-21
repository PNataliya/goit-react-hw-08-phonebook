import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from '../components/ContactsList/ContactsList';
import { ContactEditor } from '../components/ContactEditor/ContactEditor';
import { Filter } from '../components/Filter/Filter';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';
import {
  BoxContacts,
  MainContainer,
  Container,
  Wrapper,
  WrapperFilter,
} from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <MainContainer>
        <Container>
          <BoxContacts>
            <Wrapper>
              <ContactEditor />
              <div>{isLoading && 'Request in progress...'}</div>
              <ContactList />
            </Wrapper>
            <WrapperFilter>
              <Filter />
            </WrapperFilter>
          </BoxContacts>
        </Container>
      </MainContainer>
    </>
  );
}
