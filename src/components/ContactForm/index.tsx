import { Contact } from '../../types/contacts'

type Props = Contact & {
  onSave: () => void
}

export const ContactForm = ({id, email, phone, name, onSave}: Props) => {
  <dialog id="my_modal_1" className="modal" open={true}>
    <div className="modal-box">

      <div className="modal-action">
        <form method="dialog">
          <button className="btn btn-primary">Save</button>
          <button className="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
}