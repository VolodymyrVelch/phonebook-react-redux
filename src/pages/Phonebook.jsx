import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operation";
import { selectError, selectIsLoading } from "redux/selectors";
import { PhonebokCont, Contact } from "../components/General.styled";
import { ContactForm } from "../components/contactForm/ContactForm";
import { Filter } from "../components/filter/Filter";
import { ContactList } from "../components/contactList/ContactList";
import { useEffect } from "react";

export default function Phonebook() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError)
  
    useEffect(() => {
    dispatch(fetchContacts())
    }, [dispatch]);
    return (
        <PhonebokCont>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Contact>
                <Filter />
                {isLoading && !error && <b>Request in progress...</b>}
                <ContactList />
            </Contact>
        </PhonebokCont>);
}