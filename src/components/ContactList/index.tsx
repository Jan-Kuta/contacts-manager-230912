import { useEffect, useState } from 'react'
import { Contacts, Contact as ContactType } from '../../types/contacts'
import { Contact } from '../Contact'
import { ContactForm } from '../ContactForm'

export const ContactList = () => {
  const [contacts, setContacts] = useState<Contacts>([])
  const [edittedContact, setEdittedContact] = useState<ContactType|undefined>(undefined)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(data => setContacts(data))
  }, [])

  const onDelete = (id: number) => () => {
    fetch('https://jsonplaceholder.typicode.com/users/'+id.toString(), {
      method: 'DELETE'
    })
      .then(() => {
        setContacts(contacts.filter((contact) => contact.id !== id))
      })
  }

  const onEdit = (id: number) => () => {
    setEdittedContact(contacts.find((contact) => contact.id === id))
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        {contacts.map((contact) => (
          <Contact
            key={contact.id} name={contact.name} email={contact.email} phone={contact.phone}
            onDelete={onDelete(contact.id)} onEdit={onEdit(contact.id)}
          />
        ))}
      </div>
      {edittedContact !== undefined && <ContactForm {...edittedContact} />}
    </>
  )

}